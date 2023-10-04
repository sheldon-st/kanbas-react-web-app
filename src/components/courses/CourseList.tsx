import React, { ReactNode, FC } from "react";
import { NavLink } from "react-router-dom";
import { courses } from "../../data/courses";
// List of all courses with NavLink to each course
const CourseList: FC = () => {
  return (
    <div>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <NavLink to={`/courses/${course.id}/home`}>{course.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
