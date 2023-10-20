import React, { createContext, FC, ReactNode, useContext } from "react";
import { ICourse } from "../types";

export interface ICourseContext {
  course: ICourse | undefined;
  setCourse: (course: ICourse | undefined) => void;
}

export const CourseContext = createContext<ICourseContext>({
  course: undefined,
  setCourse: () => {},
});

export const useCourse = () => useContext(CourseContext);
