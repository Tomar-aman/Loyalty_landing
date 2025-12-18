"use client";
import { Box, Grid, Typography, FormGroup } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { LabeledInput } from "../custom-input";
import CostumeButton from "../button";

export default function GetInTouch() {
  return (
    <Box sx={{ px: 10 }}>
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
            Get In
          </span>
          Touch
        </Typography>
        <Typography variant="h6" sx={{ color: "#64748B", mt: 1 }}>
          Have questions about our platform? Need help with your advantage card?
          We're here <br /> to help and would love to hear from you.
        </Typography>
      </Box>
      <Box className="customCardShadow" sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              bgcolor: "rgba(0,200,0,0.1)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2,
            }}
          >
            <ChatBubbleOutlineIcon sx={{ fontSize: 28, color: "#10B981" }} />
          </Box>
          <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
            Send us a message
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormGroup>
              <LabeledInput
                label="First Name"
                placeholder="Enter your First Name"
              />
            </FormGroup>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <FormGroup>
              <LabeledInput
                label="last Name"
                placeholder="Enter your last Name"
              />
            </FormGroup>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <FormGroup>
              <LabeledInput
                label="email"
                placeholder="Enter your email address"
              />
            </FormGroup>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <FormGroup>
              <LabeledInput label="Subject" placeholder="what is this about?" />
            </FormGroup>
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <Typography variant="h6" color="#020817" fontWeight={"600"}>
              Message
            </Typography>
            <textarea
              className="textareaNotes"
              placeholder="Tell us how we can help you..."
            ></textarea>
          </Grid>

          {/* reCAPTCHA + Submit Button */}
          <Grid
            size={{ xs: 12, md: 12 }}
            sx={{
              mt: 2,
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                height: "78px",
                border: "1px solid #E5E7EB",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                px: 2,
              }}
            >
              <Typography color="text.secondary">
                I'm not a robot (reCAPTCHA box)
              </Typography>
            </Box>

            {/* Send Message Button */}
            <Box>
              <CostumeButton className="primaryBtn">Send Message</CostumeButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
