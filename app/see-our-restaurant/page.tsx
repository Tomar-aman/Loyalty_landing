"use client";
import { Box, Grid, Typography, FormGroup, Stack } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ClickableBox from "../components/router";
import CostumeButton from "../components/button";

export default function LatestNewsUpdates() {
  const newsData = [
    {
      title: "New Restaurant Partners Join Our Network",
      desc: "Five amazing local restaurants have joined our platform this month, offering exclusive deals to our members.",
      date: "1/15/2024",
      read: "3 min read",
    },
    {
      title: "Holiday Special: Double Discounts Weekend",
      desc: "Five amazing local restaurants have joined our platform this month, offering exclusive deals to our members.",
      date: "1/15/2024",
      read: "3 min read",
    },
    {
      title: "New Restaurant Partners Join Our Network",
      desc: "Five amazing local restaurants have joined our platform this month, offering exclusive deals to our members.",
      date: "1/15/2024",
      read: "3 min read",
    },
    {
      title: "Holiday Special: Double Discounts Weekend",
      desc: "Five amazing local restaurants have joined our platform this month, offering exclusive deals to our members.",
      date: "1/15/2024",
      read: "3 min read",
    },
    {
      title: "New Restaurant Partners Join Our Network",
      desc: "Five amazing local restaurants have joined our platform this month, offering exclusive deals to our members.",
      date: "1/15/2024",
      read: "3 min read",
    },
    {
      title: "Holiday Special: Double Discounts Weekend",
      desc: "Five amazing local restaurants have joined our platform this month, offering exclusive deals to our members.",
      date: "1/15/2024",
      read: "3 min read",
    },
    {
      title: "New Restaurant Partners Join Our Network",
      desc: "Five amazing local restaurants have joined our platform this month, offering exclusive deals to our members.",
      date: "1/15/2024",
      read: "3 min read",
    },
    {
      title: "Holiday Special: Double Discounts Weekend",
      desc: "Five amazing local restaurants have joined our platform this month, offering exclusive deals to our members.",
      date: "1/15/2024",
      read: "3 min read",
    },
    {
      title: "New Restaurant Partners Join Our Network",
      desc: "Five amazing local restaurants have joined our platform this month, offering exclusive deals to our members.",
      date: "1/15/2024",
      read: "3 min read",
    },
    {
      title: "Holiday Special: Double Discounts Weekend",
      desc: "Five amazing local restaurants have joined our platform this month, offering exclusive deals to our members.",
      date: "1/15/2024",
      read: "3 min read",
    },
  ];

  return (
    <Box className="pageColor">
      {/* NEWS GRID */}
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography variant="h2">
          <span
            style={{
              background: "none",
              WebkitBackgroundClip: "unset",
              WebkitTextFillColor: "#020817",
              paddingRight: "10px",
            }}
          >
            Latest
          </span>
          News & Updates
        </Typography>
        <Typography variant="h6" sx={{ color: "#64748B", mt: 1 }}>
          Stay informed about new partnerships, exclusive promotions, and
          community updates. <br /> Never miss out on the latest opportunities
          to save.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {newsData.map((item, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Box
              className="customCard"
              sx={{
                border: "1px solid #828282",
                p: 3,
              }}
            >
              {/* TITLE */}
              <Typography variant="h4" sx={{ mb: 1 }}>
                {item.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                variant="h6"
                sx={{
                  color: "#64748B",
                  mb: 2,
                  fontSize: "16px",
                }}
              >
                {item.desc}
              </Typography>

              {/* META + READ MORE */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 3,
                }}
              >
                {/* DATE + READ TIME */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                    <CalendarTodayIcon
                      sx={{ fontSize: 16, color: "#64748B" }}
                    />
                    <Typography sx={{ fontSize: "13px", color: "#64748B" }}>
                      {item.date}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
                    <AccessTimeIcon sx={{ fontSize: 16, color: "#64748B" }} />
                    <Typography sx={{ fontSize: "13px", color: "#64748B" }}>
                      {item.read}
                    </Typography>
                  </Box>
                </Box>

                {/* READ MORE */}
                <ClickableBox nextPageUrl="#">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    Read More <ArrowForwardIcon sx={{ fontSize: 16 }} />
                  </Box>
                </ClickableBox>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* VIEW ALL BUTTON */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <CostumeButton
          className="primaryBtn"
          stylesRest={{
            width: "160px !important",
          }}
        >
          view all
        </CostumeButton>
      </Box>
    </Box>
  );
}
