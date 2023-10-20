import React, { FC } from "react";
import { ListItem as MuiListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./list.scss";
interface IListItemProps {
  children: React.ReactNode;
  status?: "active" | "inactive";
  to?: string;
}

const statusColorMap = {
  active: "green",
  inactive: "red",
};

export const ListSubItem: FC<IListItemProps> = ({
  children,
  status = "active",
  to = "/",
}) => {
  return (
    <MuiListItem
      className="list-sub-item"
      sx={{
      
      }}
    >
      <NavLink
        to={to}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {children}
      </NavLink>
    </MuiListItem>
  );
};
