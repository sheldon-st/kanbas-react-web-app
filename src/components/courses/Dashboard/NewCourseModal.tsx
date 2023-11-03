import React, { FC } from "react";
import Card from "@mui/material/Card";
import {
  CardActionArea,
  CardActions,
  Modal,
  ModalProps,
  TextField,
  Input,
  Select,
  Fade,
  Box,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ICourse } from "../../../types/course";
import { NavLink } from "react-router-dom";

export interface IEditCourseModalProps extends ModalProps {
  course: ICourse;
  open: boolean;
  onSave?: () => void;
}

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const EditCourseModal: FC<IEditCourseModalProps> = ({
  course,
  open,
  style,
  ...props
}) => {
  return (
    <Modal open={open} {...props}>
      <Fade in={open}>
        <form action="">
          <Box sx={style}>
            <TextField label="Course Name" defaultValue={course.name} />
            <TextField label="Course Number" defaultValue={course.number} />
            <TextField label="Course Semester" defaultValue={course.semester} />
            <TextField
              label="Course Long Name"
              defaultValue={course.longName}
            />
            <TextField label="Course Color" defaultValue={course.color} />
            <TextField label="Course Image" defaultValue={course.image} />
            <Button type="submit">Save</Button>
          </Box>
        </form>
      </Fade>
    </Modal>
  );
};
