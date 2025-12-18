import React from "react";
import CustomAccordion from "../accordion/accordion";
import { Typography } from "@mui/material";

export default function FrequentlyQuestions() {
  return (
    <div>
      <Typography variant="h2" sx={{ fontSize: "30px", textAlign: "center" }}>
        <span
          style={{
            background: "none",
            WebkitBackgroundClip: "unset",
            WebkitTextFillColor: "#020817",
            paddingRight: "10px",
          }}
        >
          Frequently Asked
        </span>
        Questions
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: "#64748B", textAlign: "center", mt: 1 }}
      >
        Quick answers to common questions about our platform
      </Typography>
      <CustomAccordion
        defaultExpanded={true}
        title="How do I activate my advantage card?"
        restStyle={{ borderBottom: "1px solid #E3E3E3" }}
      >
        <Typography variant="h6" sx={{ color: "#6F6C90" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </CustomAccordion>
      <CustomAccordion
        title="Can I use my card at any business?"
        restStyle={{ borderBottom: "1px solid #E3E3E3" }}
      >
        <Typography variant="h6" sx={{ color: "#6F6C90" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </CustomAccordion>
      <CustomAccordion
        title="What happens when my card expires?"
        restStyle={{ borderBottom: "1px solid #E3E3E3" }}
      >
        <Typography variant="h6" sx={{ color: "#6F6C90" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </CustomAccordion>
      <CustomAccordion
        title="Is there a refund policy?"
        restStyle={{ borderBottom: "1px solid #E3E3E3" }}
      >
        <Typography variant="h6" sx={{ color: "#6F6C90" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </CustomAccordion>
    </div>
  );
}
