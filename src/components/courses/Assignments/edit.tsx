import React, { FC } from "react";
import { ICourse } from "../../../types";
import { useParams, useLocation, NavLink } from "react-router-dom";
import db from "../../../Database";
import { Button } from "../../ui/Button";
import { MoreVert } from "@mui/icons-material";
import { FormLabel, IconButton, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useCourse } from "../../../hooks/CourseContext";

export const EditAssignment: FC = () => {
  const { courseId, assignmentId } = useParams();

  // async find course by id:
  const course = useCourse().course;

  const assignment = db.assignments.filter(
    (assignment) => assignment._id === assignmentId
  )[0];

  if (!course || !assignment) {
    return <div>Course or assignment not found</div>;
  }

  const handleSave = () => {
    console.log("save");
  };

  return (
    <div className="page__content">
      <div className="page__header">
        <div className="page__header__actions">
          <IconButton sx={{ backgroundColor: "#f7f7f7", borderRadius: "4px" }}>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <hr />
      <div className="edit__body">
        <div className="input__field">
          <FormLabel>Assignment Name</FormLabel>
          <TextField
            size="small"
            placeholder="Assignment Name"
            value={assignment.title}
          />
        </div>
      </div>
      <hr />
      <div className="page__header">
        <div className="page__header__actions">
          <Link to={`/kanbas/courses/${courseId}/assignments`}>
            <Button>Cancel</Button>
          </Link>
          <Link
            to={`/kanbas/courses/${courseId}/assignments`}
            onClick={handleSave}
          >
            <Button priority="primary">Save</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
