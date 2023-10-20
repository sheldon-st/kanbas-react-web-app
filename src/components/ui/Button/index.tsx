import React, { FC } from "react";

import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "@mui/material";

interface IButtonProps extends ButtonProps {
  priority?: "primary" | "secondary";
}

const priorityColorMap = {
  secondary: ["#F7F7F7", "#5F6368"],
  primary: ["#be4648", "#ffffff"],
};

export const Button: FC<IButtonProps> = ({
  children,
  priority = "secondary",
  ...rest
}) => {
  return (
    <MuiButton
      style={{
        backgroundColor: priorityColorMap[priority][0],
        color: priorityColorMap[priority][1],
        whiteSpace: "nowrap",
      }}
      {...rest}
      variant="contained"
      disableElevation
    >
      {children}
    </MuiButton>
  );
};
