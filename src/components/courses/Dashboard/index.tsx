import React, { FC, useEffect, useContext, useState } from "react";
import styles from "./dashboard.module.scss";
import { CourseCard } from "./CourseCard";
import { NavigationContext } from "../../../hooks/NavigationContext";
import {
  Typography,
  Box,
  TextField,
  Fade,
  Modal,
  FormControl,
} from "@mui/material";
import db from "../../../Database";
import { Button } from "../../ui/Button";
import { EditCourseModal } from "./NewCourseModal";
import { ICourse } from "../../../types";
import { randomUUID } from "crypto";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";


export const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export interface IDashboardState {
  courses: ICourse[];
  course: ICourse;
  setCourses: (courses: ICourse[]) => void;
  setCourse: (course: ICourse) => void;
  addNewCourse: (course: ICourse) => void;
  deleteCourse: (course: ICourse) => void;
  updateExistingCourse: (course: ICourse) => void;
}

export const Dashboard: FC<IDashboardState> = ({
  courses,
  course,
  setCourses,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateExistingCourse,
  ...props
}) => {
  const nav = useContext(NavigationContext);

  useEffect(() => {
    nav.setCurrent(<Typography variant="h6">Dashboard</Typography>);
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    // console.log(course);
    setOpen(false);
  };

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("open");
    e.stopPropagation();
    setOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    // console log form data
    addNewCourse(course);
    handleClose();

    if (course._id) {
      updateExistingCourse(course);
    } else {
      setCourse({
        _id: "",
        name: "",
        number: "",
        startDate: undefined,
        endDate: undefined,
      });
    }
  };

  const handleEdit = (course: ICourse) => {
    console.log(course);
    setCourse(course);
    setOpen(true);
  };

  return (
    <div className={styles.dashboard}>
      <Box>
        <Typography variant="h6">
          Published Courses
          <span> ({courses.length})</span>
        </Typography>
        <Button size="small" color="primary" onClick={handleOpen}>
          New Course
        </Button>
      </Box>

      <hr />
      <div className={styles.courses}>
        {courses.map((course) => (
          <CourseCard
            course={course}
            onDelete={() => deleteCourse(course)}
            onEdit={() => handleEdit(course)}
          />
        ))}
      </div>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <form onSubmit={handleSubmit}>
            <Box sx={modalStyle}>
              <TextField
                label="Course Name"
                name="name"
                required
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
                defaultValue={course.name}
              />
              <TextField
                label="Course Number"
                name="number"
                required
                onChange={(e) =>
                  setCourse({ ...course, number: e.target.value })
                }
                defaultValue={course.number}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Start Date"
                  value={dayjs(course.startDate)}
                  onChange={(e) =>
                    setCourse({ ...course, startDate: e || undefined })
                  }
                  // defaultValue={course.startDate}
                />
                <DatePicker
                  label="End Date"
                  value={dayjs(course.endDate)}
                  onChange={(e) =>
                    setCourse({ ...course, endDate: e || undefined })
                  }
                  // defaultValue={course.endDate}
                />
              </LocalizationProvider>
              <Button type="submit" disabled={!course.name || !course.number}>
                Save
              </Button>
            </Box>
          </form>
        </Fade>
      </Modal>
    </div>
  );
};
