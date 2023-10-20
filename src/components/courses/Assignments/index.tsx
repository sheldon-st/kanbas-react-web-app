import React, { FC } from "react";
import { EditAssignment } from "./edit";
import db from "../../../Database";
import {
  Add,
  CheckCircle,
  DragIndicatorOutlined,
  MoreVert,
} from "@mui/icons-material";
import {
  List,
  Accordion,
  ListItem,
  Icon,
  IconButton,
  Select,
  MenuItem,
  Typography,
  Chip,
  TextField,
} from "@mui/material";
import { Button } from "../../ui/Button";
import { ListSubItem } from "../../ui/List";
import { CollapsibleListItem } from "../../ui/List/CollapsibleListItem";
import { useCourse } from "../../../hooks/CourseContext";

export const Assignments: FC = () => {
  const course = useCourse().course;

  if (!course) {
    return <div>Course not found</div>;
  }

  const assignments = db.assignments.filter(
    (assignment) => assignment.course === course.name
  );

  return (
    <div className="page__content">
      <div className="page__header">
        <TextField
          size="small"
          placeholder="Search for Assignment"
          sx={{ width: "100%", maxWidth: "250px" }}
        />
        <div className="page__header__actions">
          <Button startIcon={<Add />}>Group</Button>
          <Button startIcon={<Add />} priority="primary">
            Assignment
          </Button>
          <IconButton sx={{ backgroundColor: "#f7f7f7", borderRadius: "4px" }}>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <hr />
      <List>
        <CollapsibleListItem
          title="Assignments"
          actions={
            <div className="list__item__actions">
              <Chip label="40% of Total" variant="outlined" />
              <IconButton size="small">
                <Add />
              </IconButton>
              <IconButton size="small">
                <MoreVert />
              </IconButton>
            </div>
          }
        >
          {assignments.map((assignment) => (
            <ListSubItem
              to={`/kanbas/courses/${course._id}/assignments/${assignment._id}`}
              key={assignment._id}
            >
              <div className="item__leading">
                <DragIndicatorOutlined
                  sx={{
                    fontSize: 20,
                    color: "#5f6368",
                    marginRight: "5px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    component="span"
                  >
                    {assignment.title}
                  </Typography>
                  <span>
                    Multiple Modules | Due:{" "}
                    {assignment.dueDate.toLocaleDateString()} at{" "}
                    {assignment.dueDate.toLocaleTimeString()} |{" "}
                    {assignment.points} pts
                  </span>
                </div>
              </div>
              <div>
                <IconButton size="small">
                  <CheckCircle color="success" />
                </IconButton>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </div>
            </ListSubItem>
          ))}
        </CollapsibleListItem>
      </List>
    </div>
  );
};

export { EditAssignment };
