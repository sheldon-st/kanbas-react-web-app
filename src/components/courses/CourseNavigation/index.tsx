import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./course-navigation.module.scss";
import { NavigationItem } from "./NavigationItem";
function CourseNavigation() {
  return (
    <div className={styles.courseNavigation}>
      <ul>
        <NavigationItem to="home">Home</NavigationItem>
        <NavigationItem to="/404">Modules</NavigationItem>
        <NavigationItem to="/404">Piazza</NavigationItem>
        <NavigationItem to="/404">Zoom Meetings</NavigationItem>
        <NavigationItem to="assignments">Assignments</NavigationItem>
        <NavigationItem to="/404">Quizzes</NavigationItem>
        <NavigationItem to="grades">Grades</NavigationItem>
        <NavigationItem to="/404">People</NavigationItem>
        <NavigationItem to="/404">Panopto Video</NavigationItem>
        <NavigationItem to="/404">Discussions</NavigationItem>
        <NavigationItem to="/404">Announcements</NavigationItem>
        <NavigationItem to="/404">Pages</NavigationItem>
        <NavigationItem to="/404">Files</NavigationItem>
        <NavigationItem to="/404">Rubrics</NavigationItem>
        <NavigationItem to="/404">Outcomes</NavigationItem>
        <NavigationItem to="/404">Collaborations</NavigationItem>
        <NavigationItem to="/404">Syllabus</NavigationItem>
        <NavigationItem to="/404">Settings</NavigationItem>
      </ul>
    </div>
  );
}

export default CourseNavigation;
