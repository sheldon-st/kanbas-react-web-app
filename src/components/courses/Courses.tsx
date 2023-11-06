import React, { FC, useEffect, useContext, useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Fade,
  Modal,
  FormControl,
} from "@mui/material";

import { ICourse } from "../../types";
import { NavLink } from "react-router-dom";

export const CourseList: FC<{ courses: ICourse[] }> = ({ courses }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {courses.map((course) => (
        <NavLink to={`/kanbas/courses/${course._id}`} className={" card"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              padding: "1rem",
            }}
          >
            <Box>
              <Typography variant="h5">{course.longName}</Typography>
              <Typography variant="h6">{course.number}</Typography>
            </Box>
          </Box>
        </NavLink>
      ))}
    </Box>
  );
};
