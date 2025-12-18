"use client";
import { Grid, Box, Typography, Stack } from "@mui/material";
import SVGICON from "@/app/assets/svg/icon";
import CostumeButton from "../button";
import Image from "next/image";
import IMAGES from "@/app/assets/images";

export default function AdvantageCard() {
  return (
    <Box>
      <Grid container spacing={4}>
        {/* -------- LEFT SECTION -------- */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h2">
            <span
              style={{
                background: "none",
                WebkitBackgroundClip: "unset",
                WebkitTextFillColor: "#020817",
                paddingRight: "10px",
              }}
            >
              Unlock Exclusive
            </span>
            <br />
            Advantage Cards
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "#64748B", my: 3, fontSize: "20px" }}
          >
            Get instant access to exclusive discounts and deals from local
            businesses. Choose the plan that fits your lifestyle and start
            saving today.
          </Typography>

          {/* Image */}
          <Box className="customCardShadow">
            <Typography variant="h2" textAlign={"center"} py={5}>
              Coming soon
            </Typography>
          </Box>

          <Box my={3}>
            <Image
              src={IMAGES.ActivatcardNew}
              alt="1"
              style={{ width: "100%",borderRadius:"12px" }}
            />
          </Box>

          {/* Icons row */}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                className="customCardShadow"
                sx={{ border: "1px solid #16A24933", background: "#16A2491A" }}
              >
                <Stack direction={"row"} spacing={1}>
                  <SVGICON.Check />
                  <Box>
                    <Typography fontWeight={600}>Instant Activation</Typography>
                    <Typography sx={{ fontSize: 14, color: "gray" }}>
                      Start using immediately
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                className="customCardShadow"
                sx={{ border: "1px solid #0000FF33", background: "#E3E4FE" }}
              >
                <Stack direction={"row"} spacing={1}>
                  <SVGICON.Timer />
                  <Box>
                    <Typography fontWeight={600}>Instant Activation</Typography>
                    <Typography sx={{ fontSize: 14, color: "gray" }}>
                      Start using immediately
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* -------- RIGHT SECTION -------- */}
        <Grid size={{ xs: 12, md: 6 }}>
          {/* ------------ 1 DAY PASS ------------ */}
          <Box className="customCardShadow" sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Stack direction={"row"} spacing={2}>
                <SVGICON.Celerate />
                <Box>
                  <Typography variant="h4">1 Day Pass</Typography>
                  <Typography variant="h6" color="#64748B">
                    24 hours
                  </Typography>
                </Box>
              </Stack>
              <Box sx={{ textAlign: "end" }}>
                <Typography variant="h5">$4.99</Typography>
                <Typography variant="h6" color="#64748B">
                  one-time
                </Typography>
              </Box>
            </Box>

            {/* Features (NO ul li) */}
            <Box sx={{ my: 2 }}>
              {[
                "Access to all business discounts",
                "Real-time deal notifications",
                "Basic customer support",
              ].map((text, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <SVGICON.Check />
                  <Typography variant="h6" sx={{ color: "#020817" }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
            <CostumeButton className="outlineBtn">
              Activate 1 Day Pass
            </CostumeButton>
          </Box>

          {/* ------------ 1 WEEK PASS (Popular) ------------ */}
          <Box
            className="customCardShadow"
            mb={3}
            sx={{ position: "relative", border: "2px solid #0000FF" }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(102.45deg, #0000FF 0%, #BB33FF 100%)",
                color: "#FFFFFF",
                padding: "4px 16px 4px 16px",
                width: "fit-content",
                position: "absolute",
                right: "0",
                top: "0",
                borderRadius: "0px 10px 0px 10px",
              }}
            >
              Most Popular
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "space-between",
                width: "100%",
                mt: 2,
              }}
            >
              <Stack direction={"row"} spacing={2}>
                <SVGICON.Timerfill />
                <Box>
                  <Typography variant="h4">1 Week Pass</Typography>
                  <Typography variant="h6" color="#64748B">
                    7 days
                  </Typography>
                </Box>
              </Stack>
              <Box sx={{ textAlign: "end" }}>
                <Typography variant="h5">$19.99</Typography>
                <Typography variant="h6" color="#64748B">
                  one-time
                </Typography>
              </Box>
            </Box>

            <Box sx={{ my: 2 }}>
              {[
                "All 1 Day Pass features",
                "Priority customer support",
                "Extended discount periods",
                "Exclusive weekly deals",
              ].map((text, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <SVGICON.Check />
                  <Typography variant="h6" sx={{ color: "#020817" }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <CostumeButton className="primaryBtn">
              Activate 1 Week Pass
            </CostumeButton>
          </Box>

          {/* ------------ 1 MONTH PASS ------------ */}
          <Box className="customCardShadow" sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Stack direction={"row"} spacing={2}>
                <SVGICON.Celerate />
                <Box>
                  <Typography variant="h4">1 Month Pass</Typography>
                  <Typography variant="h6" color="#64748B">
                    30 days
                  </Typography>
                </Box>
              </Stack>
              <Box sx={{ textAlign: "end" }}>
                <Typography variant="h5">30 days</Typography>
                <Typography variant="h6" color="#64748B">
                  one-time
                </Typography>
              </Box>
            </Box>

            {/* Features (NO ul li) */}
            <Box sx={{ my: 2 }}>
              {[
                "All previous features",
                "VIP customer support",
                "Early access to new businesses",
                "Premium member events",
                "Special birthday offers",
              ].map((text, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <SVGICON.Check />
                  <Typography variant="h6" sx={{ color: "#020817" }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
            <CostumeButton className="outlineBtn">
              Activate 1 Month Pass
            </CostumeButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
