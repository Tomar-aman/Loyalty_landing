"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { Box } from "@mui/material";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 44, // Updated width for the switch
  height: 19.8, // Updated height for the switch
  padding: 0,
  display: "flex",
  "& .MuiSwitch-switchBase": {
    padding: 1, // Ensure thumb is fully within track
    margin: 0,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(24px)", // Adjust transform based on new width
      color: "#fff",
      "& + .MuiSwitch-track": {
        background: "linear-gradient(270deg, #FF5858 0%, #C058FF 100%)", // Gradient when checked
        opacity: 1,
        border: 0,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
  },
  "& .MuiSwitch-thumb": {
    width: 16, // Updated thumb size
    height: 16, // Updated thumb size
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Add shadow for a smooth look
    transition: theme.transitions.create(["width", "height", "transform"], {
      duration: 300,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 10, // Rounded corners
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function SwitchComponent() {
  return (
    <Box className="muiCustomSwitch">
      <FormGroup>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 0 }} defaultChecked />}
          label={undefined}
          sx={{ width: "fit-content" }}
        />
      </FormGroup>
    </Box>
  );
}
