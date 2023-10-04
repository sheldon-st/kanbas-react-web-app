import React, { ReactNode, useState, useContext, useEffect } from "react";
import MainNavigation from "./MainNavigation";
import { PlatformManager } from "./PlatformManager";
import { NavigationContext } from "../hooks/NavigationContext";
import { Header } from "./Header";
// if mobile render mobile nav to top of page, else render desktop nav to left of page
export const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState<string>("");
  const [secondaryNavigation, setSecondaryNavigation] = useState<ReactNode>();
  const [desktopHeader, setDesktopHeader] = useState<ReactNode>();
  const [secondaryNavigationOpen, setSecondaryNavigationOpen] =
    useState<boolean>(false);

  const value = {
    title,
    setTitle,
    secondaryNavigation,
    setSecondaryNavigation,
    desktopHeader,
    setDesktopHeader,
    secondaryNavigationOpen,
    setSecondaryNavigationOpen,
  };

  useEffect(() => {
    setDesktopHeader(<Header children={<div>Test</div>} />);
  }, []);

  const desktopLayout = (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        flexShrink: 0,
        //gap: "24px",
        // paddingRight: "24px",
      }}
    >
      <MainNavigation />
      {/* <div>
        {desktopHeader} */}
      <div style={{ padding: "24px", width: "100%" }}>{children}</div>
    </div>
  );

  const mobileLayout = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        // gap: "24px",
        //paddingTop: "24px",
      }}
    >
      <MainNavigation />
      <div style={{ padding: "24px" }}>{children}</div>
    </div>
  );

  return (
    <NavigationContext.Provider value={value}>
      <PlatformManager
        mobileRenderer={mobileLayout}
        tabletRenderer={desktopLayout}
        desktopRenderer={desktopLayout}
      />
    </NavigationContext.Provider>
  );
};

export default RootLayout;
