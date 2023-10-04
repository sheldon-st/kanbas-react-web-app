import React, { FC } from "react";
import { NavigationItem } from "./NavigationItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import styles from "./main-navigation.module.scss";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { NavigationContext } from "../../hooks/NavigationContext";
import {
  faBook,
  faHamburger,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
export interface IMobileNavigationProps {
  //navState: boolean;
  //setNavOpen: (navState: boolean) => void;
}

export const MobileSecondaryNavigation: FC = () => {
  const nav = React.useContext(NavigationContext);

  // console log on load
  React.useEffect(() => {
    console.log("MobileSecondaryNavigation loaded");
  }, []);

  return <div className={styles.secondaryNav}>{nav.secondaryNavigation}</div>;
};
