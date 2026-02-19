"use client";
import { Box, Grid, Typography, FormGroup } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { LabeledInput } from "../custom-input";
import CostumeButton from "../button";
import { useState } from "react";

import { submitContactUs } from "../../api/home";
import { RemoteStatus } from "../../api/types";

interface GetInTouchProps {
  title?: string | null;
  description?: string | null;
}

export default function GetInTouch({
  title,
  description,
}: GetInTouchProps) {
  /* ---------- STATE ---------- */
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  /* ---------- HANDLERS ---------- */
  const handleChange =
  (key: keyof typeof form) =>
  (value: any) => {
    const newValue =
      typeof value === "string"
        ? value
        : value?.target?.value ?? "";

    setForm((prev) => ({ ...prev, [key]: newValue }));
  };

  const handleSubmit = async () => {
    console.log(form);
    if (!form.first_name || !form.subject || !form.email || !form.message) {
      alert("Please fill required fields ❗");
      return;
    }
    setLoading(true);
    const res = await submitContactUs({
      name: `${form.first_name} ${form.last_name}`,
      email: form.email,
      subject: form.subject,
      message: form.message,
    });

    if (res.remote === RemoteStatus.Success) {
      alert("Message sent successfully ✅");
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Failed to send message ❌");
      console.error(res.error);
    }

    setLoading(false);
  };

  /* ---------- UI ---------- */
  return (
    <Box
      sx={{
        px: 10,
        "@media (max-width: 600px)": {
          p: 0,
        },
      }}
      id="getintouch"
    >
      {/* ---------- HEADER ---------- */}
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography variant="h2">
          {title || (
            <>
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
            </>
          )}
        </Typography>
        <Typography variant="h6" sx={{ color: "#64748B", mt: 1 }}>
          {description ||
            "Have questions about our platform? Need help with your advantage card? We're here to help and would love to hear from you."}
        </Typography>
      </Box>

      {/* ---------- FORM ---------- */}
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
                name="first_name"
                placeholder="Enter your First Name"
                value={form.first_name}
                onChange={handleChange("first_name")}
              />
            </FormGroup>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <FormGroup>
              <LabeledInput
                label="Last Name"
                name="last_name"
                placeholder="Enter your Last Name"
                value={form.last_name}
                onChange={handleChange("last_name")}
              />
            </FormGroup>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FormGroup>
              <LabeledInput
                label="Email"
                name="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange("email")}
              />
            </FormGroup>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <FormGroup>
              <LabeledInput
                label="Subject"
                name="subject"
                placeholder="What is this about?"
                value={form.subject}
                onChange={handleChange("subject")}
              />
            </FormGroup>
          </Grid>

          <Grid size={{ xs: 12 }} mt={2}>
            <Typography variant="h6" color="#020817" fontWeight={600} mb={1}>
              Message
            </Typography>
            <textarea
              className="textareaNotes"
              name="message"
              placeholder="Tell us how we can help you..."
              value={form.message}
              onChange={handleChange("message")}
            />
          </Grid>

          {/* ---------- SUBMIT ---------- */}
          <Grid
            size={{ xs: 12 }}
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CostumeButton
              className="primaryBtn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </CostumeButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
