"use client";

import { Grid, Typography, Box } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CostumeButton from "../components/button";
import { useEffect, useState } from "react";

import { getFeaturedBusinesses } from "../api/home";
import { RemoteStatus } from "../api/types";
import { BusinessItem } from "@/services/types.";
import ClickableBox from "../components/router";

interface UIBusiness {
  id: number;
  title: string;
  category: string;
  discount: string;
  address: string;
  phone: string;
  time: string;
}
interface ApiResponse {
  remote: RemoteStatus;
  data: {
    results: BusinessItem[];
  };
}
/* ⭐ API → UI MAPPER */
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
  const [loading, setLoading] = useState(true);

  /* ⭐ CALL API */
  useEffect(() => {
    const fetchBusinesses = async () => {
      const res = await getFeaturedBusinesses();

      if (res.remote === RemoteStatus.Success) {
        const mapped = res.data.results.map(mapBusinessToUI as (item: BusinessItem) => UIBusiness);
        setBusinesses(mapped);
      } else {
        console.error("Business API error", res.error);
      }

      setLoading(false);
    };

    fetchBusinesses();
  }, []);

  /* ⭐ LOADING STATE */
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

      {/* GRID */}
      <Grid container spacing={2}>
        {businesses.map((item) => (
          <Grid size={{ xs: 12, md: 4 }} key={item.id}>
            <Box className="customCardShadow">
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3">{item.title}</Typography>
                <ClickableBox nextPageUrl={`/gallery?id=${item.id}`}>
                      <CostumeButton className="successBtn">
                        More details
                      </CostumeButton>
                    </ClickableBox>
              </Box>

              <Typography variant="h6" color="#64748B">
                {item.category}
              </Typography>

              <Typography variant="h5" fontSize={16} mt={1}>
                {item.discount}
              </Typography>

              <Box mt={2}>
                <InfoRow icon={<RoomIcon fontSize="small" />} text={item.address} />
                <InfoRow icon={<LocalPhoneIcon fontSize="small" />} text={item.phone} />
                <InfoRow icon={<AccessTimeIcon fontSize="small" />} text={item.time} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

/* SMALL HELPER */
const InfoRow = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <Box display="flex" alignItems="center" gap={1} mb={0.6}>
    {icon}
    <Typography variant="h6" color="#64748B">
      {text}
    </Typography>
  </Box>
);
