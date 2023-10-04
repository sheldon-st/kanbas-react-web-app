import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./secondary-navigation.module.scss";
import { NavigationContext } from "../../hooks/NavigationContext";
interface INavigationItemProps {
  to: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export const NavigationItem: FC<INavigationItemProps> = ({
  to,
  children,
  disabled = false,
}) => {
  const nav = React.useContext(NavigationContext);

  return (
    <li>
      <NavLink
        onClick={() => nav.setSecondaryNavigationOpen(false)}
        to={to}
        // base style and active style if NavLink is active and 'disabled' class if disabled true
        className={({ isActive }) =>
          isActive
            ? styles.active + " " + styles.navigationItem
            : styles.navigationItem + " " + (disabled ? styles.disabled : "")
        }
      >
        {children}
      </NavLink>
    </li>
  );
};
