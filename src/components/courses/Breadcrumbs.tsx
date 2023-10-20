import React, { FC } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Link, { LinkProps } from "@mui/material/Link";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import "./course-layout.scss";
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from "react-router-dom";
import {
  getCourseById,
  formatPathName,
  getAssignmentById,
} from "../../utils/course";

interface ListItemLinkProps extends ListItemProps {
  to: string;
  open?: boolean;
}

// if courses/* should use getCourseById, then this should be a map of course.id to course.name
const formatBreadCrumb = (path: string) => {
  if (path === "courses") {
    return "Courses";
  } else if (getCourseById(path)) {
    return getCourseById(path)!.name;
  } else if (path === "assignments") {
    return "Assignments";
  }
  return formatPathName(path);
};

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}

export const BreadCrumbs: FC = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x)
    .splice(2);
  console.log("pathnames", pathnames);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `courses/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {formatBreadCrumb(value)}
          </Typography>
        ) : (
          <LinkRouter
            underline="hover"
            color="inherit"
            to={`/kanbas/${to}`}
            key={to}
            className="breadcrumb__item"
          >
            {formatBreadCrumb(value)}
          </LinkRouter>
        );
      })}

      {pathnames.length === 1 && (
        <Typography color="text.primary" key="home">
          Home
        </Typography>
      )}
    </Breadcrumbs>
  );
};
