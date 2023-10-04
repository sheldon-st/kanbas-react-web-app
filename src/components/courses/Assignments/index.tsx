import React, { FC } from "react";
import { ICourse } from "../../../types/interfaces";
import { courses } from "../../../data/courses";
import { useParams, useLocation, NavLink } from "react-router-dom";
import "../../../scss/lists.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripVertical,
  faCheckCircle,
  faEllipsisVertical,
  faPenToSquare,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
import { EditAssignment } from "./edit";
export const Assignments: FC = () => {
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
      <div className="list__actions">
        <input
          type="text"
          className="form-control search__input p-2"
          placeholder="Search for Assignment"
        />
        <div className="button__group">
          <button
            className="btn btn-secondary"
            style={{ gap: "0.5rem", display: "flex", alignItems: "center" }}
          >
            <FontAwesomeIcon icon={faAdd} />
            Group
          </button>
          <button
            className="btn btn-secondary"
            style={{ gap: "0.5rem", display: "flex", alignItems: "center" }}
          >
            <FontAwesomeIcon icon={faAdd} />
            Assignment
          </button>
        </div>
      </div>
      <hr />
      <div className="list__container">
        <div className="list__item list__header">
          <div className="list__item__leading">
            <FontAwesomeIcon icon={faGripVertical} className="grip__icon" />
            <h6>Assignments</h6>
          </div>
          <div className={"list__item__trailing"}>
            <div className="list__item__tag rounded ">40% of total</div>

            <FontAwesomeIcon icon={faEllipsisVertical} className="more__icon" />
          </div>
        </div>
        <ul className="list__group">
          {course.assignments.map((assignment) => (
            <li key={assignment.id} className="list__item list__item__success">
              <div className="list__item__leading">
                <FontAwesomeIcon icon={faGripVertical} className="grip__icon" />
                <FontAwesomeIcon icon={faPenToSquare} className="pen__icon" />
                <div className="list__item__body">
                  <NavLink
                    to={`/courses/${course.id}/assignments/${assignment.id}`}
                  >
                    <h6>{assignment.name}</h6>
                  </NavLink>
                  <span>{assignment.description}</span>
                  <span>
                    <span style={{ fontWeight: "bold" }}>Due </span>
                    <span>{assignment.dueDate.toLocaleString()}</span>
                    <span> | </span>
                    <span>{assignment.id} pts</span>
                  </span>
                </div>
              </div>
              <div className={"list__item__trailing"}>
                <FontAwesomeIcon icon={faCheckCircle} className="check__icon" />
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="more__icon"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { EditAssignment };
