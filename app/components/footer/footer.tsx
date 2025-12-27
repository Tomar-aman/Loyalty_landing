"use client";
import { Box, Typography, Grid, TextField, Stack } from "@mui/material";
import SVGICON from "@/app/assets/svg/icon";
import { LabeledInput } from "../custom-input";
import ClickableBox from "../router";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#ffffff",
        color: "#0C1518",
        borderTop: "1px solid #eee",
        p: 4,
      }}
    >
      <Grid container spacing={4}>
        {/* -------------------------------------------------
            COLUMN 1
        ------------------------------------------------- */}
        <Grid size={{ xs: 12, md: 3 }}>
          <ClickableBox nextPageUrl="/">
            <Typography variant="h2" sx={{ fontSize: "24px", mb: 2 }}>
              BusinessConnect
            </Typography>
          </ClickableBox>

          <Typography variant="h6" sx={{ color: "#64748B", mb: 2 }}>
            The ultimate local business directory platform connecting
            communities with exclusive advantage cards and amazing deals.
          </Typography>

          <Stack direction={"row"} spacing={1}>
            <Box pt={0.5}>
              <SVGICON.Location />
            </Box>
            <Typography variant="h6" sx={{ color: "#020817" }}>
              123 Business Ave, Suite 100 <br />
              Business City, BC 12345
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={1} my={1}>
            <Box pt={0.5}>
              <SVGICON.Call />
            </Box>
            <Typography variant="h6" sx={{ color: "#020817" }}>
              +1 (555) 123-4567
            </Typography>
          </Stack>

          <Stack direction={"row"} spacing={1} mb={2}>
            <Box pt={0.5}>
              <SVGICON.Message />
            </Box>
            <Typography variant="h6" sx={{ color: "#020817" }}>
              support@businessconnect.com
            </Typography>
          </Stack>

          <Box sx={{ display: "flex", gap: 1 }}>
            <SVGICON.Fb />
            <SVGICON.X />
            <SVGICON.Insta />
            <SVGICON.In />
          </Box>
        </Grid>

        {/* -------------------------------------------------
            COLUMN 2
        ------------------------------------------------- */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Quick Links
          </Typography>
          {[
            "About Us",
            "Business Directory",
            "Advantage Cards",
            "How It Works",
            "News & Updates",
            "Contact",
          ].map((item) => (
            <ClickableBox
              key={item}
              style={{
                color: "#64748B",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              {item}
            </ClickableBox>
          ))}
        </Grid>

        {/* -------------------------------------------------
            COLUMN 3
        ------------------------------------------------- */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            For Businesses
          </Typography>
          {[
            "Join Our Network",
            "Business Dashboard",
            "Pricing Plans",
            "Marketing Tools",
            "Analytics & Reports",
            "Business Support",
          ].map((item) => (
            <Typography
              key={item}
              style={{
                color: "#64748B",
                fontSize: "14px",
                marginBottom: "10px",
              }}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        {/* -------------------------------------------------
            COLUMN 4
        ------------------------------------------------- */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Get The App
          </Typography>

          {/* App Store Box */}
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: 2,
              p: 2,
              mb: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Stack direction={"row"} spacing={2}>
              <SVGICON.Apple />
              <Box>
                <Typography sx={{ fontSize: 12, color: "#555" }}>
                  Download on the
                </Typography>
                <Typography sx={{ fontWeight: 700 }}>App Store</Typography>
              </Box>
            </Stack>
          </Box>

          {/* Google Play Box */}
          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: 2,
              p: 2,
              mb: 4,
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Stack direction={"row"} spacing={2}>
              <SVGICON.Google />
              <Box>
                <Typography sx={{ fontSize: 12, color: "#555" }}>
                  Get it on
                </Typography>
                <Typography sx={{ fontWeight: 700 }}>Google Play</Typography>
              </Box>
            </Stack>
          </Box>

          {/* Stay Updated */}
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#020817" }}>
            Stay Updated
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "14px", color: "#64748B", my: 1 }}
          >
            Get the latest news and exclusive offers
          </Typography>

          <Stack direction={"row"} spacing={1}>
            <LabeledInput placeholder="Enter Email" />
            <SVGICON.Arrow />
          </Stack>
        </Grid>
      </Grid>

      {/* -------------------------------------------------
        BOTTOM FOOTER
      ------------------------------------------------- */}
      <Box
        sx={{
          mt: 6,
          pt: 3,
          borderTop: "1px solid #eee",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          color: "#777",
          fontSize: 14,
        }}
      >
        <Typography variant="h6" sx={{ color: "#64748B" }}>
          © 2025 BusinessConnect. All rights reserved.
        </Typography>

        <Box sx={{ display: "flex", gap: 4 }}>
          <ClickableBox
            nextPageUrl="/privacy-policy"
            target="_blank"
            style={{ color: "#64748B", fontSize: "14px" }}
          >
            Privacy Policy
          </ClickableBox>
          <ClickableBox
            target="_blank"
            nextPageUrl="/terms-of-use"
            style={{ color: "#64748B", fontSize: "14px" }}
          >
            Terms of Service
          </ClickableBox>
          <ClickableBox style={{ color: "#64748B", fontSize: "14px" }}>
            Cookie Policy
          </ClickableBox>
          <ClickableBox style={{ color: "#64748B", fontSize: "14px" }}>
            Accessibility
          </ClickableBox>
        </Box>
      </Box>
    </Box>
  );
}
