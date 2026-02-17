"use client";

import React, { useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Popover,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  Chip,
  Button,
  FormGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import CostumeButton from "../button";
import { LabeledInput, SelectInput } from "../custom-input";

interface SearchFilterBarProps {
  search?: string;
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const categories = ["Cafes", "Food", "Restaurant", "Hotel", "Mall"];
const cities = ["Berlin", "Munich", "Hamburg", "Frankfurt"];

const JobFilterSection: React.FC<SearchFilterBarProps> = ({
  search,
  onSearchChange,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sort, setSort] = useState("A-Z");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReset = () => {
    setSort("A-Z");
    setSelectedCategory("");
  };

  return (
    <Box
      sx={{
        mb: 4,
        bgcolor: "#FFFFFF",
        borderRadius: 2,
        p: 4,
        boxShadow: "0px 2px 8px 0px #00000026",
      }}
    >
      {/* SEARCH SECTION */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 10.5 }}>
          <LabeledInput
            placeholder="Search..."
            placeholderStyle={{ color: "#000 !important" }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 1.5 }}>
          <CostumeButton
            startIcon={<SearchIcon />}
            className="customstepperBtn"
            stylesRest={{ height: "45px !important" }}
          >
            Search
          </CostumeButton>
        </Grid>
      </Grid>

      {/* FILTER ROW */}
      <Box mt={3}>
        <Stack direction="row" spacing={2} alignItems="center">
          {/* SORT BUTTON — shows selected sort value */}
          <CostumeButton
            className="inheritCssComonBtn"
            startIcon={<FilterListIcon />}
            onClick={handleOpen}
            stylesRest={{
              background: "#F3F3F5 !important",
              color: "#000000 !important",
              border: "1px solid #A1A1AA4D !important",
              height: "45px !important",
              padding: "0 10px !important",
              fontWeight: "400 !important",
            }}
          >
            Sort By: {sort}
          </CostumeButton>

          <FormGroup>
            <SelectInput
              styleRest={{
                minWidth: "200px",
              }}
              placeholder="Category"
              options={[
                { value: "cafes", label: "Cafes" },
                { value: "food", label: "Food" },
                { value: "restaurant", label: "Restaurant" },
                { value: "hotel", label: "Hotel" },
                { value: "mall", label: "Mall" },
              ]}
            />
          </FormGroup>

          {/* CITY STATIC */}
          <FormGroup>
            <SelectInput
              styleRest={{
                minWidth: "200px",
              }}
              placeholder="City"
              options={[
                { value: "berlin", label: "Berlin" },
                { value: "munich", label: "Munich" },
                { value: "hamburg", label: "Hamburg" },
                { value: "frankfurt", label: "Frankfurt" },
              ]}
            />
          </FormGroup>
        </Stack>
      </Box>

      {/* FILTER MENU (NORMAL POPOVER) */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            width: 360,
            bgcolor: "#F4F4F6",
            p: 3,
          }}
        >
          {/* Header */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize={20} fontWeight={600}>
              Filter
            </Typography>
            <IconButton size="small" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>

          {/* Sort */}
          <Box mt={3}>
            <Typography fontWeight={600} mb={1}>
              Sort By
            </Typography>

            <RadioGroup value={sort} onChange={(e) => setSort(e.target.value)}>
              <FormControlLabel
                value="A-Z"
                control={
                  <Radio
                    sx={{
                      color: "#999",
                      "&.Mui-checked": {
                        color: "#7B2FF7",
                      },
                    }}
                  />
                }
                label="A–Z"
              />
              <FormControlLabel
                value="Z-A"
                control={
                  <Radio
                    sx={{
                      color: "#999",
                      "&.Mui-checked": {
                        color: "#7B2FF7",
                      },
                    }}
                  />
                }
                label="Z–A"
              />
            </RadioGroup>
          </Box>

          {/* Buttons */}
          <Stack direction="row" spacing={2} mt={2} justifyContent={"end"}>
            <CostumeButton className="outlineBtn" onClick={handleReset}>
              Reset
            </CostumeButton>

            <CostumeButton
              className="primaryBtn"
              onClick={handleClose}
              stylesRest={{
                height: "40px !important",
                borderRadius: "10px !important",
              }}
            >
              Apply
            </CostumeButton>
          </Stack>
        </Box>
      </Popover>
    </Box>
  );
};

export default JobFilterSection;
