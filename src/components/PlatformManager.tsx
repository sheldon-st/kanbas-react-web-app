import React, { FC } from "react";

export interface IPlatformManagerProps {
  mobileRenderer: React.ReactNode;
  tabletRenderer: React.ReactNode;
  desktopRenderer: React.ReactNode;
}

// check if platform is mobile or tablet or desktio with breakpoints of 576 and 800
const isMobile = () => window.innerWidth < 576;
const isTablet = () => window.innerWidth >= 576 && window.innerWidth < 1140;
const isDesktop = () => window.innerWidth >= 1140;

export const PlatformManager: FC<IPlatformManagerProps> = ({
  mobileRenderer,
  tabletRenderer,
  desktopRenderer,
}) => {
  const [isMobileState, setIsMobileState] = React.useState(isMobile());
  const [isTabletState, setIsTabletState] = React.useState(isTablet());
  const [isDesktopState, setIsDesktopState] = React.useState(isDesktop());

  const handleResize = () => {
    setIsMobileState(isMobile());
    setIsTabletState(isTablet());
    setIsDesktopState(isDesktop());
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobileState) {
    return <>{mobileRenderer}</>;
  } else if (isTabletState) {
    return <>{tabletRenderer}</>;
  } else if (isDesktopState) {
    return <>{desktopRenderer}</>;
  } else {
    return <></>;
  }
};
