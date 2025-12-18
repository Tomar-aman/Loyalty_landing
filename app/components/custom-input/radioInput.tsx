import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface Option {
  value: string;
  label: string;
  icon?: React.ReactNode;
  image: StaticImageData | string;
}

interface SingleSelectionRadioGroupProps {
  options: Option[];
  label?: string;
  name: string;
}

const RadioInputComponent: React.FC<SingleSelectionRadioGroupProps> = ({
  options,
  label,
  name,
}) => {
  const [value, setValue] = React.useState<string>(""); // State to manage selected value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value); // Update the state when a radio button is selected
  };

  return (
    <Box sx={{ padding: 2 }}>
      <FormControl>
        {label && (
          <FormLabel
            sx={{
              fontSize: "18px",
              fontWeight: "500",
              textTransform: "capitalize",
              marginBottom: 2,
            }}
          >
            {label}
          </FormLabel>
        )}
        <RadioGroup name={name} value={value} onChange={handleChange}>
          <Stack direction="row" spacing={3}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={
                  <Radio
                    sx={{
                      color: "#A8A8A8",
                      "&.Mui-checked": {
                        color: "#9B59B6",
                      },
                    }}
                  />
                }
                label={
                  <Stack alignItems="start" spacing={1}>
                    <Image
                      src={option.image}
                      alt={option.label}
                      style={{ width: "60px", height: "auto" }}
                    />
                    {option.icon}
                    <span>{option.label}</span>
                  </Stack>
                }
              />
            ))}
          </Stack>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default RadioInputComponent;
