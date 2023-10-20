import { NavLink } from "react-router-dom";
import React, { FC } from "react";
import styles from "./secondary-navigation.module.scss";
import { NavigationItem } from "./NavigationItem";
import { NavigationHeader } from "./NavigationHeader";

interface ISecondaryNavigationProps {
  children?: React.ReactNode;
  menuState: boolean;
  navigationItems?: any[];
}

export const SecondaryNavigation: FC<ISecondaryNavigationProps> = ({
  children,
  menuState,
  navigationItems,
}) => {
  if (navigationItems) {
    return (
      <div className={styles.secondaryNavigation}>
        {navigationItems.map((item) => (
          <NavigationItem
            to={item.path}
            disabled={item.path === "/404"}
            end={item.exact ? true : false}
          >
            {item.name}
          </NavigationItem>
        ))}
      </div>
    );
  }
  return <div className={styles.secondaryNavigation}>{children}</div>;
};

// export NavigationItem
export { NavigationItem, NavigationHeader };
