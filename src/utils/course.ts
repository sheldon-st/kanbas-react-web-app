import { useParams, useLocation } from "react-router-dom";
import db from "../Database";
//get course by id
export const getCourseById = (id: string) => {
  return db.courses.find((course) => course._id === id);
};

// map path name to better format: store i.e. grades -> Grades
export const formatPathName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const getAssignmentById = (courseId: string, assignmentId: string) => {
  const course = getCourseById(courseId);
  if (!course) return null;
  return db.assignments.find(
    (assignment) =>
      assignment._id === assignmentId && assignment.course === courseId
  );
};
