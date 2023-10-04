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
import CourseList from "./components/courses/CourseList";
import { AccountLayout } from "./components/account/AccountLayout";
import { Navigate } from "react-router-dom";
import { Profile } from "./components/account/Profile";
import { EditProfile } from "./components/account/Profile/edit";
import { Dashboard } from "./components/courses/Dashboard";
import { CourseHome } from "./components/courses/CourseHome";
import { Assignments, EditAssignment } from "./components/courses/Assignments";
import { Grades } from "./components/courses/Grades";
function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountLayout />}>
            {/* Redirect to /account/profile by default */}
            <Route index element={<Navigate to="profile" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/edit" element={<EditProfile />} />

            <Route path="notifications" element={<div>Notifications</div>} />
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
          <Route path="/courses">
            {/* <Route index element={<CourseList />} /> */}
            <Route index element={<CourseList />} />

            <Route path=":courseId/" element={<CourseLayout />}>
              <Route index path="home" element={<CourseHome />} />
              <Route path="assignments">
                <Route index element={<Assignments />} />
                <Route path=":assignmentId" element={<EditAssignment />} />
              </Route>
              <Route
                path="grades"
                element={ <Grades />}
              />
            </Route>
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* <Route path="/courses">
            <CoursesLayout>
              <Route path="/" element={<div> Course Home</div>} />
              <Route
                path="/assignments"
                element={<div className="assignments"> Assignments</div>}
              />
              <Route
                path="/grades"
                element={<div className="grades"> Grades</div>}
              />
            </CoursesLayout>
          </Route> */}
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
