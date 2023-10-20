import {
  SecondaryNavigation,
  NavigationItem,
} from "../../navigation/SecondaryNavigation";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./inner-layout.scss";
import { NavigationHeader } from "../../navigation/SecondaryNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../Header";
import { PlatformManager } from "../../PlatformManager";
import { NavigationContext } from "../../../hooks/NavigationContext";

export interface IInnerLayoutProps {
  navigationItems: any[];
}

export const InnerLayout: FC<IInnerLayoutProps> = ({ navigationItems }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const nav = React.useContext(NavigationContext);

  const secondaryNavigation = (
    <SecondaryNavigation
      menuState={menuOpen}
      navigationItems={navigationItems}
    ></SecondaryNavigation>
  );

  useEffect(() => {
    nav.setSecondaryNavigation(secondaryNavigation);
  }, []);

  const desktopLayout = (
    <div className="accountLayout">
      {/* <Header
        hamburger
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        children={header}
      /> */}

      <div className="accountLayout__body">
        {menuOpen && secondaryNavigation}
        <Outlet />
      </div>
    </div>
  );

  const mobileLayout = (
    <div className="accountLayout">
      <Outlet />
    </div>
  );

  return (
    <PlatformManager
      mobileRenderer={mobileLayout}
      tabletRenderer={desktopLayout}
      desktopRenderer={desktopLayout}
    />
  );
};
