import { SecondaryNavigation, NavigationItem } from "../SecondaryNavigation";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import "./account-layout.scss";
import { Header } from "../Header";
import { InnerLayout } from "../InnerLayout/InnerLayout";
import { ILink, IProfileProps } from "../../data/profile";
import { profile } from "../../data/profile";
import { NavigationContext } from "../../hooks/NavigationContext";
export const AccountLayout: FC = () => {
  const { name, pronouns, contact, bio, links } = profile as IProfileProps;

  // set the mobile navigation context to the profile title and an empty action
  const { title, setTitle, setSecondaryNavigation, setDesktopHeader } =
    React.useContext(NavigationContext);

  React.useEffect(() => {
    setTitle(name + "'s Profile");
    setDesktopHeader(
      <Header hamburger>
        <h6>{name + "'s Profile"}</h6>
      </Header>
    );
  }, [name, setTitle]);

  return (
    <InnerLayout header={<span style={{ fontSize: "1.125rem" }}>{title}</span>}>
      <NavigationItem to="/account/notifications" disabled>
        Notifications
      </NavigationItem>
      <NavigationItem to="/account/profile">Profile</NavigationItem>
      <NavigationItem to="/account/files" disabled>
        Files
      </NavigationItem>
      <NavigationItem to="/account/settings" disabled>
        Settings
      </NavigationItem>
      <NavigationItem to="/account/eportfolios" disabled>
        ePortfolios
      </NavigationItem>
      <NavigationItem to="/account/sharedcontent" disabled>
        Shared Content
      </NavigationItem>
      <NavigationItem to="/account/hub" disabled>
        The Hub
      </NavigationItem>
      <NavigationItem to="/account/qwickly" disabled>
        Qwickly Course Tools
      </NavigationItem>
      <NavigationItem to="/account/announcements" disabled>
        Global Announcements
      </NavigationItem>
    </InnerLayout>
  );
};
