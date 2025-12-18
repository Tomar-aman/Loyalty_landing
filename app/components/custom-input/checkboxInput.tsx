import {
  Box,
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormLabel,
  SxProps,
} from "@mui/material";
import React from "react";
interface IInput extends CheckboxProps {
  sx?: SxProps;
  label?: React.ReactNode;
  labelText?: React.ReactNode;
}

function CheckboxInputComponent({ label, labelText, sx, ...rest }: IInput) {
  return (
    <Box className="muiCheckBox_Input">
      <FormControl>
        {label && (
          <FormLabel
            sx={{
              color: "#0F172A",
              fontSize: "14px",
              fontWeight: "400",
              textTransform: "capitalize",
            }}
          >
            {labelText}
          </FormLabel>
        )}
        <FormControlLabel
          control={
            <Checkbox
              {...rest}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 24 },
                color: "#A8A8A8",
                "&.Mui-checked": {
                  color: "#9B59B6",
                },
              }}
            />
          }
          label={label}
          sx={{
            ...(sx || {}),
            color: "#000000",
            fontWeight:"700 !important",
          }}
        />
      </FormControl>
    </Box>
  );
}

export default CheckboxInputComponent;
