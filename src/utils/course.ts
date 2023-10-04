import { courses } from "../data/courses";

//get course by id
export const getCourseById = (id: string) => {
  return courses.find((course) => course.id === id);
};

// map path name to better format: store i.e. grades -> Grades
export const formatPathName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};


export const getAssignmentById = (courseId: string, assignmentId: string) => {
  const course = getCourseById(courseId);
  if (!course) return null;
  return course.assignments.find((assignment) => assignment.id === assignmentId);
}