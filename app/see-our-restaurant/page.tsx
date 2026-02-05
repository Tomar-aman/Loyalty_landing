"use client";
import { Box, Grid, Typography } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CostumeButton from "../components/button";

import { getNewsItems } from "../api/home";
import { RemoteStatus } from "../api/types";
import { NewsItem } from "@/services/types.";
import { useEffect, useState } from "react";

/* ---------- UI TYPE ---------- */
interface NewsUI {
  id: number;
  title: string;
  fullText: string;
  date: string;
  read: string;
}

export default function LatestNewsUpdates() {
  const [news, setNews] = useState<NewsUI[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  /* ---------- FETCH NEWS ---------- */
  useEffect(() => {
    const fetchNews = async () => {
      const res = await getNewsItems();

      if (res.remote === RemoteStatus.Success) {
        const apiData = (res.data as any)?.results ?? [];

        const mapped: NewsUI[] = apiData.map((item: NewsItem) => ({
          id: item.id,
          title: item.title,
          fullText: item.content ?? item.description ?? "",
          date: new Date(item.published_at ?? item.published_at).toLocaleDateString(),
          read: item.read_time ?? "3 min read",
        }));

        setNews(mapped);
      }

      setLoading(false);
    };

    fetchNews();
  }, []);

  /* ---------- TOGGLE READ MORE ---------- */
  const toggleReadMore = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  /* ---------- HELPERS ---------- */
  const trimText = (text: string) =>
    text.length > 200 ? text.slice(0, 200) + "..." : text;

  if (loading) return null;

  return (
    <Box className="pageColor">
      {/* ---------- HEADER ---------- */}
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography variant="h2">
          <span style={{ WebkitTextFillColor: "#020817", paddingRight: 10 }}>
            Latest
          </span>
          News & Updates
        </Typography>

        <Typography variant="h6" sx={{ color: "#64748B", mt: 1 }}>
          Stay informed about new partnerships, exclusive promotions and updates.
        </Typography>
      </Box>

      {/* ---------- NEWS GRID ---------- */}
      <Grid container spacing={3}>
        {news.map((item) => {
          const expanded = expandedIds.includes(item.id);

          return (
            <Grid size={{ xs: 12, md: 6 }} key={item.id}>
              <Box className="customCard" sx={{ border: "1px solid #828282", p: 3 }}>
                {/* TITLE */}
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  variant="h6"
                  sx={{ color: "#64748B", mb: 2, fontSize: 16 }}
                >
                  {expanded ? item.fullText : trimText(item.fullText)}
                </Typography>

                {/* META + READ MORE */}
                <Box display="flex" justifyContent="space-between" mt={3}>
                  <Box display="flex" gap={2}>
                    <Meta icon={<CalendarTodayIcon />} text={item.date} />
                    <Meta icon={<AccessTimeIcon />} text={item.read} />
                  </Box>

                  {/* READ MORE TOGGLE */}
                  <Box
                    onClick={() => toggleReadMore(item.id)}
                    sx={{
                      display: "flex",
                      gap: 0.5,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    {expanded ? "Read Less" : "Read More"}
                    <ArrowForwardIcon fontSize="small" />
                  </Box>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>

      {/* ---------- VIEW ALL BUTTON ---------- */}
      <Box textAlign="center" mt={4}>
        <CostumeButton className="primaryBtn">
          View all
        </CostumeButton>
      </Box>
    </Box>
  );
}

/* ---------- META COMPONENT ---------- */
const Meta = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <Box display="flex" alignItems="center" gap={0.6}>
    {icon}
    <Typography sx={{ fontSize: 13, color: "#64748B" }}>{text}</Typography>
  </Box>
);
