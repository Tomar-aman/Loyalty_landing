"use client";

import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

interface Option {
  value: string;
  label: string;
}

interface SingleSelectionRadioGroupProps {
  options: Option[];
  label?: string;
  name: string;
}

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0",
  border: "1px solid #E2E8F0",
  borderRadius: "8px",
  padding: "8px 16px",
  transition: "all 0.3s ease",
  backgroundColor: "#ffffff",
  height: "48px",
  minWidth: "151px",
  "& .MuiRadio-root": {
    padding: "0 8px",
  },
  "&.Mui-checked": {
    borderColor: "#041C39",
    backgroundColor: "#fff",
    color: "#041C39",
  },
  "&:hover": {
    borderColor: "#041C39",
  },
}));

const StyledRadio = styled(Radio)(({ theme }) => ({
  color: "#d1d5db",
  "&.Mui-checked": {
    color: "#041C39",
  },
}));

const RadioInputSelect: React.FC<SingleSelectionRadioGroupProps> = ({
  options,
  label,
  name,
}) => {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      {label && (
        <Box sx={{ padding: "7px 0" }}>
          <FormLabel
            sx={{
              color: "#333333",
              fontSize: "14px",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
          >
            {label}
          </FormLabel>
        </Box>
      )}
      <RadioGroup
        name={name}
        value={value}
        onChange={handleChange}
        row
        sx={{
          gap: "16px",
          display: "flex",
          alignItems: "center",
          textTransform: "capitalize",
          fontWeight: "600",
        }}
      >
        {options.map((option) => (
          <StyledFormControlLabel
            key={option.value}
            value={option.value}
            control={<StyledRadio />}
            label={option.label}
            className={value === option.value ? "Mui-checked" : ""}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default RadioInputSelect;
