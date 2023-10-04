import React, { ReactNode, FC } from "react";
import CourseNavigation from "./CourseNavigation";
import { Outlet, useLocation } from "react-router-dom";
import { ICourse } from "../../types/interfaces";
import { useParams } from "react-router-dom";
import { courses } from "../../data/courses";
import CourseHeader from "./CourseHeader";
import { InnerLayout } from "../InnerLayout/InnerLayout";
import "./course-layout.scss";
import { NavigationItem } from "../SecondaryNavigation";
const CourseLayout: FC = () => {
  const params = useParams();
  const location = useLocation();

  const { courseId } = params;
  console.log(params);
  console.log(location);

  // async find course by id:
  const course: ICourse | undefined = courses.find(
    (course) => course.id === courseId
  );

  // get path starting with current course id:
  const currentPath = location.pathname.split("/").slice(2);

  console.log("current path: " + currentPath);
  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <InnerLayout header={<CourseHeader course={course} paths={currentPath} />}>
      <NavigationItem to={`/courses/${courseId}/home`}>Home</NavigationItem>
      <NavigationItem to="/404" disabled>
        Modules
      </NavigationItem>
      <NavigationItem to="/404" disabled>
        Piazza
      </NavigationItem>
      <NavigationItem to="/404" disabled>
        Zoom Meetings
      </NavigationItem>
      <NavigationItem to={`/courses/${courseId}/assignments`}>
        {" "}
        Assignments
      </NavigationItem>
      <NavigationItem to="/404" disabled>
        Quizzes
      </NavigationItem>
      <NavigationItem to={`/courses/${courseId}/grades`}>Grades</NavigationItem>
      <NavigationItem to="/404" disabled>
        People
      </NavigationItem>
      <NavigationItem to="/404" disabled>
        Panopto Video
      </NavigationItem>
      <NavigationItem to="/404" disabled>
        Discussions
      </NavigationItem>
      <NavigationItem to="/404" disabled>
        Announcements
      </NavigationItem>
      <NavigationItem to="/404" disabled>
        Pages
      </NavigationItem>
      <NavigationItem to="/404" disabled>
        Files
      </NavigationItem>
      <NavigationItem to="/404" disabled>
        Rubrics
      </NavigationItem>
      <NavigationItem to="/404" disabled>
        Outcomes
      </NavigationItem>
      <NavigationItem to="/404" disabled>
        Collaborations
      </NavigationItem>
      <NavigationItem to="/404" disabled>
        Syllabus
      </NavigationItem>
      <NavigationItem to="/404" disabled>
        Settings
      </NavigationItem>
    </InnerLayout>
  );
};

export default CourseLayout;
