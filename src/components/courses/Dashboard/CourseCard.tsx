import React, { FC } from "react";
import Card from "@mui/material/Card";
import { CardActionArea, CardActions, Modal, Box, Fade } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ICourse } from "../../../types/course";
import { NavLink } from "react-router-dom";
import styles from "./dashboard.module.scss";
import { Delete, EditAttributes, EditNote } from "@mui/icons-material";
import { EditCourseModal } from "./NewCourseModal";

export const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CourseCard: FC<{
  course: ICourse;
  onDelete?: () => void;
  onEdit?: () => void;
}> = ({ course, onDelete, onEdit }) => {
  const [open, setOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("open");
    e.stopPropagation();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleDeleteOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("open");
    e.stopPropagation();
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => setDeleteOpen(false);

  return (
    <>
      {/* <NavLink to={`/kanbas/courses/${course._id}`} className={" card"}> */}
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={course.image}
            //  alt={course.name}
            style={{ backgroundColor: course.color }}
          />

          <CardContent>
            <Typography
              gutterBottom
              component="div"
              className={styles.course__title}
              color={course.color}
            >
              <NavLink to={`/kanbas/courses/${course._id}`} className={" card"}>
                {course.longName}
              </NavLink>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course.name}.{course.semester}.{course.number} <br />
              {course.semester}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={onEdit}>
              <EditNote />
            </Button>
            <Button size="small" color="primary" onClick={handleDeleteOpen}>
              <Delete />
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
      {/* </> </NavLink> */}
      <EditCourseModal
        open={open}
        onClose={handleClose}
        course={course}
        children={<> </>}
        style={modalStyle}
        // onSave={updateCourse}
      />
      <Modal open={deleteOpen} onClose={handleDeleteClose}>
        <Fade in={deleteOpen}>
          <Box sx={modalStyle}>
            <Typography variant="h6">Are you sure?</Typography>
            <Button onClick={handleDeleteClose}>Cancel</Button>
            <Button
              onClick={() => {
                onDelete && onDelete();
                handleDeleteClose();
              }}
            >
              Delete
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
