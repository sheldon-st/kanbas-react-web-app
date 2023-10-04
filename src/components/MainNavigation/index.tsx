import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./main-navigation.module.scss";
import { NavigationItem } from "./NavigationItem";
import type { IconName } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import {
  faBook,
  faHamburger,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import { PlatformManager } from "../PlatformManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavigationContext } from "../../hooks/NavigationContext";
import { MobileNavigation } from "./MobileNavigation";
import { MobileSecondaryNavigation } from "./MobileSecondaryNavigation";
function MainNavigation() {
  const desktopNavigation = (
    <div className={styles.kanbasNavigation}>
      <NavigationItem to="/account" iconName={faUser}>
        Account
      </NavigationItem>
      <NavigationItem iconName={faGauge} to="/dashboard">
        Dashboard
      </NavigationItem>
      <NavigationItem iconName={faBook} to="/courses">
        Courses
      </NavigationItem>
    </div>
  );

  const nav = React.useContext(NavigationContext);

  const [navOpen, setNavOpen] = React.useState(false);
  const {
    setSecondaryNavigation,
    secondaryNavigationOpen,
    setSecondaryNavigationOpen,
  } = React.useContext(NavigationContext);

  // create a mobile navigation header with only styles.mobileNavigationHeader, a hamburger button justified left, title from context in the middle and expand icon justified right
  // hamburger on click should show full screen mobile navigation and hide the header
  const mobileNavigation = (
    <div className={styles.mobileNavigation}>
      <div className={styles.mobileNavigationHeader}>
        <FontAwesomeIcon
          icon={faHamburger}
          onClick={() => setNavOpen(!navOpen)}
          style={{ cursor: "pointer" }}
        />
        <span>{nav.title}</span>
        <FontAwesomeIcon
          icon={faExpand}
          onClick={() => {
            setSecondaryNavigationOpen(!secondaryNavigationOpen);
            console.log("secondaryNavigationOpen", secondaryNavigationOpen);
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
      <MobileNavigation navState={navOpen} setNavOpen={setNavOpen} />
      {secondaryNavigationOpen && <MobileSecondaryNavigation />}
    </div>
  );

  return (
    <PlatformManager
      mobileRenderer={mobileNavigation}
      tabletRenderer={desktopNavigation}
      desktopRenderer={desktopNavigation}
    />
  );
}

export default MainNavigation;
