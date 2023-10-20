import React, { FC } from "react";
import styles from "./grades.scss";
import { Button } from "../../ui/Button";
import {
  TextField,
  IconButton,
  FormLabel,
  ButtonGroup,
  InputAdornment,
} from "@mui/material";
import { Filter, ImportExport, Settings, Search } from "@mui/icons-material";

import db from "../../../Database";
import "../../../scss/custom.scss";
import { useCourse } from "../../../hooks/CourseContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
interface IGradesProps {
  //children: React.ReactNode;
}

export const Grades: FC<IGradesProps> = () => {
  const course = useCourse().course;

  if (!course) {
    return <div>Course not found</div>;
  }

  const assignments = db.assignments.filter(
    (assignment) => assignment.course === course.name
  );

  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === course._id
  );
  console.log(enrollments);

  // get path starting with current course id:
  const currentPath = location.pathname.split("/").slice(2);

  return (
    <div className="page__content">
      <div className="page__header__actions">
        <Button startIcon={<ImportExport />}>Import</Button>
        <Button
          endIcon={<Filter />}
          aria-controls="export-menu"
          aria-haspopup="true"
          aria-expanded={false}
        >
          Export
        </Button>
        <Button startIcon={<Settings />}>Settings</Button>
      </div>

      <div className="grade__inputs" style={{ display: "flex", gap: "8px" }}>
        <div className="input__field">
          <FormLabel>Student Names</FormLabel>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search Students"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="input__field">
          <FormLabel>Assignment Names</FormLabel>

          <TextField
            // label="Search assignments"
            variant="outlined"
            size="small"
            placeholder="Search Assignments"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>

      <Button
        variant="contained"
        sx={{ width: "fit-content" }}
        startIcon={<Filter />}
      >
        Apply Filters
      </Button>

      <hr />
      <div className="grade__table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#f7f7f7" }}>
                <TableCell>Student</TableCell>
                {assignments.map((assignment) => (
                  <TableCell align="right">{assignment.title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {enrollments.map((enrollment) => {
                const user = db.users.filter(
                  (user) => user._id === enrollment.user
                )[0];
                return (
                  <TableRow
                    key={enrollment._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user.firstName} {user.lastName}
                    </TableCell>
                    {assignments.map((assignment) => {
                      const grade = db.grades.filter(
                        (grade) =>
                          grade.assignment === assignment._id &&
                          grade.student === enrollment.user
                      )[0];
                      return (
                        <TableCell align="right">
                          {grade ? grade.grade : "-"}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
