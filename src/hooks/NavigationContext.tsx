import React, { createContext, FC, ReactNode, useContext } from "react";
// create and use a context to manage the mobile headers title and action on hamburger menu click
export interface INavigationContext {
  title: string;
  //action: () => void;
  setTitle: (title: string) => void;

  secondaryNavigation?: ReactNode;
  setSecondaryNavigation: (secondaryNavigation: ReactNode) => void;

  desktopHeader?: ReactNode;
  setDesktopHeader: (desktopHeader: ReactNode) => void;

  secondaryNavigationOpen: boolean;
  setSecondaryNavigationOpen: (secondaryNavigationOpen: boolean) => void;

  current?: ReactNode;
  setCurrent: (current: ReactNode) => void;
}

export const NavigationContext = createContext<INavigationContext>({
  title: "",
  //action: () => {},
  setTitle: () => {},
  secondaryNavigation: undefined,
  setSecondaryNavigation: () => {},
  desktopHeader: undefined,
  setDesktopHeader: () => {},
  secondaryNavigationOpen: false,
  setSecondaryNavigationOpen: () => {},
  current: undefined,
  setCurrent: () => {},
});

/* const params = useParams();
  const location = useLocation();

  const { courseId, assignmentId } = params;

  console.log(params);
  console.log(location);

  // async find course by id:
  const course: ICourse | undefined = courses.find(
    (course) => course.id === courseId
  );

  // async find assignment by id:
  const assignment = course?.assignments.find(
    (assignment) => assignment.id === assignmentId
  );

  if (!course || !assignment) {
    return <div>Course or assignment not found</div>;
  } */

// Create useCourse hook to get course from location based off above code
