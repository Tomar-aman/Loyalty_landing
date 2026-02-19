"use client";
import {
  Box,
  FormLabel,
  IconButton,
  StandardTextFieldProps,
  TextField,
} from "@mui/material";
import React, { CSSProperties, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SxProps, Theme } from "@mui/material/styles";

interface IInput extends StandardTextFieldProps {
  label?: React.ReactNode;
  placeholder?: string;
  icon?: React.ReactNode;
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
  placeholder,
  icon,
  placeholderStyle,
  readOnly,
  className,
  restStyle,
  showStepper = false,
  iconPosition = "left",
  restStyleIcon,
  required,
  value,
  onChange,
  ...rest
}: IInput) {
  const [showPassword, setShowPassword] = useState(false);

  /* ---------- PASSWORD TOGGLE ---------- */
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();

  return (
    <>
      {/* ---------- LABEL ---------- */}
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

      {/* ---------- INPUT ---------- */}
      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        <TextField
          sx={
            {
              flex: 1,
              "& .MuiInputBase-root": {
                borderRadius: "10px",
                border: "1px solid #E2E8F0",
                height: "45px",
                background: "#FFFFFF",
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
          {...rest}
          value={value ?? ""}          // ⭐ REQUIRED
          onChange={onChange}          // ⭐ REQUIRED
          placeholder={placeholder}
          type={type === "password" && showPassword ? "text" : type}
          InputProps={{
            readOnly,
          }}
        />


        {/* ---------- PASSWORD ICON ---------- */}
        {type === "password" && (
          <Box sx={{ position: "absolute", right: "20px" }}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <Visibility sx={{ fontSize: 24, color: "#A1A1A1" }} />
              ) : (
                <VisibilityOff sx={{ fontSize: 24, color: "#A1A1A1" }} />
              )}
            </IconButton>
          </Box>
        )}

        {/* ---------- NUMBER STEPPER (OPTIONAL) ---------- */}
        {type === "number" && showStepper && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              right: "20px",
            }}
          >
            <IconButton size="small">
              <KeyboardArrowUpIcon />
            </IconButton>
            <IconButton size="small">
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
        )}

        {/* ---------- ICON ---------- */}
        {icon && (
          <Box
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
