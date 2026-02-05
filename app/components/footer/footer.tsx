"use client";
import { Box, Typography, Grid, Stack } from "@mui/material";
import SVGICON from "@/app/assets/svg/icon";
import { LabeledInput } from "../custom-input";
import ClickableBox from "../router";
import { useEffect, useState } from "react";

import { subscribeNewsletter, getFooterDetails } from "@/app/api/home";
import { RemoteStatus } from "@/app/api/types";
import { FooterDetails } from "@/services/types.";

/* ---------------- ADDRESS FORMATTER ---------------- */
const formatAddress = (address: any) => {
  if (!address) return "";

  return [
    address.address_line_1,
    address.address_line_2,
    address.city,
    address.state,
    address.postal_code,
    address.country,
  ]
    .filter(Boolean)
    .join(", ");
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [footer, setFooter] = useState<FooterDetails | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  /* ---------------- FETCH FOOTER DATA ---------------- */
  useEffect(() => {
    const fetchFooter = async () => {
      const res = await getFooterDetails();
      if (res.remote === RemoteStatus.Success) {
        setFooter(res.data as FooterDetails);
      }
    };
    fetchFooter();
  }, []);

  /* ---------------- SUBSCRIBE NEWSLETTER ---------------- */
  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      setMessage("Enter valid email");
      return;
    }

    setLoading(true);
    setMessage(null);

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
    <Box component="footer" sx={{ background:"#fff", borderTop:"1px solid #eee", p:4 }}>
      <Grid container spacing={4}>
        
        {/* ---------------- COLUMN 1 ---------------- */}
        <Grid size={{ xs:12, md:3 }}>
          <ClickableBox nextPageUrl="/">
            <Typography variant="h2" sx={{ fontSize:24, mb:2 }}>
              BusinessConnect
            </Typography>
          </ClickableBox>
           <Typography variant="h6" sx={{ color: "#64748B", mb: 2 }}>
            The ultimate local business directory platform connecting
            communities with exclusive advantage cards and amazing deals.
          </Typography>


          {/* ADDRESS */}
          <Stack direction="row" spacing={1} mb={1} sx={{ color: "#020817" }}>
            <SVGICON.Location />
            <Typography variant="h6" sx={{ color: "#020817" }}>
              {formatAddress(footer.address)}
            </Typography>
          </Stack>

          {/* PHONE */}
          <Stack direction="row" spacing={1} mb={1} sx={{ color: "#020817" }}>
            <SVGICON.Call />
            <Typography variant="h6" component="a" href={`tel:${footer.phone}`} sx={{ color: "#020817" }}>
              {footer.phone}
            </Typography>
          </Stack>

          {/* EMAIL */}
          <Stack direction="row" spacing={1} mb={2} sx={{ color: "#020817" }}>
            <SVGICON.Message />
            <Typography variant="h6" component="a" href={`mailto:${footer.email}`} sx={{ color: "#020817" }}>
              {footer.email}
            </Typography>
          </Stack>

          {/* SOCIAL LINKS */}
          <Box sx={{ display:"flex", gap:1 }} >
            {footer.facebook && <a href={footer.facebook} target="_blank" ><SVGICON.Fb/></a>}
            {footer.instagram && <a href={footer.instagram} target="_blank"><SVGICON.Insta/></a>}
            {footer.twitter && <a href={footer.twitter} target="_blank"><SVGICON.X/></a>}
            {footer.linkedin && <a href={footer.linkedin} target="_blank"><SVGICON.In/></a>}
          </Box>
        </Grid>

        {/* ---------------- COLUMN 2 ---------------- */}
        <Grid size={{ xs:12, md:3 }}>
          <Typography variant="h3" mb={2}>Quick Links</Typography>
          {["About","Businesses","Cards","News","Contact"].map(item=>(
            <ClickableBox key={item} style={{ color:"#64748B", marginBottom:10 }}>
              {item}
            </ClickableBox>
          ))}
        </Grid>

        {/* ---------------- COLUMN 3 ---------------- */}
        <Grid size={{ xs:12, md:3 }}>
          <Typography variant="h3" mb={2}>For Businesses</Typography>
          {["Join Network","Dashboard","Pricing","Support"].map(item=>(
            <Typography key={item} sx={{ color:"#64748B", mb:1 }}>
              {item}
            </Typography>
          ))}
        </Grid>

        {/* ---------------- COLUMN 4 (NEWSLETTER) ---------------- */}
        <Grid size={{ xs:12, md:3 }}>
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

          <Typography variant="h6" fontWeight={600} sx={{ color: "#020817" }}>Stay Updated</Typography>
          <Typography variant="h6" sx={{ fontSize:14, color:"#64748B", my:1 }}>
            Get latest news & offers
          </Typography>

          <Stack direction="row" spacing={1}>
            <LabeledInput
              placeholder="Enter Email"
              value={email}
              onChange={(e:any)=>setEmail(e.target.value)}
            />

            <Box
              onClick={handleSubscribe}
              sx={{ cursor:"pointer", opacity: loading ? 0.5 : 1 }}
            >
              <SVGICON.Arrow />
            </Box>
          </Stack>

          {/* SUCCESS / ERROR MESSAGE */}
          {message && (
            <Typography sx={{ fontSize:13, mt:1, color:"#64748B" }}>
              {message}
            </Typography>
          )}
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
