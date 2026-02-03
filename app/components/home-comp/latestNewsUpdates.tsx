"use client";
import { Box, Grid, Typography, FormGroup, Stack } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LabeledInput } from "../custom-input";
import CostumeButton from "../button";
import ClickableBox from "../router";

/* ---------- TYPES ---------- */
export interface NewsItem {
  title: string;
  desc: string;
  date: string;
  read: string;
}

interface LatestNewsUpdatesProps {
  title?: string;
  description?: string;
  news?: NewsItem[];
}

/* ---------- FALLBACK DATA ---------- */
const fallbackNews: NewsItem[] = [
  {
    title: "New Restaurant Partners Join Our Network",
    desc: "Five amazing local restaurants have joined our platform this month, offering exclusive deals to our members.",
    date: "1/15/2024",
    read: "3 min read",
  },
  {
    title: "Holiday Special: Double Discounts Weekend",
    desc: "Exclusive holiday discounts available for a limited time across multiple categories.",
    date: "1/20/2024",
    read: "4 min read",
  },
];

export default function LatestNewsUpdates({
  title,
  description,
  news,
}: LatestNewsUpdatesProps) {
  const newsData = news && news.length ? news : fallbackNews;

  return (
    <Box sx={{ mt: 8 }}>
      {/* -------- SECTION HEADER -------- */}
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography variant="h2">
          {title ? (
            title
          ) : (
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
            "Stay informed about new partnerships, exclusive promotions, and community updates. Never miss out on the latest opportunities to save."}
        </Typography>
      </Box>

      {/* -------- NEWS GRID -------- */}
      <Grid container spacing={3}>
        {newsData.map((item, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Box
              className="customCard"
              sx={{ border: "1px solid #828282", p: 3 }}
            >
              <Typography variant="h4" sx={{ mb: 1 }}>
                {item.title}
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#64748B", mb: 2, fontSize: "16px" }}
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
                {/* META */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <MetaItem icon={<CalendarTodayIcon />} text={item.date} />
                  <MetaItem icon={<AccessTimeIcon />} text={item.read} />
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

      {/* -------- VIEW ALL -------- */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <CostumeButton
          className="primaryBtn"
          stylesRest={{ width: "160px !important" }}
        >
          View all
        </CostumeButton>
      </Box>

      {/* -------- NEWSLETTER -------- */}
      <Grid container justifyContent="center" sx={{ mt: 6 }}>
        <Grid size={{ xs: 12 }}>
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
            <Typography fontSize={22} fontWeight={700} mb={1}>
              Stay in the loop
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",
                color: "#6B7280",
                maxWidth: "520px",
                mx: "auto",
                mb: 3,
              }}
            >
              Subscribe to our newsletter and be the first to know about new
              partnerships, exclusive deals, and platform updates.
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="center">
              <FormGroup>
                <LabeledInput placeholder="Enter your email address" />
              </FormGroup>
              <CostumeButton className="primaryBtn">Subscribe</CostumeButton>
            </Stack>

            <Typography sx={{ fontSize: "13px", color: "#9CA3AF", mt: 2 }}>
              No spam, unsubscribe at any time.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

/* ---------- SMALL HELPER ---------- */
const MetaItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 0.6 }}>
    {icon}
    <Typography sx={{ fontSize: "13px", color: "#64748B" }}>
      {text}
    </Typography>
  </Box>
);
