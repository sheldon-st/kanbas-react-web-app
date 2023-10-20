import {
  SecondaryNavigation,
  NavigationItem,
} from "../navigation/SecondaryNavigation";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import "./account-layout.scss";
import { Header } from "../Header";
import { InnerLayout } from "../layout/InnerLayout/InnerLayout";
import { NavigationContext } from "../../hooks/NavigationContext";
import { Box, Typography } from "@mui/material";
export const AccountLayout: FC = () => {
 // const { name, pronouns, contact, bio, links } = profile as IProfileProps;

  // set the mobile navigation context to the profile title and an empty action
  const {
    title,
    setTitle,
    setSecondaryNavigation,
    setDesktopHeader,
    setCurrent,
  } = React.useContext(NavigationContext);

  React.useEffect(() => {
   // setTitle(name + "'s Profile");
    setCurrent(<Typography variant="h6">Account</Typography>);
  }, [name, setTitle]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",

        paddingTop: "25%",
      }}
    >
      <Typography variant="h1">Account</Typography>
    </Box>
  );
};

/* <InnerLayout header={<span style={{ fontSize: "1.125rem" }}>{title}</span>}>
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
    </InnerLayout> */
