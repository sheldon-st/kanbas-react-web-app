import React, { FC, useEffect } from "react";
//import "./modules.scss";
import {
  List,
  IconButton,
  Select,
  MenuItem,
  Modal,
  Fade,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import {
  Add,
  CheckCircle,
  MoreVert,
  Delete,
  EditNoteOutlined,
} from "@mui/icons-material";
import { Button } from "../../ui/Button";
import { CollapsibleListItem } from "../../ui/List/CollapsibleListItem";
import { useCourse } from "../../../hooks/CourseContext";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewModule,
  deleteModule,
  updateExistingModule,
  setModule,
  setModules,
} from "./moduleReducer";
import { IModule } from "../../../types";
import {
  findModulesForCourse,
  createModule,
} from "../../../api/modules/client";
import * as client from "../../../api/modules/service";
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
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

export const Modules: FC = () => {
  const course = useCourse().course;

  if (!course) {
    return <div>Course not found</div>;
  }

  const dispatch = useDispatch();
  useEffect(() => {
    findModulesForCourse(course.name).then((modules) => {
      dispatch(setModules(modules));
    });
  }, [course]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    // console.log(course);
    setOpen(false);
  };

  const handleEdit = (module?: IModule) => {
    if (!module) {
      dispatch(
        setModule({
          name: "",
          course: course.name || "",
          _id: "",
          description: "",
        })
      );
    } else {
      dispatch(setModule(module));
    }
    setOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    // console log form data
    //dispatch(addNewModule(module));
    handleClose();

    if (module._id) {
      console.log("update");
      const status = await client.updateModule(module);
      console.log(status);

      dispatch(updateExistingModule(module));
    } else {
      console.log("add");
      createModule(course.name, {
        ...module,
        _id: new Date().getTime().toString(),
      }).then((module) => {
        dispatch(
          addNewModule({
            ...module,
            _id: new Date().getTime().toString(),
          })
        );
      });
    }
  };

  const handleDelete = (module: IModule) => {
    client.deleteModule(module._id).then(() => {
      dispatch(deleteModule(module));
    });
  };

  return (
    <div className="page__content">
      <div className="page__header">
        <div className="page__header__actions">
          <Button priority="secondary">Collapse All</Button>
          <Button variant="contained">View Progress</Button>
          <Select
            value={"all"}
            sx={{
              backgroundColor: "#F7F7F7",
              border: "none !important",
              height: "36px",
            }}
          >
            <MenuItem value="all">Publish All</MenuItem>
            <MenuItem value="none">Unpublish All</MenuItem>
          </Select>
          <Button
            startIcon={<Add />}
            priority="primary"
            onClick={() => handleEdit()}
          >
            Module
          </Button>
          <IconButton sx={{ backgroundColor: "#f7f7f7", borderRadius: "4px" }}>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <hr />
      <List className="kanbas__list">
        {modules
          .filter((module) => module.course === course.name)
          .map((module) => (
            <CollapsibleListItem
              title={module.name}
              description={module.description}
              actions={
                <div className="list__item__actions">
                  <IconButton onClick={() => handleEdit(module)}>
                    <EditNoteOutlined />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleDelete(module);
                    }}
                  >
                    <Delete />
                  </IconButton>
                </div>
              }
            ></CollapsibleListItem>
          ))}
      </List>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <form onSubmit={handleSubmit}>
            <Box sx={modalStyle}>
              <TextField
                label="Module Name"
                name="name"
                required
                onChange={(e) =>
                  dispatch(
                    setModule({
                      ...module,
                      name: e.target.value,
                      course: course.name,
                    })
                  )
                }
                value={module.name}
              />
              <TextField
                label="Module Description"
                name="description"
                required
                onChange={(e) =>
                  dispatch(
                    setModule({ ...module, description: e.target.value })
                  )
                }
                value={module.description}
              />
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                type="submit"
                disabled={!module.name || !module.description}
              >
                Save
              </Button>
            </Box>
          </form>
        </Fade>
      </Modal>
    </div>
  );
};
