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

  // 🆕 PAGINATION STATES
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const PER_PAGE = 6;

  /* ---------- FETCH NEWS FUNCTION ---------- */
  const fetchNews = async (pageNumber = 1, PER_PAGE = 6) => {
    const res = await getNewsItems({ page: pageNumber, per_page: PER_PAGE });

    if (res.remote === RemoteStatus.Success) {
      const apiData = (res.data as any)?.results ?? [];

      const mapped: NewsUI[] = apiData.map((item: NewsItem) => ({
        id: item.id,
        title: item.title,
        fullText: item.content ?? item.description ?? "",
        date: new Date(item.published_at).toLocaleDateString(),
        read: item.read_time ?? "3 min read",
      }));

      // first page → replace
      if (pageNumber === 1) {
        setNews(mapped);
      } 
      // next pages → append
      else {
        setNews(prev => [...prev, ...mapped]);
      }

      // stop pagination if no more records
      if (apiData.length < PER_PAGE) {
        setHasMore(false);
      }
    }

    setLoading(false);
  };

  /* ---------- FIRST LOAD ---------- */
  useEffect(() => {
    fetchNews(1);
  }, []);

  /* ---------- LOAD MORE ---------- */
  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchNews(nextPage);
  };

  /* ---------- READ MORE TOGGLE ---------- */
  const toggleReadMore = (id: number) => {
    setExpandedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const trimText = (text: string) =>
    text.length > 200 ? text.slice(0, 200) + "..." : text;

  if (loading) return null;

  return (
    <Box className="pageColor">
      {/* HEADER */}
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

      {/* NEWS GRID */}
      <Grid container spacing={3}>
        {news.map((item) => {
          const expanded = expandedIds.includes(item.id);

          return (
            <Grid size={{ xs: 12, md: 6 }} key={item.id}>
              <Box className="customCard" sx={{ border: "1px solid #828282", p: 3 }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>

                <Typography variant="h6" sx={{ color: "#64748B", mb: 2, fontSize: 16 }}>
                  {expanded ? item.fullText : trimText(item.fullText)}
                </Typography>

                <Box display="flex" justifyContent="space-between" mt={3}>
                  <Box display="flex" gap={2}>
                    <Meta icon={<CalendarTodayIcon />} text={item.date} />
                    <Meta icon={<AccessTimeIcon />} text={item.read} />
                  </Box>

                  <Box
                    onClick={() => toggleReadMore(item.id)}
                    sx={{ display: "flex", gap: 0.5, fontWeight: 600, cursor: "pointer" }}
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

      {/* LOAD MORE BUTTON */}
      <Box textAlign="center" mt={4}>
        {hasMore && (
          <CostumeButton className="primaryBtn" onClick={loadMore}>
            Load More
          </CostumeButton>
        )}
      </Box>
    </Box>
  );
}

/* META COMPONENT */
const Meta = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <Box display="flex" alignItems="center" gap={0.6}>
    {icon}
    <Typography sx={{ fontSize: 13, color: "#64748B" }}>{text}</Typography>
  </Box>
);
