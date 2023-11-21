import Assignment3 from "./a3";
import Assignment5 from "./a5";

import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Labs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={<NavLink to="/labs/a3">Assignment 3</NavLink>} />
          <Tab label={<NavLink to="/labs/a4">Assignment 4</NavLink>} />
          <Tab label={<NavLink to="/labs/a5">Assignment 5</NavLink>} />

          <Tab label="Item Three" />
        </Tabs>
        <Outlet />
      </Box>
    </Box>
  );
}
export default Labs;
