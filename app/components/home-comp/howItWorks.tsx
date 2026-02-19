"use client";
import { Box, Grid, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import SearchIcon from "@mui/icons-material/Search";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      icon: <DownloadIcon sx={{ fontSize: 28, color: "#5A4FF3" }} />,
      title: "Download",
      desc: "Get the app from App Store or Google Play and create your account in seconds.",
    },
    {
      id: "02",
      icon: <SearchIcon sx={{ fontSize: 28, color: "#A855F7" }} />,
      title: "Search",
      desc: "Find local businesses by category, location, or search for specific services you need.",
    },
    {
      id: "03",
      icon: <CreditCardIcon sx={{ fontSize: 28, color: "#22C55E" }} />,
      title: "Activate",
      desc: "Choose your advantage card plan and activate it instantly with secure in-app purchase.",
    },
    {
      id: "04",
      icon: <CardGiftcardIcon sx={{ fontSize: 28, color: "#FACC15" }} />,
      title: "Redeem",
      desc: "Show your active card at participating businesses and enjoy exclusive discounts and deals.",
    },
  ];

  return (
    <Box>
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
            How It
          </span>
          Works
        </Typography>
        <Typography variant="h6" sx={{ color: "#64748B", mt: 1 }}>
          Getting started is simple. Follow these four easy steps to unlock
          exclusive discounts at <br /> your favorite local businesses.
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {steps.map((item, index) => (
          <Grid size={{ xs: 12, md: 3 }} key={index}>
            <Box
              className="customCardShadow"
              sx={{
                textAlign: "center",
                border: "none",
                py: 4,
              }}
            >
              {/* Number + Icon Row */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    background:
                      "linear-gradient(135deg, rgba(0, 0, 255, 0.2) 0%, rgba(187, 51, 255, 0.2) 100%)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#64748B",
                    }}
                  >
                    {item.id}
                  </Typography>
                </Box>

                <Box>{item.icon}</Box>
              </Box>

              {/* Title */}
              <Typography variant="h4" sx={{ color: "#020817", mb: 1 }}>
                {item.title}
              </Typography>

              {/* Description */}
              <Typography variant="h6" sx={{ color: "#64748B" }}>
                {item.desc}
              </Typography>
            </Box>
          </Grid>
        ))}

        {/* Ready to start saving? */}
        <Grid size={{ xs: 12, md: 12 }}>
          <Box
            sx={{
              background:
                "linear-gradient(90deg, rgba(120, 80, 255, 0.12) 0%, rgba(200, 120, 255, 0.12) 100%)",
              borderRadius: "24px",
              p: { xs: 4, md: 6 },
              textAlign: "center",
              border: "1px solid rgba(120, 80, 255, 0.15)",
              boxShadow: "0px 5px 25px rgba(0,0,0,0.05)",
              mt: 1,
            }}
          >
            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                fontSize: "30px",
              }}
            >
              Ready to start saving?
            </Typography>

            {/* Description */}
            <Typography
              variant="h6"
              sx={{
                color: "#64748B",
                my: 2,
              }}
            >
              Join thousands of smart shoppers who are already saving money with
              our advantage cards.
            </Typography>

            {/* Bottom Highlight Row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 4,
                flexWrap: "wrap",
              }}
            >
              {/* 1 */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CardGiftcardIcon sx={{ color: "#22C55E", fontSize: 20 }} />
                <Typography sx={{ color: "#22C55E", fontSize: "15px" }}>
                  No signup fees
                </Typography>
              </Box>

              {/* 2 */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CreditCardIcon sx={{ color: "#22C55E", fontSize: 20 }} />
                <Typography sx={{ color: "#22C55E", fontSize: "15px" }}>
                  Cancel anytime
                </Typography>
              </Box>

              {/* 3 */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <DownloadIcon sx={{ color: "#22C55E", fontSize: 20 }} />
                <Typography sx={{ color: "#22C55E", fontSize: "15px" }}>
                  Available now
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
