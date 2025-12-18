"use client";

import { Button, ButtonProps } from "@mui/material";
import React from "react";
import { CostumeButtonStyled } from "./costumeButtonStyled";

interface ICostumeButton extends ButtonProps {
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  stylesRest?: React.CSSProperties;
}

function CostumeButton({
  children,
  className,
  stylesRest,
  ...rest
}: ICostumeButton) {
  return (
    <CostumeButtonStyled>
      <Button
        disableRipple
        disableTouchRipple
        variant="contained"
        className={`btn ${className || ""}`}
        {...rest}
        sx={{
          ...stylesRest,
        }}
      >
        {children}
      </Button>
    </CostumeButtonStyled>
  );
}

export default CostumeButton;
