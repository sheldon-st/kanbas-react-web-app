import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./secondary-navigation.module.scss";
interface INavigationHeaderProps {
  children: React.ReactNode;
}

export const NavigationHeader: FC<INavigationHeaderProps> = ({ children }) => {
  return (
    <div className={styles.navigationHeader}>
      {children}
      <hr />
    </div>
  );
};
