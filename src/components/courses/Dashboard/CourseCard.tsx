import React, { FC } from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ICourse } from "../../../types/course";
import { NavLink } from "react-router-dom";
import styles from "./dashboard.module.scss";
export const CourseCard: FC<{ course: ICourse }> = ({ course }) => {
  return (
    <NavLink to={`/kanbas/courses/${course._id}`} className={" card"}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={course.image}
            //  alt={course.name}
            style={{ backgroundColor: course.color }}
          />

          <CardContent>
            <Typography
              gutterBottom
              component="div"
              className={styles.course__title}
              color={course.color}
            >
              {course.longName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course.name}.{course.semester}.{course.number} <br />
              {course.semester}
            </Typography>
          </CardContent>
          {/*  <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
        </CardActionArea>
      </Card>
    </NavLink>
  );
};
