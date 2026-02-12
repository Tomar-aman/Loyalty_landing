"use client";
import { Grid, Box, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import NearMeIcon from "@mui/icons-material/NearMe";
import CostumeButton from "../button";

export interface DirectionsProps {
  business: {
    phone_number?: string;
    email?: string;
    website?: string;
    latitude?: string;
    longitude?: string;
  };
}

export default function Directions({ business }: DirectionsProps) {
  const contactDetails = [
    {
      title: "Phone",
      value: business.phone_number,
      link: `tel:${business.phone_number}`,
      icon: <CallIcon />,
    },
    {
      title: "Email",
      value: business.email,
      link: `mailto:${business.email}`,
      icon: <MailOutlineIcon />,
    },
    {
      title: "Website",
      value: business.website,
      link: business.website,
      icon: <LanguageIcon />,
    },
  ].filter(item => item.value); // remove empty fields

  return (
    <>
      <Grid container spacing={3} justifyContent="center" mt={4}>
        {contactDetails.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Box className="customCardShadow" sx={{ p:2, display:"flex", gap:2 }}>
              <Box sx={{ color:"#7C3BED" }}>{item.icon}</Box>
              <Box>
                <Typography fontWeight={600}>{item.title}</Typography>
                <Typography
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#7C3BED",
                    textDecoration: "none",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                    wordBreak: "break-word",
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="end" mt={2}>
        <a
          href={`https://www.google.com/maps?q=${business.latitude},${business.longitude}`}
          target="_blank"
        >
          <CostumeButton className="outlineBtn" startIcon={<NearMeIcon />}>
            Directions
          </CostumeButton>
        </a>
      </Box>
    </>
  );
}
