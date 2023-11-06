import "./App.css";
import {
  BrowserRouter,
  RedirectFunction,
  Route,
  Routes,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import CourseLayout from "./components/courses/CourseLayout";
import { ICourse, IAssignment } from "./types/interfaces";
import { AccountLayout } from "./components/account/AccountLayout";
import { Navigate } from "react-router-dom";
import { Profile } from "./components/account/Profile";
import { EditProfile } from "./components/account/Profile/edit";
import { Dashboard } from "./components/courses/Dashboard";
import { CourseHome } from "./components/courses/CourseHome";
import { Assignments, EditAssignment } from "./components/courses/Assignments";
import { Grades } from "./components/courses/Grades";
import { Modules } from "./components/courses/Modules";
import { Typography, Box } from "@mui/material";
import HelloWorld from "./Labs/a3/HelloWorld";
import Labs from "./Labs";
import Assignment3 from "./Labs/a3";
import Assignment4 from "./Labs/a4";
import React, { FC, useEffect, useContext, useState } from "react";
import db from "./Database";
import { IDashboardState } from "./components/courses/Dashboard";
import { CourseList } from "./components/courses/Courses";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  const [courses, setCourses] = useState(db.courses);
  const addNewCourse = (course: ICourse) => {
    setCourses([
      ...courses,
      {
        ...course,
        _id: new Date().getTime().toString(),
        color: "#000000",
        semester: "202410",
      },
    ]);
  };

  const deleteCourse = (course: ICourse) => {
    console.log(course);
    setCourses(courses.filter((c) => c._id !== course._id));
  };

  const updateExistingCourse = (course: ICourse) => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
  };

  const [course, setCourse] = useState<ICourse>({
    _id: "",
    name: "",
    number: "",
    startDate: undefined,
    endDate: undefined,
  });

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/kanbas/" element={<RootLayout />}>
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="account" element={<AccountLayout />}>
                {/* Redirect to /account/profile by default */}
                {/*  <Route index element={<Navigate to="profile" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/edit" element={<EditProfile />} /> */}

                <Route
                  path="notifications"
                  element={<div>Notifications</div>}
                />
                <Route path="settings" element={<div>Settings</div>} />
              </Route>
              {/*             <Route path="/login" element={<Login />} />
            <Route
              path="assignments"
              element={
                  <BlogLayout />
              }
            >
              <Route index element={<BlogPostsPage />} />
            </Route> */}
              {/* routes for /courses, /courses/assignments and /courses/grades, CoursesLayout renders the menu that should be in all of them and accepts children for each route: */}
              <Route path="courses">
                <Route index element={<CourseList courses={courses} />} />
                {/* <Route index element={<CourseList />} /> */}

                <Route path=":courseId/" element={<CourseLayout />}>
                  <Route index element={<CourseHome />} />
                  <Route path="assignments">
                    <Route index element={<Assignments />} />
                    <Route path=":assignmentId" element={<EditAssignment />} />
                  </Route>
                  <Route path="grades" element={<Grades />} />
                  <Route path="modules" element={<Modules />} />
                </Route>
              </Route>
              <Route
                path="dashboard"
                element={
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourses={setCourses}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateExistingCourse={updateExistingCourse}
                  />
                }
              />
              <Route
                path="calendar"
                element={
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",

                      paddingTop: "25%",
                    }}
                  >
                    <Typography variant="h1">Calendar</Typography>
                  </Box>
                }
              />
            </Route>
            <Route path="/labs/" element={<Labs />}>
              <Route path="a3" element={<Assignment3 />} />
              <Route path="a4" element={<Assignment4 />} />
            </Route>

            <Route path="/hello" element={<HelloWorld />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
