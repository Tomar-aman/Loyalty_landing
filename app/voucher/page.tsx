"use client";

import { useEffect, useState } from "react";
import { Grid, Typography, Box, Card, Stack, CircularProgress } from "@mui/material";
import CostumeButton from "../components/button";
import { getOffers } from "../api/home";
import { RemoteStatus } from "../api/types";

interface Offer {
  id: number;
  title: string;
  description: string;
  expiry_date: string;
}

export default function Voucher() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      setLoading(true);

      const res = await getOffers();

      if (res.remote === RemoteStatus.Success) {
        // if API returns paginated response
        setOffers((res.data as { results: Offer[] }).results || []);
      }

      setLoading(false);
    };

    fetchOffers();
  }, []);

  const formatDate = (date: string) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString();
  };

  const isExpired = (date: string) => {
    if (!date) return false;
    return new Date(date) < new Date();
  };

  return (
    <Box className="pageColor" sx={{ py: 6 }}>
      {/* Title */}
      <Box textAlign="center" mb={5}>
        <Typography variant="h2">Voucher</Typography>

        <Typography variant="h6" sx={{ color: "#64748B", mt: 2 }}>
          Discover amazing local vouchers in your area with exclusive discounts.
        </Typography>
      </Box>

      {/* Loading State */}
      {loading && (
        <Stack alignItems="center" mt={4}>
          <CircularProgress />
        </Stack>
      )}

      {/* Empty State */}
      {!loading && offers.length === 0 && (
        <Stack alignItems="center" mt={4}>
          <Typography color="text.secondary">
            No vouchers available at the moment.
          </Typography>
        </Stack>
      )}

      {/* Offers Grid */}
      <Grid container spacing={3}>
        {!loading &&
          offers.map((offer) => {
            const expired = isExpired(offer.expiry_date);

            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={offer.id}>
                <Card
                  sx={{
                    borderRadius: "16px",
                    p: 3,
                    background:
                      "linear-gradient(116.79deg, #7C3BED 0%, #FFC105 100%)",
                    color: "#fff",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    opacity: expired ? 0.7 : 1,
                  }}
                >
                  <Typography fontWeight={700} fontSize={22}>
                    {offer.title}
                  </Typography>

                  <Typography mt={1}>
                    {offer.description}
                  </Typography>

                  {offer.expiry_date && (
                    <Typography fontSize={14} mt={1}>
                      Valid until {formatDate(offer.expiry_date)}
                    </Typography>
                  )}

                  {expired && (
                    <Typography
                      sx={{
                        mt: 1,
                        fontSize: 12,
                        background: "rgba(0,0,0,0.3)",
                        display: "inline-block",
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      Expired
                    </Typography>
                  )}

                  <Box mt={3}>
                    <CostumeButton
                      className="lavenderBtn"
                      disabled={expired}
                      onClick={() => {
                    const footer = document.getElementById("footer");
                    footer?.scrollIntoView({ behavior: "smooth" });
                  }}
                    >
                      {expired ? "Expired" : "Redeem Now"}
                    </CostumeButton>
                  </Box>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}