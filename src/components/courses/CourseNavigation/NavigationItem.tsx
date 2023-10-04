import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./course-navigation.module.scss";

interface INavigationItemProps {
  to: string;
  children: React.ReactNode;
}

export const NavigationItem: FC<INavigationItemProps> = ({ to, children }) => {
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
        {children}
      </NavLink>
    </li>
  );
};
