import { ICourse, IModule, IAssignment } from "../types";

// import courses from ./courses.json and export it as a constant named courses and cast number of startDates and endDates to Date
import courseData from "./json/courses.json";
import moduleData from "./json/modules.json";
import userData from "./json/users.json";
import gradeData from "./json/grades.json";
import enrollmentData from "./json/enrollments.json";
import assignmentData from "./json/assignments.json";

const courses: ICourse[] = courseData.map((course) => ({
  ...course,
  startDate: new Date(course.startDate),
  endDate: new Date(course.endDate),
}));
const modules: IModule[] = moduleData;
const assignments: IAssignment[] = assignmentData.map((assignment) => ({
  ...assignment,
  dueDate: new Date(assignment.dueDate),
}));

export default {
  courses,
  modules,
  assignments,
  users: userData,
  grades: gradeData,
  enrollments: enrollmentData,
};
