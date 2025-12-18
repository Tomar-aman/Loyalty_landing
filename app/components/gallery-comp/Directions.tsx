import { Grid, Box, Typography } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import NearMeIcon from "@mui/icons-material/NearMe";
import CostumeButton from "../button";

export default function Directions() {
  // Contact Info Array
  const contactDetails = [
    {
      title: "Company phone number",
      value: "(+1) 787887878",
      link: "tel:+1787887878",
      icon: <CallIcon />,
    },
    {
      title: "Company Email",
      value: "support@bellavista.com",
      link: "mailto:support@bellavista.com",
      icon: <MailOutlineIcon />,
    },
    {
      title: "Website",
      value: "www.bellavista.com",
      link: "https://www.bellavista.com",
      icon: <LanguageIcon />,
    },
  ];

  return (
    <div>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 4, mb: 2 }}>
        {contactDetails.map((item, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 2,
                borderRadius: "12px",
                background: "#F5F5FF",
                boxShadow: "0px 4px 20px rgba(124,59,237,0.1)",
                justifyContent: "flex-start",
                border: "1px solid #E0E0FF",
              }}
            >
              {/* Icon Box for non-Directions */}
              {item && (
                <Box
                  sx={{
                    background: "#7C3BED1A",
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#7C3BED",
                    fontSize: "22px",
                  }}
                >
                  {item.icon}
                </Box>
              )}
              <Box>
                <Typography sx={{ fontWeight: 600, textAlign: "left" }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#7C3BED",
                    textDecoration: "underline",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          textAlign: "end",
        }}
      >
        <CostumeButton
          className="outlineBtn"
          startIcon={<NearMeIcon />}
          stylesRest={{ width: "200px !important" }}
        >
          Directions
        </CostumeButton>
      </Box>
    </div>
  );
}
