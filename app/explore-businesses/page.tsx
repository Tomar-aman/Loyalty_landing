"use client";

import { Grid, Typography, Box, Stack } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CostumeButton from "../components/button";
import { useEffect, useState } from "react";

import {
  getFeaturedBusinesses,
  getCities,
  getCategories,
} from "../api/home";

import { RemoteStatus } from "../api/types";
import { BusinessItem } from "@/services/types.";
import ClickableBox from "../components/router";
import WordLimitText from "../components/wordLimit/limit";
import JobFilterSection from "../components/home-comp/SearchFilter";

interface UIBusiness {
  id: number;
  title: string;
  category: string;
  discount: string;
  address: string;
  phone: string;
  time: string;
}

const mapBusinessToUI = (item: BusinessItem): UIBusiness => ({
  id: item.id,
  title: item.name,
  category: item.category?.name ?? "Business",
  discount: item.discount_text ?? "Special discounts available",
  address: item.address ?? "Address not available",
  phone: item.phone_number ?? "N/A",
  time:
    item.opening_time && item.closing_time
      ? `${item.opening_time} - ${item.closing_time}`
      : "Timings not available",
});

export default function ExploreBusiness() {
  const [businesses, setBusinesses] = useState<UIBusiness[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  /* ⭐ INITIAL LOAD (ALL APIs) */
  useEffect(() => {
    const initLoad = async () => {
      try {
        const [businessRes, cityRes, categoryRes] = await Promise.all([
          getFeaturedBusinesses(),
          getCities(),
          getCategories(),
        ]);

        // businesses
        if (businessRes.remote === RemoteStatus.Success) {
          setBusinesses(businessRes.data.results.map(mapBusinessToUI));
        }

        // cities
        if (cityRes.remote === RemoteStatus.Success) {
          setCities((cityRes.data as {results: any}).results);
        }

        // categories
        if (categoryRes.remote === RemoteStatus.Success) {
          setCategories(categoryRes.data as any[]);
        }
      } catch (err) {
        console.error("Init load error", err);
      }

      setLoading(false);
    };

    initLoad();
  }, []);

  /* ⭐ SEARCH / FILTER API */
  const fetchBusinesses = async (filters?: any) => {
    const res = await getFeaturedBusinesses(filters);

    if (res.remote === RemoteStatus.Success) {
      setBusinesses(res.data.results.map(mapBusinessToUI));
    }
  };

  const onSearch = async (filters: any) => {
    const isEmpty =
      !filters.search &&
      !filters.category &&
      !filters.city;

    if (isEmpty) {
      fetchBusinesses(); // reset list
    } else {
      fetchBusinesses(filters);
    }
  };

  if (loading) {
    return (
      <Typography align="center" sx={{ mt: 5 }}>
        Loading businesses...
      </Typography>
    );
  }

  return (
    <Box className="pageColor" sx={{ py: 5 }}>
      {/* HEADER */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2">
          <span style={{ WebkitTextFillColor: "#020817", paddingRight: 10 }}>
            Explore Local
          </span>
          Businesses
        </Typography>

        <Typography variant="h6" sx={{ color: "#64748B", my: 3 }}>
          Discover amazing local businesses in your area with exclusive discounts.
        </Typography>
      </Box>

      {/* ⭐ FILTER BAR */}
      <JobFilterSection
        cities={cities}
        categories={categories}
        onSearch={onSearch}
      />

      {/* GRID */}
      <Grid container spacing={2}>
        {businesses.map((item) => (
          <Grid size={{ xs: 12, md: 4 }} key={item.id}>
            <Box className="customCardShadow" sx={{ boxShadow:"0px 1px 36.9px 0px #6A6A6A40", minHeight:250 }}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">{item.title}</Typography>
                <ClickableBox nextPageUrl={`/gallery?id=${item.id}`}>
                  <CostumeButton className="successBtn">
                    More details
                  </CostumeButton>
                </ClickableBox>
              </Box>

              <Typography variant="h6" color="#64748B">{item.category}</Typography>
              <Typography variant="h5" fontSize={16} mt={1}>{item.discount}</Typography>

              <Box mt={2}>
                <Stack rowGap={1}>
                  <Stack direction="row" spacing={1}>
                    <RoomIcon fontSize="small" sx={{ color:"#64748B" }} />
                    <Typography variant="h6" sx={{ color:"#64748B" }}>
                      <WordLimitText text={item.address} />
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <LocalPhoneIcon fontSize="small" sx={{ color:"#64748B" }} />
                    <Typography variant="h6" sx={{ color:"#64748B" }}>
                      {item.phone}
                    </Typography>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <AccessTimeIcon fontSize="small" sx={{ color:"#64748B" }} />
                    <Typography variant="h6" sx={{ color:"#64748B" }}>
                      {item.time}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
