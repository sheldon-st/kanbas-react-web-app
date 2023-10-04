import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./main-navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { NavigationContext } from "../../hooks/NavigationContext";
import type {
  IconDefinition,
  IconName,
} from "@fortawesome/fontawesome-svg-core";
import { on } from "events";
import { PlatformManager } from "../PlatformManager";
interface INavigationItemProps {
  to: string;
  children: React.ReactNode;
  iconName: IconName | IconDefinition;
  onClick?: () => void;
}

export const NavigationItem: FC<INavigationItemProps> = ({
  to,
  children,
  iconName,
  onClick,
}) => {
  const desktopNavigationItem = (
    <div>
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
        <FontAwesomeIcon icon={iconName} />
        {children}
      </NavLink>
    </div>
  );

  const mobileNavigationItem = (
    <div>
      <NavLink
        onClick={onClick}
        to={to}
        // base style and active style if NavLink is active
        className={styles.mobileNavigationItem}
      >
        <FontAwesomeIcon icon={iconName} />
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
