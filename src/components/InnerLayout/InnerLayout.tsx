import { SecondaryNavigation, NavigationItem } from "../SecondaryNavigation";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./inner-layout.scss";
import { NavigationHeader } from "../SecondaryNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../Header";
import { PlatformManager } from "../PlatformManager";
import { NavigationContext } from "../../hooks/NavigationContext";

export interface IInnerLayoutProps {
  children: ReactNode;
  header: ReactNode;
}

export const InnerLayout: FC<IInnerLayoutProps> = ({ children, header }) => {
  const [menuOpen, setMenuOpen] = useState(true);

  const nav = React.useContext(NavigationContext);

  const secondaryNavigation = (
    <SecondaryNavigation menuState={menuOpen}>{children}</SecondaryNavigation>
  );

  useEffect(() => {
    nav.setSecondaryNavigation(secondaryNavigation);
  }, []);

  const desktopLayout = (
    <div className="accountLayout">
      <Header
        hamburger
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        children={header}
      />

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
