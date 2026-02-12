"use client";
import { Box, Grid, Typography, FormGroup, Stack } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LabeledInput } from "../custom-input";
import CostumeButton from "../button";
import ClickableBox from "../router";
import { useState, useMemo } from "react";

import { subscribeNewsletter } from "../../api/home";
import { RemoteStatus } from "../../api/types";
import { NewsItem } from "@/services/types.";

/* ---------- UI TYPE ---------- */
interface NewsUI {
  title: string;
  content: string;
  date: string;
  read: string;
}

interface LatestNewsUpdatesProps {
  title?: string;
  description?: string;
  news?: {
    results?: NewsItem[];
  } | NewsItem[];
}

export default function LatestNewsUpdates({
  title,
  description,
  news,
}: LatestNewsUpdatesProps) {
  /* ---------- NORMALIZE DATA ---------- */
  const newsArray: NewsItem[] = Array.isArray(news)
    ? news
    : news?.results ?? [];

  const newsData: NewsUI[] = useMemo(
    () =>
      newsArray.map((item) => ({
        title: item.title,
        content: item.content,
        date: item.published_at
          ? new Date(item.published_at).toLocaleDateString()
          : "",
        read: item.read_time ?? "3 min read",
      })),
    [newsArray]
  );

  /* ---------- SUBSCRIBE ---------- */
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email ❗");
      return;
    }

    setLoading(true);
    const res = await subscribeNewsletter({ email });

    if (res.remote === RemoteStatus.Success) {
      alert("Subscribed successfully ✅");
      setEmail("");
    } else {
      alert("Subscription failed ❌");
    }

    setLoading(false);
  };

  return (
    <Box sx={{ mt: 8 }} id="news">
      {/* ---------- HEADER ---------- */}
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography variant="h2">
          {title ?? (
            <>
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
            </>
          )}
        </Typography>

        <Typography variant="h6" sx={{ color: "#64748B", mt: 1 }}>
          {description ??
            "Stay informed about new partnerships, exclusive promotions, and community updates."}
        </Typography>
      </Box>

      {/* ---------- NEWS GRID ---------- */}
      <Grid container spacing={3}>
        {newsData.map((item, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Box className="customCard" sx={{ border: "1px solid #828282", p: 3 }}>
              <Typography variant="h4">{item.title}</Typography>

              <Typography
                variant="h6"
                sx={{ color: "#64748B", my: 2, fontSize: "16px" }}
              >
               {item.content.length > 160
                ? `${item.content.slice(0, 160)}...`
                : item.content}
              </Typography>

              <Box display="flex" justifyContent="space-between">
                <Box display="flex" gap={2}>
                  <MetaItem icon={<CalendarTodayIcon />} text={item.date} />
                  <MetaItem icon={<AccessTimeIcon />} text={item.read} />
                </Box>

                <ClickableBox nextPageUrl="/see-our-restaurant">
                  <Box sx={{ display: "flex", gap: 0.5, fontWeight: 600 }}>
                    Read More <ArrowForwardIcon fontSize="small" />
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

      {/* ---------- NEWSLETTER ---------- */}
      <Grid container justifyContent="center" sx={{ mt: 6 }}>
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              background:
                "linear-gradient(90deg, rgba(0,0,255,0.08), rgba(187,51,255,0.08))",
              borderRadius: "24px",
              p: 6,
              textAlign: "center",
            }}
          >
            <Typography fontSize={22} fontWeight={700}>
              Stay in the loop
            </Typography>

            <Typography sx={{ color: "#6B7280", mb: 3 }}>
              Subscribe to our newsletter and never miss updates.
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="center">
              <FormGroup>
                <LabeledInput
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>

              <CostumeButton
                className="primaryBtn"
                onClick={handleSubscribe}
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </CostumeButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

/* ---------- HELPER ---------- */
const MetaItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
    {icon}
    <Typography sx={{ fontSize: 13, color: "#64748B" }}>{text}</Typography>
  </Box>
);
