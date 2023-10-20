import React, { FC } from "react";
//import "./modules.scss";
import { List, IconButton, Select, MenuItem } from "@mui/material";
import db from "../../../Database";
import { Add, CheckCircle, MoreVert } from "@mui/icons-material";
import { Button } from "../../ui/Button";
import { CollapsibleListItem } from "../../ui/List/CollapsibleListItem";
import { useCourse } from "../../../hooks/CourseContext";

export const Modules: FC = () => {
  const course = useCourse().course;

  if (!course) {
    return <div>Course not found</div>;
  }

  const modules = db.modules.filter((module) => module.course === course.name);

  return (
    <div className="page__content">
      <div className="page__header">
        <div className="page__header__actions">
          <Button priority="secondary">Collapse All</Button>
          <Button variant="contained">View Progress</Button>
          <Select
            value={"all"}
            sx={{
              backgroundColor: "#F7F7F7",
              border: "none !important",
              height: "36px",
            }}
          >
            <MenuItem value="all">Publish All</MenuItem>
            <MenuItem value="none">Unpublish All</MenuItem>
          </Select>
          <Button startIcon={<Add />} priority="primary">
            Module
          </Button>
          <IconButton sx={{ backgroundColor: "#f7f7f7", borderRadius: "4px" }}>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <hr />
      <List className="kanbas__list">
        {modules.map((module) => (
          <CollapsibleListItem
            title={module.name}
            description={module.description}
            actions={
              <div className="list__item__actions">
                <IconButton size="small">
                  <CheckCircle color="success" />
                </IconButton>
                <IconButton size="small">
                  <Add />
                </IconButton>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </div>
            }
          ></CollapsibleListItem>
        ))}
      </List>
    </div>
  );
};
