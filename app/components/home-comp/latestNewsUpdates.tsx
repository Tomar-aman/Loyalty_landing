"use client";
import { Box, Grid, Typography, FormGroup, Stack } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LabeledInput } from "../custom-input";
import CostumeButton from "../button";
import ClickableBox from "../router";

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
  ];

  return (
    <Box sx={{ mt: 8 }}>
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
                <ClickableBox nextPageUrl="/see-our-restaurant">
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

      {/* STAY IN THE LOOP SECTION */}
      <Grid container justifyContent="center" sx={{ mt: 6 }}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Box
            sx={{
              background:
                "linear-gradient(90deg, rgba(0,0,255,0.08) 0%, rgba(187,51,255,0.08) 100%)",
              borderRadius: "24px",
              p: { xs: 4, md: 6 },
              textAlign: "center",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            {/* TITLE */}
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#1F1F1F",
                mb: 1,
              }}
            >
              Stay in the loop
            </Typography>

            {/* SUBTITLE */}
            <Typography
              sx={{
                fontSize: "15px",
                color: "#6B7280",
                maxWidth: "520px",
                mx: "auto",
                mb: 3,
                lineHeight: "24px",
              }}
            >
              Subscribe to our newsletter and be the first to know about new
              partnerships, exclusive deals, and platform updates.
            </Typography>

            {/* INPUT + BUTTON */}

            <Grid size={{ xs: 12, md: 12 }}>
              <Stack direction={"row"} spacing={2} justifyContent={"center"}>
                <FormGroup>
                  <LabeledInput placeholder="Enter your email address" />
                </FormGroup>
                <CostumeButton
                  className="primaryBtn"
                  stylesRest={{
                    height: "40px !important",
                    fontSize: "14px !important",
                  }}
                >
                  Subscribe
                </CostumeButton>
              </Stack>
            </Grid>

            {/* FOOTER TEXT */}
            <Typography
              sx={{
                fontSize: "13px",
                color: "#9CA3AF",
                mt: 2,
              }}
            >
              No spam, unsubscribe at any time.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
