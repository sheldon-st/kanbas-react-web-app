import React, { FC } from "react";
import { Modules } from "./Modules";
import { ICourse, IModule } from "../../types";
//import { courses, modules } from "../../data/courses";
import { useParams, useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import {
  AnalyticsOutlined,
  AnnouncementOutlined,
  DriveFileMoveOutlined,
  GroupsOutlined,
  ImportExportOutlined,
  MyLocationOutlined,
  NotificationsActiveOutlined,
} from "@mui/icons-material";
import "./course-layout.scss";
import { PlatformManager } from "../PlatformManager";
import { Typography, Chip, Stack } from "@mui/material";
import { useCourse } from "../../hooks/CourseContext";
import db from "../../Database";
interface ICourseHomeProps {
  course: ICourse;
}
export const CourseHome: FC<ICourseHomeProps> = () => {
  const course = useCourse().course;
  if (!course) {
    return <div>Course not found</div>;
  }
  const modules = db.modules.filter((module) => module.course === course.name);

  const context = (
    <div className="button-col">
      <Button startIcon={<DriveFileMoveOutlined />}>
        Import Existing Content
      </Button>
      <Button startIcon={<GroupsOutlined />}>Import From Commons</Button>
      <Button startIcon={<MyLocationOutlined />}>Choose Home Page</Button>
      <Button startIcon={<AnalyticsOutlined />}>View Course Stream</Button>
      <Button startIcon={<AnnouncementOutlined />}>New Announcement</Button>
      <Button startIcon={<AnalyticsOutlined />}>New Analytics</Button>
      <Button startIcon={<NotificationsActiveOutlined />}>
        View Course Notifications
      </Button>
      <Typography variant="h6">To Do</Typography>
      <hr />
      <Stack direction="column" spacing={1}>
        {modules.map((module) => (
          <Stack direction="column" spacing={1}>
            <Stack direction="row" spacing={1}>
              <Chip label="5" size="small" color="error" />
              <Typography variant="body1">Grade {module.name}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </div>
  );

  return (
    <PlatformManager
      mobileRenderer={
        <div className="page__layout__smaller">
          <Modules />
          {context}
        </div>
      }
      desktopRenderer={
        <div className="page__layout">
          <Modules />
          {context}
        </div>
      }
      tabletRenderer={
        <div className="page__layout__smaller">
          <Modules />
          {context}
        </div>
      }
    />
  );
};
