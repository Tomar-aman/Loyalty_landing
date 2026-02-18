"use client";
import { Box, Typography, Grid, Stack } from "@mui/material";
import SVGICON from "@/app/assets/svg/icon";
import { LabeledInput } from "../custom-input";
import ClickableBox from "../router";
import { useEffect, useState } from "react";

import {
  subscribeNewsletter,
  getFooterDetails,
  getLandingPageContent,
  getSocialMedia,
  getAppDetails,
} from "@/app/api/home";
import { RemoteStatus } from "@/app/api/types";
import { FooterDetails } from "@/services/types.";

/* ---------- ADDRESS FORMATTER ---------- */
const formatAddress = (address: any) =>
  address
    ? [
        address.address_line_1,
        address.address_line_2,
        address.city,
        address.state,
        address.postal_code,
        address.country,
      ]
        .filter(Boolean)
        .join(", ")
    : "";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [footer, setFooter] = useState<any | null>(null);
  const [landing, setLanding] = useState<any>(null);
  const [social, setSocial] = useState<any>(null);
  const [apps, setApps] = useState<any>(null);
  const [message, setMessage] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const quickLinks = [
    { label: "Explore Businesses", id: "business" },
    { label: "Advantage Cards", id: "cards" },
    { label: "News", id: "news" },
    { label: "Get in tuch", id: "getintouch" },
  ];
  /* ---------- FETCH ALL FOOTER DATA ---------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [footerRes, landingRes, socialRes, appRes] = await Promise.all([
          getFooterDetails(),
          getLandingPageContent(),
          getSocialMedia(),
          getAppDetails(),
        ]);

        if (footerRes.remote === RemoteStatus.Success)
          setFooter(footerRes.data);

        if (landingRes.remote === RemoteStatus.Success)
          setLanding(landingRes.data);

        if (socialRes.remote === RemoteStatus.Success)
          setSocial(socialRes.data);

        if (appRes.remote === RemoteStatus.Success) setApps(appRes.data);
      } catch (err) {
        console.error("Footer load error", err);
      }
    };

    fetchData();
  }, []);

  /* ---------- NEWSLETTER ---------- */
  const handleSubscribe = async () => {
    if (!email.includes("@")) {
      setMessage("Enter valid email ❗");
      return;
    }

    setLoading(true);
    const res = await subscribeNewsletter({ email });

    if (res.remote === RemoteStatus.Success) {
      setMessage("Subscribed successfully 🎉");
      setEmail("");
    } else {
      setMessage("Something went wrong ❌");
    }

    setLoading(false);
  };

  if (!footer) return null;

  return (
    <Box
      component="footer"
      id="footer"
      sx={{ background: "#fff", borderTop: "1px solid #eee", p: 4 }}
    >
      <Grid container spacing={4}>
        {/* ---------- COLUMN 1 ---------- */}
        <Grid size={{ xs: 12, md: 4 }}>
          <ClickableBox nextPageUrl="/">
            <Typography variant="h2" sx={{ fontSize: 24, mb: 2 }}>
              {landing?.footer_section_title || "Business Connect"}
            </Typography>
          </ClickableBox>

          <Typography variant="h6" sx={{ color: "#64748B", mb: 2 }}>
            {landing?.footer_section_description ||
              "The ultimate local business directory platform connecting communities with exclusive advantage cards and amazing deals."}
          </Typography>

          <Stack direction="row" spacing={1} mb={1}>
            <Box
              sx={{
                position: "relative",
                top: 3,
              }}
            >
              <SVGICON.Location />
            </Box>
            <Typography>{formatAddress(footer.address)}</Typography>
          </Stack>

          <Stack direction="row" spacing={1} mb={1}>
            <Box
              sx={{
                position: "relative",
                top: 3,
              }}
            >
              <SVGICON.Call />
            </Box>
            <Typography
              component="a"
              href={`tel:${footer.country_code}${footer.phone_number}`}
              sx={{ color: "#020817" }}
            >
              {footer.country_code}
              {footer.phone_number}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} mb={2}>
            <Box
              sx={{
                position: "relative",
                top: 3,
              }}
            >
              <SVGICON.Message />
            </Box>
            <Typography
              component="a"
              href={`mailto:${footer.email}`}
              sx={{ color: "#020817" }}
            >
              {footer.email}
            </Typography>
          </Stack>

          {/* SOCIAL LINKS */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {social?.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGICON.Fb />
              </a>
            )}
            {social?.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGICON.Insta />
              </a>
            )}
            {social?.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGICON.X />
              </a>
            )}
            {social?.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVGICON.In />
              </a>
            )}
          </Box>
        </Grid>

        {/* ---------- COLUMN 2 ---------- */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h3" mb={2}>
            Quick Links
          </Typography>
          {quickLinks.map((item) => (
            <Typography
              key={item.id}
              sx={{ color: "#64748B", mb: 1, cursor: "pointer" }}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Typography>
          ))}
        </Grid>

        {/* ---------- COLUMN 3 ---------- */}
        {/* <Grid size={{ xs:12, md:3 }}>
          <Typography variant="h3" mb={2}>For Businesses</Typography>
          {["Join Network","Dashboard","Pricing","Support"].map((item)=>(
            <Typography key={item} sx={{ color:"#64748B", mb:1 }}>{item}</Typography>
          ))}
        </Grid> */}

        {/* ---------- COLUMN 4 ---------- */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h3" mb={2}>
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
                {apps?.ios_link && (
                  <a
                    href={apps.ios_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography sx={{ fontWeight: 700, color: "#020817" }}>
                      App Store
                    </Typography>
                  </a>
                )}
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
                {apps?.android_link && (
                  <a
                    href={apps.android_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography sx={{ fontWeight: 700, color: "#020817" }}>
                      Google Play
                    </Typography>
                  </a>
                )}
              </Box>
            </Stack>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 600, color: "#020817" }}>
            Stay Updated
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: "14px", color: "#64748B", my: 1 }}
          >
            Get the latest news and exclusive offers
          </Typography>

          <Stack direction="row" spacing={1}>
            <LabeledInput
              placeholder="Enter Email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Box
              onClick={handleSubscribe}
              sx={{ cursor: "pointer", position: "relative", top: 5 }}
            >
              <SVGICON.Arrow />
            </Box>
          </Stack>

          {message && <Typography mt={1}>{message}</Typography>}
        </Grid>
      </Grid>

      {/* ---------------- COPYRIGHT ---------------- */}
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
        <Typography variant="h6" color="#64748B">
          {footer.copyright ?? "© 2026 BusinessConnect"}
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
          {/* <ClickableBox style={{ color: "#64748B", fontSize: "14px" }}>
            Cookie Policy
          </ClickableBox>
          <ClickableBox style={{ color: "#64748B", fontSize: "14px" }}>
            Accessibility
          </ClickableBox> */}
        </Box>
      </Box>
    </Box>
  );
}
