"use client";
import React, { CSSProperties, useState } from "react";
import Accordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ICustomAccordion extends AccordionProps {
  title?: any;
  restStyle?: CSSProperties;
  subtitle?: string;
  options?: React.ReactNode;
  accodianClose?: any;
  defaultExpanded?: boolean;
}

function CustomAccordion({
  title,
  subtitle,
  restStyle,
  children,
  options,
  accodianClose,
  defaultExpanded = false,
  ...rest
}: ICustomAccordion) {
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);

  const handleAccordionChange = (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded);
  };

  return (
    <Box
      sx={{
        my: 2,
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        border: expanded ? "2px solid #4A3AFF" : "2px solid #ffffff",
        boxShadow: " 0px 6px 16px 0px #4A3AFF30",
      }}
    >
      <Accordion
        expanded={expanded}
        onChange={handleAccordionChange}
        disableGutters
        elevation={0}
        sx={{
          border: "none !important",
          boxShadow: "none !important",
          borderRadius: "0",
          background: "#ffffff",
          transition: "all 0.3s ease",
          ...restStyle,
        }}
        {...rest}
      >
        <AccordionSummary
          expandIcon={
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: expanded ? "#5A4FF3" : "#F5F4FF",
                boxShadow: "0px 5px 16px 0px #080F340F",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
            >
              <ExpandMoreIcon
                sx={{
                  color: expanded ? "#fff" : "#5A4FF3",
                  fontSize: "26px",
                  transform: expanded ? "rotate(180deg)" : "rotate(-90deg)",
                  transition: "all 0.3s ease",
                }}
              />
            </Box>
          }
          sx={{
            px: 3,
            py: 1,
            transition: "all 0.3s ease",
            height: "132px",
          }}
        >
          <Typography
            sx={{ fontWeight: 500, fontSize: "22px", color: "#170F49" }}
          >
            {title}
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            px: 3,
            pb: 3,
            pt: 0,
            transition: "all 0.3s ease",
          }}
        >
          {children}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default CustomAccordion;
