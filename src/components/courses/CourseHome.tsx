import React, { FC } from "react";
import { Modules } from "./Modules";
import { ICourse } from "../../types/interfaces";
import { courses } from "../../data/courses";
import { useParams, useLocation } from "react-router-dom";
interface ICourseHomeProps {
  course: ICourse;
}
export const CourseHome: FC<ICourseHomeProps> = () => {
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

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div style={{  width: "100%" }}>
      <Modules modules={course.modules}>
        <h1>Course Home</h1>
      </Modules>
    </div>
  );
};
