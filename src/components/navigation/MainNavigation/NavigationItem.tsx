import React, { FC } from "react";
import styles from "./main-navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { NavigationContext } from "../../../hooks/NavigationContext";
import type {
  IconDefinition,
  IconName,
} from "@fortawesome/fontawesome-svg-core";
import { on } from "events";
import { PlatformManager } from "../../PlatformManager";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";

import DraftsIcon from "@mui/icons-material/Drafts";
import Typography from "@mui/material/Typography";
import { Icon } from "@mui/material";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
  NavLink,
} from "react-router-dom";

interface INavigationItemProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactElement;
  onClick?: () => void;
}

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref
) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  return (
    <li>
      <NavLink
        to={to}
        // base style and active style if NavLink is active
        className={({ isActive }) =>
          isActive
            ? styles.active + " " + styles.navigationItem
            : styles.navigationItem
        }
      >
        {icon ? <Icon className={styles.navigationIcon}>{icon}</Icon> : null}
        {primary}
      </NavLink>
    </li>
  );
}

export const NavigationItem: FC<INavigationItemProps> = ({
  to,
  children,
  icon,
  onClick,
}) => {
  const desktopNavigationItem = (
    <ListItemLink to={to} primary={children} icon={icon} />
  );

  const mobileNavigationItem = (
    <div>
      <NavLink
        onClick={onClick}
        to={to}
        // base style and active style if NavLink is active
        className={styles.mobileNavigationItem}
      >
        {children}
      </NavLink>
    </div>
  );

  return (
    <PlatformManager
      mobileRenderer={mobileNavigationItem}
      tabletRenderer={desktopNavigationItem}
      desktopRenderer={desktopNavigationItem}
    />
  );
};

{
  /* <div>
      <NavLink
        onClick={onClick}
        to={to}
        // base style and active style if NavLink is active
        className={({ isActive }) =>
          isActive
            ? styles.active + " " + styles.navigationItem
            : styles.navigationItem
        }
      >
        {children}
      </NavLink>
    </div> */
}
