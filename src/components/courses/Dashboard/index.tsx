import React, { FC, useEffect, useContext } from "react";
import styles from "./dashboard.module.scss";
import { CourseCard } from "./CourseCard";
import { NavigationContext } from "../../../hooks/NavigationContext";
import { Typography } from "@mui/material";
import db from "../../../Database";
interface IDashboardProps {
  children: React.ReactNode;
}

export const Dashboard: FC = () => {
  const nav = useContext(NavigationContext);
  const courses = db.courses;

  useEffect(() => {
    nav.setCurrent(<Typography variant="h6">Dashboard</Typography>);
  }, []);

  return (
    <div className={styles.dashboard}>
      <Typography variant="h6">
        Published Courses
        <span> ({courses.length})</span>
      </Typography>
      <hr />
      <div className={styles.courses}>
        {db.courses.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
};
