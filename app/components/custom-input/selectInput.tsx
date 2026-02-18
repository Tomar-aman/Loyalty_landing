"use client";
import { Box, FormLabel, MenuItem, Select } from "@mui/material";
import React, { CSSProperties, useState } from "react";
import { SelectOptions } from ".";
import styles from "./style.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface ISelectInput {
  label?: string;
  options: SelectOptions[];
  placeholder?: string;
  styleRest?: any;
  onChange: (value:string)=>void;
  value?: string;
  icon?: React.ReactNode;
  restStyleIcon?: CSSProperties;
}

function SelectInputComponent({
  placeholder,
  label,
  icon,
  restStyleIcon,
  options,
  styleRest,
  value,
  onChange,
  ...rest
}: ISelectInput) {
  const [open, setOpen] = useState(false);

  const handleIconClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Box className="muiSelectInput">
      {label && (
        <Box mb={1}>
          <FormLabel
            sx={{
              color: "#333333",
              fontSize: "14px",
              fontWeight: "500",
              padding: "8px 0px",
              textTransform: "capitalize",
              "@media (max-width: 600px)": {
                fontSize: "16px",
              },
            }}
          >
            {label}
          </FormLabel>
        </Box>
      )}

      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            zIndex: "99",
            top: "12px",
            left: "10px",
            ...restStyleIcon,
          }}
        >
          {icon}
        </Box>
        <Select
          MenuProps={{
            disableScrollLock: true,
          }}
          className={styles.muiSelect_Input}
          fullWidth
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            paddingLeft: icon ? "20px" : "0px",
            borderRadius: "6px",
            borderColor: "unset",
            background: "#F3F3F5",
            color: "#000000",
            border: "1px solid #A1A1AA4D",
            height: "45px",
            textTransform: "capitalize",
            "& .Mui-focused": {
              color: "#9B59B6",
            },
            "& .MuiSelect-select": {
              zIndex: 9,
            },
            "&.Mui-disabled .MuiSelect-select": {
              color: "#9B59B6",
              WebkitTextFillColor: "#666666",
            },
            ...styleRest,
          }}
          IconComponent={() => (
            <Box
              sx={{
                position: "absolute",
                right: "10px",
                top: "8px",
                cursor: "pointer",
              }}
              onClick={handleIconClick}
            >
              {open ? (
                <KeyboardArrowUpIcon className={styles.dropArrow} />
              ) : (
                <KeyboardArrowDownIcon className={styles.dropArrow} />
              )}
            </Box>
          )}
          displayEmpty
          value={value}
          onChange={(e) => onChange(e.target.value)}
          renderValue={(selected) => (selected ? selected : placeholder)}
          {...rest}
        >
          <MenuItem disabled sx={{ textTransform: "capitalize" }}>
            {placeholder}
          </MenuItem>
          {options.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
}

export default SelectInputComponent;
