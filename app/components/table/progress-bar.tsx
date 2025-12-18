import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

interface ProgressBarProps {
  progress?: number;
  restStyle?: React.CSSProperties;
  textColor?: React.CSSProperties;
  isFlex?: boolean; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 80,
  restStyle,
  textColor,
  isFlex = false,
}) => {
  return (
    <Box
      sx={{
        width: "150px",
        display: isFlex ? "flex" : "block",
        alignItems: "center",
        gap: "8px", 
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          borderRadius: "10px",
          width: isFlex ? "100px" : "100%",
          height: "8px",
          backgroundColor: "#d3d3d3",
          "& .MuiLinearProgress-bar": {
            borderRadius: "10px",
            backgroundColor: "#AD1003",
            ...restStyle,
          },
        }}
      />
      <Typography
        sx={{
          color: "#AD1003",
          ...textColor,
        }}
      >
        {progress}%
      </Typography>
    </Box>
  );
};

export default ProgressBar;
