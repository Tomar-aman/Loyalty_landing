"use client";
import {
  Box,
  FormLabel,
  IconButton,
  StandardTextFieldProps,
  TextField,
} from "@mui/material";
import React, { CSSProperties, useState } from "react";
import {
  Visibility,
  VisibilityOff,
  ArrowDropUp,
  ArrowDropDown,
} from "@mui/icons-material";
import styles from "./style.module.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SxProps, Theme } from "@mui/material/styles";

interface IInput extends StandardTextFieldProps {
  label?: React.ReactNode;
  Placeholder?: string;
  icon?: React.ReactNode;
  defaultValue?: string;
  placeholderStyle?: any;
  readOnly?: boolean;
  className?: string;
  restStyle?: CSSProperties;
  showStepper?: boolean;
  iconPosition?: "left" | "right";
  restStyleIcon?: CSSProperties;
  required?: boolean;
}

function LabeledInputComponent({
  label,
  type = "text",
  Placeholder,
  icon,
  defaultValue,
  placeholderStyle,
  readOnly,
  className,
  restStyle,
  showStepper = false,
  iconPosition = "left",
  restStyleIcon,
  required,
  ...rest
}: IInput) {
  const [value, setValue] = useState<number | string>(defaultValue || "");
  const [showPassword, setShowPassword] = useState(false);

  // Handlers for password visibility toggle
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // Handlers for increment and decrement
  const handleIncrement = () => setValue((prev) => (Number(prev) || 0) + 1);
  const handleDecrement = () => setValue((prev) => (Number(prev) || 0) - 1);

  return (
    <>
      {label && (
        <FormLabel
          sx={{
            color: "#333333",
            fontSize: "14px",
            fontWeight: "500",
            padding: "8px 0px",
            textTransform: "capitalize",
          }}
        >
          {label}
          {required && (
            <span style={{ color: "#AD1003", fontSize: "20px" }}> *</span>
          )}
        </FormLabel>
      )}

      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        <TextField
          sx={
            {
              flex: 1,
              "& .MuiInputBase-root": {
                borderRadius: "10px",
                border: "1px solid #E2E8F0",
                height: "40px",
                background: "#FFFFFF",
                // paddingLeft:
                //   icon && iconPosition === "left"
                //     ? "30px !important"
                //     : "5px !important",
                // paddingRight:
                //   icon && iconPosition === "right"
                //     ? "30px !important"
                //     : "5px !important",
                fontWeight: "400",
                fontSize: "16px",
                color: "#000",
                ...(restStyle || {}),
              },
              "& .MuiInputBase-input::placeholder": {
                fontSize: "14px",
                color: "#64748B",
                fontWeight: "400",
                opacity: "1",
                textTransform: "capitalize",
                ...placeholderStyle,
              },
            } as SxProps<Theme>
          }
          placeholder={Placeholder}
          type={type === "password" && showPassword ? "text" : type}
          {...rest}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          InputProps={{
            readOnly,
          }}
        />

        {/* Conditional rendering for password toggle */}
        {type === "password" && (
          <Box sx={{ position: "absolute", right: "20px" }}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <Visibility sx={{ fontSize: "24px", color: "#A1A1A1" }} />
              ) : (
                <VisibilityOff sx={{ fontSize: "24px", color: "#A1A1A1" }} />
              )}
            </IconButton>
          </Box>
        )}

        {/* THIS IS A UP DOWN NUMBER WITH ARROW  */}
        {type === "number" && showStepper && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              right: "20px",
            }}
          >
            <IconButton
              onClick={handleIncrement}
              size="small"
              sx={{ padding: "0px", color: "#6E6E6E" }}
            >
              <KeyboardArrowUpIcon />
            </IconButton>
            <IconButton
              onClick={handleDecrement}
              size="small"
              sx={{ padding: "0px", color: "#6E6E6E" }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        )}

        {icon && (
          <Box
            // sx={{
            //   position: "absolute",
            //   left: "12px",
            //   top: "14px",
            //   ...restStyleIcon,
            // }}
            sx={{
              position: "absolute",
              left: iconPosition === "left" ? "12px" : "auto",
              right: iconPosition === "right" ? "12px" : "auto",
              top: "14px",
              ...restStyleIcon,
            }}
          >
            {icon}
          </Box>
        )}
      </Box>
    </>
  );
}

export default LabeledInputComponent;
