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
} from "@fortawesome/free-solid-svg-icons";

import "./assignments.scss";
/** Edit form for assignment; All input, textarea, and select form elements must be styled with Bootstrap form-control class
● The input fields Points, Assignment Group, Display Grade as, Submission Type, and Assign, must appear on
the top left of their related fields
● Bootstrap grid classes such as row and col, must be used to implement the rows and columns that
separate the form labels and their related fields and sections
● The calendar icons next to the Due, Available from, and Until fields are not required
● The date format of the Due, Available from, and Until fields is not required. Dates can render as
MM/DD/YYYY
● White spaces around and between content must be implemented with Bootstrap margin and padding
classes */
export const EditAssignment: FC = () => {
  const params = useParams();
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
  }

  return (
    <div className="edit-assignment">
      <h1>Edit Assignment</h1>
      {/* Use bootstrap grid to have one columns for labels (points, assignment group, display grade as, submission type, assign- and another for their associated ionput fields) the labels should be in one col and inputs to the right in another*/}
      <div>
        <label htmlFor="name">Assignment Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={assignment.name}
        />
      </div>
      <div>
        <textarea
          name="description"
          id="description"
          className="form-control"
          value={assignment.description}
        />
      </div>
      <div className="form-group row input-section">
        <label htmlFor="points" className="col-sm-2 col-form-label ">
          Points
        </label>
        <div className="col-sm-7">
          <input
            type="number"
            className="form-control"
            id="points"
            placeholder="Points"
            value={assignment.grade}
          />
        </div>
      </div>
      <div className="form-group row input-section">
        <label htmlFor="assignment-group" className="col-sm-2 col-form-label">
          Assignment Group
        </label>
        <div className="col-sm-7">
          <select
            className="form-control"
            id="assignment-group"
            value={assignment.assignmentGroup}
          >
            <option value="group1">Group 1</option>
            <option value="group2">Group 2</option>
            <option value="group3">Group 3</option>
          </select>
        </div>
      </div>
      <div className="form-group row input-section">
        <label htmlFor="display-grade-as" className="col-sm-2 col-form-label">
          Display Grade As
        </label>
        <div className="col-sm-7 edit-item">
          <select
            className="form-control"
            id="display-grade-as"
            value={assignment.displayGradeAs}
          >
            <option value="points">Points</option>
            <option value="percentage">Percentage</option>
            <option value="complete-incomplete">Complete/Incomplete</option>
          </select>
          {/* Checkbox 'do not count this assignment' */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="do-not-count"
              value=""
            />
            <label className="form-check-label" htmlFor="do-not-count">
              Do not count this assignment towards the final grade
            </label>
          </div>
        </div>
      </div>
      <div className="form-group row input-section">
        <label htmlFor="submission-type" className="col-sm-2 col-form-label">
          Submission Type
        </label>
        <div className="col-sm-7 edit-group">
          <select
            className="form-control"
            id="submission-type"
            value={assignment.submissionType}
          >
            <option value="online">Online</option>
            <option value="on-paper">On Paper</option>
            <option value="none">None</option>
          </select>
          <label htmlFor="">Online Entry Options</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="text-entry"
              value=""
            />
            <label className="form-check-label" htmlFor="text-entry">
              Text Entry
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="text-entry"
              value=""
            />
            <label className="form-check-label" htmlFor="text-entry">
              Text Entry
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="text-entry"
              value=""
            />
            <label className="form-check-label" htmlFor="text-entry">
              Text Entry
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="text-entry"
              value=""
            />
            <label className="form-check-label" htmlFor="text-entry">
              Text Entry
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="text-entry"
              value=""
            />
            <label className="form-check-label" htmlFor="text-entry">
              Text Entry
            </label>
          </div>
        </div>
      </div>
      <div className="form-group row input-section">
        <label htmlFor="assign" className="col-sm-2 col-form-label">
          Assign
        </label>
        <div className="col-sm-7 edit-group">
          <label htmlFor="">Assign To:</label>
          <input
            type="text"
            className="form-control"
            id="assign-to"
            value={assignment.assignTo}
          />
          <label htmlFor="">Due</label>
          <input
            type="date"
            className="form-control"
            id="due"
            placeholder="Due"
            value={assignment.due}
          />
          <div className=" date-range">
            <div className="col-sm-6">
              <label htmlFor="">Available From</label>
              <input
                type="date"
                className="form-control"
                id="available-from"
                placeholder="Available From"
                value={assignment.availableFrom}
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="">Until</label>
              <input
                type="date"
                className="form-control"
                id="until"
                placeholder="Until"
                value={assignment.until}
              />
            </div>
          </div>
          <button className="btn btn-minimal w-100">Add</button>
        </div>
      </div>
      <hr />
      <div className="edit-assignment__footer">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="notify-students"
            value=""
          />
          <label className="form-check-label" htmlFor="notify-students">
            Notify students that this content has changed
          </label>
        </div>
        <div className="edit-assignment__footer__buttons">
          <button className="btn btn-outline-secondary">Cancel</button>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};
