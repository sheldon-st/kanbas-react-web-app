import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./dashboard.module.scss";
import { courses } from "../../../data/courses";
import { Header } from "../../Header";
interface IDashboardProps {
  children: React.ReactNode;
}

/** A Dashboard title must appear at the top of the screen as shown
A horizontal rule (<hr/>) must appear below the title as shown
A Published Courses sub title must appear as shown
At least 7 courses must be rendered under the Published Courses as shown
Courses must render in a grid of rows and columns as shown
Bootstrap classes d-flex, flex-row, and flex-wrap must be used to implement the grid of rows and columns
Bootstrap card classes must be used to render each course as a card with an image or solid color at the top and the course's title, term, year and section linked to the course screen (described later) as shown
The widths of the courses must be between 250 and 270 pixels, and can not change as the width of the window changes
There must be white spacing between courses above and below of between 30 and 40 pixels
There must be white spacing between the right most edge of the Kanbas Navigation sidebar and the left most edge of the left most course
When the window is at its widest, rows must show at most 4 courses per row
When the window shrinks and 4 courses don't fit, then at most 3 courses per row must display and the remaining courses must wrap to the next row
When the window shrinks and 3 courses don't fit, then at most 2 courses per row must display and the remaining courses must wrap to the next row
 */
export const Dashboard: FC = () => {
  return (
    <div className={styles.dashboard}>
      <Header>
        <h4>Dashboard</h4>
      </Header>
      <h5>
        Published Courses
        <span> ({courses.length})</span>
      </h5>

      {/* Bootstrap classes d-flex, flex-row, and flex-wrap must be used to implement the grid of rows and columns. max  # of columns is 6
       */}
      <div className={" d-flex flex-row flex-wrap " + styles.courses}>
        {courses.map((course) => (
          <NavLink
            to={`/courses/${course.id}/home`}
            className={styles.course + " card"}
          >
            {/* <img alt={course.name} className={"card-img-top" + styles.img} /> if image display image othersie solid color fill with  card-img-top class and card.color background color*/}
            {course.image ? (
              <img alt={course.name} className={"card-img-top"} />
            ) : (
              <div
                className={"card-img-top"}
                style={{
                  backgroundColor: course.color,
                  width: "100%",
                  height: "64px",
                }}
              />
            )}
            <div className={styles.course__body + " card-body"}>
              <h6 className={styles.course__title + " card-title"}>
                {course.longName}
              </h6>
              <p className={"card-text" + styles.course__term}>
                {course.name}.{course.semester}.{course.section} <br />
                {course.semester}
              </p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
