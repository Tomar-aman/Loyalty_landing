"use client";

import React, { useRef, useState } from "react";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, FormGroup } from "@mui/material";

interface IDateInput {
  label?: string;
  updateIcon?: React.ReactNode | string;
  max?: string;
  sx?: object;
  placeholder?: string;
}

function DateInput({
  sx,
  label,
  updateIcon,
  placeholder,
  ...rest
}: IDateInput) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <Box className="muiDate_Picker">
      {/* Label */}
      <Box sx={{ padding: "8px 0px" }}>
        <FormGroup
          sx={{
            color: "#333333",
            fontSize: "14px",
            fontWeight: "500",
            textTransform: "capitalize",
            "@media (max-width: 600px)": {
              fontSize: "16px",
            },
            ...sx,
          }}
        >
          {label}
        </FormGroup>
      </Box>

      {/* Date Picker */}
      <Box sx={{ position: "relative" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            {...rest}
            format="DD/MM/YYYY"
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            slotProps={{
              textField: {
                placeholder,
                inputRef,
                sx: {
                  width: "100%",
                  background: "#F3F3F5",
                  height: "48px",
                  "& .MuiPickersSectionList-root ": {
                    padding: "13px 0px",
                  },
                  "& .MuiPickersInputBase-root ": {
                    borderRadius: "8px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none !important",
                  },
                  "& .MuiInputBase-root.Mui-focused": {
                    border: "1px solid #CED4DA !important",
                    boxShadow: "none !important",
                  },
                  "& input": {
                    padding: "10px 12px",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#94A3B8",
                    cursor: "pointer",
                  },
                  "& input::placeholder": {
                    color: "#94A3B8",
                    fontSize: "14px",
                    fontWeight: 400,
                  },
                  "& .MuiIconButton-root": {
                    display: "none",
                  },
                  "&:hover fieldset": {
                    borderWidth: "1px !important",
                    borderColor: "#ccc !important",
                  },
                  "&.Mui-focused fieldset": {
                    borderWidth: "1px !important",
                    borderColor: "#ccc !important",
                  },
                },
              },
            }}
          />
        </LocalizationProvider>

        {/* ✅ Overlay to make whole box clickable */}
        <Box
          onClick={() => setOpen(true)}
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "8px",
          }}
        />

        {/* ✅ Custom icon (non-clickable) */}
        {updateIcon && (
          <Box
            sx={{
              position: "absolute",
              right: "15px",
              top: "10px",
              zIndex: "1",
              color: "#2b7e75",
              pointerEvents: "none",
              "@media (max-width: 600px)": {
                top: "40px",
              },
              ...sx,
            }}
          >
            <span>{updateIcon}</span>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default DateInput;
