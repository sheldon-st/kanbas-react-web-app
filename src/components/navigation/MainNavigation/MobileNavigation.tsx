import React, { FC } from "react";
import { NavigationItem } from "./NavigationItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import styles from "./main-navigation.module.scss";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import {
  faBook,
  faHamburger,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
export interface IMobileNavigationProps {
  navState: boolean;
  setNavOpen: (navState: boolean) => void;
}

export const MobileNavigation: FC<IMobileNavigationProps> = ({
  navState,
  setNavOpen,
}) => {
  return (
    <>
      {navState && (
        <div className={styles.fullscreenNav}>
          <div className={styles.fullscreenNav__header}>
            <FontAwesomeIcon
              icon={faClose}
              onClick={() => setNavOpen(false)}
              style={{ cursor: "pointer", color: "grey" }}
            />
          </div>
          <NavigationItem
            to="/account"
            iconName={faUser}
            onClick={() => setNavOpen(false)}
          >
            Account
          </NavigationItem>
          <NavigationItem
            to="/dashboard"
            iconName={faGauge}
            onClick={() => setNavOpen(false)}
          >
            Dashboard
          </NavigationItem>
          <NavigationItem
            to="/courses"
            iconName={faBook}
            onClick={() => setNavOpen(false)}
          >
            Courses
          </NavigationItem>
        </div>
      )}
    </>
  );
};
