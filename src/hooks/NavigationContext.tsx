import React, { createContext, FC, ReactNode, useContext } from "react";

// create and use a context to manage the mobile headers title and action on hamburger menu click
export interface INavigationContext {
  title: string;
  //action: () => void;
  setTitle: (title: string) => void;

  secondaryNavigation?: ReactNode;
  setSecondaryNavigation: (secondaryNavigation: ReactNode) => void;

  desktopHeader?: ReactNode;
  setDesktopHeader: (desktopHeader: ReactNode) => void;

  secondaryNavigationOpen: boolean;
  setSecondaryNavigationOpen: (secondaryNavigationOpen: boolean) => void;
}

export const NavigationContext = createContext<INavigationContext>({
  title: "",
  //action: () => {},
  setTitle: () => {},
  secondaryNavigation: undefined,
  setSecondaryNavigation: () => {},
  desktopHeader: undefined,
  setDesktopHeader: () => {},
  secondaryNavigationOpen: false,
  setSecondaryNavigationOpen: () => {},
});
