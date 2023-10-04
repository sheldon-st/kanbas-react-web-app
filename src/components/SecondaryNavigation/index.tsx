import { NavLink } from "react-router-dom";
import React, { FC } from "react";
import styles from "./secondary-navigation.module.scss";
import { NavigationItem } from "./NavigationItem";
import { NavigationHeader } from "./NavigationHeader";

interface ISecondaryNavigationProps {
  children: React.ReactNode;
  menuState: boolean;
}

export const SecondaryNavigation: FC<ISecondaryNavigationProps> = ({
  children,
  menuState,
}) => {
  return <div className={styles.secondaryNavigation}>{children}</div>;
};

// export NavigationItem
export { NavigationItem, NavigationHeader };
