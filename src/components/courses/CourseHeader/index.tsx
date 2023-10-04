import { NavLink } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import styles from "./course-header.module.scss";
import { ICourse } from "../../../types/interfaces";
import {
  getCourseById,
  formatPathName,
  getAssignmentById,
} from "../../../utils/course";
import { NavigationContext } from "../../../hooks/NavigationContext";
/** Breadcrumbs for course navigation i.e. course name > assignments > assignment name, and right aligned buttons */
const CourseHeader = ({
  course,
  paths,
}: {
  course: ICourse;
  paths: string[];
}) => {
  const breadcrumbs = paths.map((path, index) => {
    const isRoot = path == course.id;

    const toPath = "/courses/" + course.id + "/" + (isRoot ? "home" : path);

    if (
      paths.includes("assignments") &&
      index === paths.length - 1 &&
      path !== "assignments"
    ) {
      const assignmentId = paths[paths.indexOf("assignments") + 1];
      return (
        <NavLink
          to={`/courses/${course.id}/assignments/${assignmentId}`}
          className={({ isActive }) =>
            !isActive || isRoot ? "breadcrumb-item" : "breadcrumb-item active"
          }
          key={index}
          style={{ textDecoration: "none" }}
        >
          {getAssignmentById(course.id, assignmentId)!.name}
        </NavLink>
      );
    }

    return (
      <NavLink
        to={toPath}
        className={({ isActive }) =>
          !isActive || isRoot ? "breadcrumb-item" : "breadcrumb-item active"
        }
        key={index}
        style={{ textDecoration: "none" }}
        end
      >
        {index === 0 ? getCourseById(course.id)!.name : formatPathName(path)}
      </NavLink>
    );
  });

  // set navigation context to first breadcrumb
  const nav = useContext(NavigationContext);

  useEffect(() => {
    nav.setTitle(breadcrumbs[0].props.children);
  }, []);

  return (
    <nav aria-label="breadcrumb" className={styles.courseHeader}>
      <ol className={styles.breadcrumb + " breadcrumb"}>{breadcrumbs}</ol>
    </nav>
  );
};

export default CourseHeader;
