import { SecondaryNavigation, NavigationItem } from "../SecondaryNavigation";
import React, { FC, ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./header.module.scss";
import { NavigationHeader } from "../SecondaryNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export interface IHeaderProps {
  children: ReactNode;
  hamburger?: boolean;
  onMenuToggle?: () => void;
}

export const Header: FC<IHeaderProps> = ({
  children,
  hamburger,
  onMenuToggle,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__body}>
        {hamburger && (
          <FontAwesomeIcon
            onClick={() => onMenuToggle && onMenuToggle()}
            icon={faList}
            style={{ cursor: "pointer" }}
          />
        )}
        {children}
      </div>
      <hr />
    </div>
  );
};
