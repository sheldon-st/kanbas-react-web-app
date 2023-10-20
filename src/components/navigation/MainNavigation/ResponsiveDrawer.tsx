import React, { FC } from "react";
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
import { NavigationItem } from "./NavigationItem";
import { NavigationContext } from "../../../hooks/NavigationContext";
import {
  DashboardOutlined,
  CalendarToday,
  ClassOutlined,
  AccountCircle,
  CalendarViewDayOutlined,
  CalendarMonthOutlined,
} from "@mui/icons-material";
import { ImageListItem } from "@mui/material";

const drawerWidth = 84;

export const ResponsiveDrawer: FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const nav = React.useContext(NavigationContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <Toolbar>
        <ImageListItem>
          <img src="/public/neu.png" alt="" />
        </ImageListItem>
      </Toolbar>
      <Divider />
      <List style={{ backgroundColor: "black", padding: "0" }}>
        {/* {["All mail", "Trash", "Spam"].map((text, index) => ( */}

        <NavigationItem to="/kanbas/account" icon={<AccountCircle />}>
          Account
        </NavigationItem>
        <NavigationItem to="/kanbas/dashboard" icon={<DashboardOutlined />}>
          Dashboard
        </NavigationItem>
        <NavigationItem to="/kanbas/courses" icon={<ClassOutlined />}>
          Courses
        </NavigationItem>
        <NavigationItem to="/kanbas/calendar" icon={<CalendarMonthOutlined />}>
          Calendar
        </NavigationItem>
        {/* ))} */}
      </List>
    </div>
  );

  return (
    <Box>
      <AppBar
        position="sticky"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {nav.current}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: {
            sm: 0,
            backgroundColor: "black",
          },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            border: "1px solid purple",
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
