import React, { ReactNode, useState, useContext, useEffect } from "react";
import MainNavigation from "./navigation/MainNavigation";
import { PlatformManager } from "./PlatformManager";
import { NavigationContext } from "../hooks/NavigationContext";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
// override mui AppLayout to have white background and ListItem should have vertical layout
// default button edit the primary olor
// pallette primary should be color of # #F7F7F7
const theme = createTheme({
  palette: {
    primary: {
      main: "#F7F7F7",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: "black",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#F7F7F7",
          color: "#5F6368",
        },
      },
    },
  },
});

// if mobile render mobile nav to top of page, else render desktop nav to left of page
export const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState<string>("");
  const [secondaryNavigation, setSecondaryNavigation] = useState<ReactNode>();
  const [desktopHeader, setDesktopHeader] = useState<ReactNode>();
  const [secondaryNavigationOpen, setSecondaryNavigationOpen] =
    useState<boolean>(false);

  const [current, setCurrent] = useState<ReactNode>();

  const value = {
    title,
    setTitle,
    secondaryNavigation,
    setSecondaryNavigation,
    desktopHeader,
    setDesktopHeader,
    secondaryNavigationOpen,
    setSecondaryNavigationOpen,
    current,
    setCurrent,
  };

  useEffect(() => {
    //setDesktopHeader(<Header children={<div>Test</div>} />);
    //setCurrent(<Typography variant="h6">Test Current Page</Typography>);
  }, []);
  const drawerWidth = 84;

  const desktopLayout = (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <MainNavigation />
      <Box
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: "flex",
          flexDirection: "row",
          padding: "24px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );

  const mobileLayout = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <MainNavigation />
      <div style={{ padding: "24px" }}>
        <Outlet />
      </div>
    </div>
  );

  return (
    <NavigationContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <PlatformManager
          mobileRenderer={mobileLayout}
          tabletRenderer={desktopLayout}
          desktopRenderer={desktopLayout}
        />
      </ThemeProvider>
    </NavigationContext.Provider>
  );
};

export default RootLayout;
