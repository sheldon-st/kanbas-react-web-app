import React, { FC } from "react";
import {
  ListItem as MuiListItem,
  Accordion,
  List,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { DragHandleOutlined, ExpandMore } from "@mui/icons-material";
interface ICollapsibleListItemProps {
  title: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  description?: string;
}

export const CollapsibleListItem: FC<ICollapsibleListItemProps> = ({
  children,
  title,
  actions,
  description,
}) => {
  return (
    <MuiListItem
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        width: "100%",
        border: "1px solid #E0E0E0",
        padding: "0px",
      }}
    >
      <Accordion
        elevation={0}
        sx={{ width: "100%", height: "fit-content", padding: 0, gap: 0 }}
        disableGutters
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            backgroundColor: "#F7F7F7",
            flexDirection: "row-reverse",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "start",
            }}
          >
            <span>
              {title} {description && `- ${description}`}
            </span>
          </div>
          {actions}
        </AccordionSummary>
        <List sx={{ padding: 0 }}>{children}</List>
      </Accordion>
    </MuiListItem>
  );
};
