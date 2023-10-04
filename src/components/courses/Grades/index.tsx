import React, { FC } from "react";
import styles from "./grades.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImport,
  faFileExport,
  faGear,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useParams, useLocation } from "react-router-dom";

import { courses } from "../../../data/courses";
import { ICourse } from "../../../types/interfaces";
import "../../../scss/custom.scss";
interface IGradesProps {
  //children: React.ReactNode;
}

export const Grades: FC<IGradesProps> = () => {
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
    <div style={{ width: "100%" }}>
      <div
        className="grade__actions"
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <div className="button__group">
          <button
            className="btn btn-secondary"
            style={{ gap: "0.5rem", display: "flex", alignItems: "center" }}
          >
            <FontAwesomeIcon icon={faFileImport} />
            Import
          </button>
          <button
            className="btn btn-secondary dropdown-toggle"
            style={{ gap: "0.5rem", display: "flex", alignItems: "center" }}
          >
            <FontAwesomeIcon icon={faFileExport} />
            Export
          </button>
          <button
            className="btn btn-secondary"
            style={{
              gap: "0.5rem",
              display: "flex",
              alignItems: "center",
              height: "2.5rem",
            }}
          >
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
        <div className="grade__inputs" style={{ display: "flex", gap: "8px" }}>
          <div style={{ width: "100%" }}>
            Search students
            <input
              type="text"
              className="form-control search__input p-2"
              placeholder="Search Students"
            />
          </div>
          <div style={{ width: "100%" }}>
            Search assignments
            <input
              type="text"
              className="form-control search__input p-2"
              placeholder="Search Assignments"
            />
          </div>
        </div>
        <button className="btn btn-secondary" style={{ width: "fit-content" }}>
          Apply Filters
        </button>
      </div>
      <hr />
      {/* Create a table with all of the courses students and assignments, alternating row colors using bootstrap classes if necessary: */}
      <div className="grade__table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Student</th>
              {course.assignments.map((assignment) => (
                <th scope="col">{assignment.name + " (Out of 100)"}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {course.students.map((student) => (
              <tr>
                <th scope="row">{student.name}</th>
                {course.assignments.map((assignment) => (
                  <td style={{ width: "50%" }}>
                    {assignment.name === "Assignment 1" ? (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Grade"
                        style={{ width: "100%" }}
                        defaultValue={Math.floor(Math.random() * 100)}
                      />
                    ) : (
                      <span style={{ width: "50%" }}>100</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
