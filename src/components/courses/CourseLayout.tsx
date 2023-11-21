import React, { ReactNode, FC, useContext, useState, useEffect } from "react";
import CourseNavigation from "./CourseNavigation";
import { Outlet, useLocation } from "react-router-dom";
import { ICourse } from "../../types";
import { useParams } from "react-router-dom";
import { courses } from "../../data/courses";
import CourseHeader from "./CourseHeader";
import { InnerLayout } from "../layout/InnerLayout/InnerLayout";
import "./course-layout.scss";
import { NavigationItem } from "../navigation/SecondaryNavigation";
import { NavigationContext } from "../../hooks/NavigationContext";
import { BreadCrumbs } from "./Breadcrumbs";
import { CourseContext, useCourse } from "../../hooks/CourseContext";
import { getCurrentCourse } from "../../utils/course";
import axios from "axios";
const CourseLayout: FC = () => {
  const nav = useContext(NavigationContext);
  // const c = useCourse();
  const params = useParams();
  const location = useLocation();
  const { courseId } = params;
  // console.log(params);
  //console.log(location);

  // async find course by id:
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState<ICourse | null>(null);
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    console.log(response.data);
    setCourse(response.data);
  };

  // return course;

  const value = { course, setCourse };

  useEffect(() => {
    //nav.setTitle(breadcrumbs[0].props.children);
    nav.setCurrent(<BreadCrumbs />);
    setCourse(findCourseById(courseId));
  }, []);

  if (!course) {
    return <div>Course not found</div>;
  }

  //const courseId = course._id;

  // convert the NavigationItems below into an array with name and path
  const navigationItems = [
    { name: "Home", path: `/kanbas/courses/${courseId}`, exact: true },
    { name: "Modules", path: `/kanbas/courses/${courseId}/modules` },
    { name: "Piazza", path: "/404" },
    { name: "Zoom Meetings", path: "/404" },
    { name: "Assignments", path: `/kanbas/courses/${courseId}/assignments` },
    { name: "Quizzes", path: "/404" },
    { name: "Grades", path: `/kanbas/courses/${courseId}/grades` },
    { name: "People", path: "/404" },
    { name: "Panopto Video", path: "/404" },
    { name: "Discussions", path: "/404" },
    { name: "Announcements", path: "/404" },
    { name: "Pages", path: "/404" },
    { name: "Files", path: "/404" },
    { name: "Rubrics", path: "/404" },
    { name: "Outcomes", path: "/404" },
    { name: "Collaborations", path: "/404" },
    { name: "Syllabus", path: "/404" },
    { name: "Settings", path: "/404" },
  ];

  return (
    <CourseContext.Provider value={value}>
      <InnerLayout navigationItems={navigationItems} />
    </CourseContext.Provider>
  );
};

export default CourseLayout;
