"use client";
import { Grid, Typography, Box, Card } from "@mui/material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import CostumeButton from "../components/button";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getBusinessDetails } from "../api/home";
import { RemoteStatus } from "../api/types";

const ImageGallery = dynamic(
  () => import("../components/gallery-comp/imageGallery"),
  { ssr: false }
);
const Directions = dynamic(
  () => import("../components/gallery-comp/Directions"),
  { ssr: false }
);
const BusinessMap = dynamic(
  () => import("../components/home-comp/businessMap"),
  { ssr: false }
);

export default function BusinessDetails({ params }: any) {
  const [business, setBusiness] = useState<any>(null);

  /* ---------------- FETCH BUSINESS ---------------- */
  useEffect(() => {
    const fetchData = async () => {
      const res = await getBusinessDetails(params.id);
      if (res.remote === RemoteStatus.Success) {
        setBusiness(res.data);
      }
    };
    fetchData();
  }, [params.id]);

  if (!business) return null;

  /* ---------------- MAP OFFERS ---------------- */
  const offers = (business.offers ?? []).map((offer: any) => ({
    title: offer.title,
    description: offer.description,
    expiry: new Date(offer.end_date).toLocaleDateString(),
  }));

  const galleryImages =
    business.images?.map((img: any) => img.image_url) ?? [];

  return (
    <Box className="pageColor" sx={{ pb: 8 }}>
      
      {/* ---------- HEADER ---------- */}
      <Box textAlign="center" mb={4}>
        {business.logo && (
          <Box mb={2}>
            <img
              src={business.logo}
              alt={business.name}
              style={{ width: 120, borderRadius: 12 }}
            />
          </Box>
        )}

        <Typography variant="h2" sx={{ fontSize: 42, fontWeight: 700 }}>
          {business.name}
        </Typography>

        <Typography
          variant="h6"
          color="#65758B"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <LocationPinIcon />
          {business.address}
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "#65758B", maxWidth: 800, mx: "auto", mt: 1 }}
        >
          {business.description}
        </Typography>
      </Box>

      {/* ---------- CONTACT / DIRECTIONS ---------- */}
      <Directions business={business} />

      {/* ---------- OFFERS ---------- */}
      {offers.length > 0 && (
        <>
          <Typography variant="h3" sx={{ mt: 5, mb: 2, fontSize: 24 }}>
            Available Offers
          </Typography>

          <Grid container spacing={2}>
            {offers.map((offer: any, index: number) => (
              <Grid key={index} size={{ xs: 12, md: 6 }}>
                <Card
                  sx={{
                    borderRadius: 4,
                    p: 3,
                    background:
                      "linear-gradient(116.79deg, #7C3BED 0%, #FFC105 100%)",
                    color: "#fff",
                  }}
                >
                  <CalendarMonthRoundedIcon
                    sx={{ position: "absolute", top: 16, right: 16 }}
                  />

                  <Typography fontWeight={700} fontSize={22}>
                    {offer.title}
                  </Typography>

                  <Typography mt={1}>{offer.description}</Typography>

                  <Typography fontSize={14}>
                    Valid until {offer.expiry}
                  </Typography>

                  <Box textAlign="end" mt={2}>
                    <CostumeButton className="lavenderBtn">
                      Redeem Now
                    </CostumeButton>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {/* ---------- GALLERY ---------- */}
      {galleryImages.length > 0 && <ImageGallery images={galleryImages} />}

      {/* ---------- MAP ---------- */}
      <Box mt={3}>
        <Typography variant="h3" sx={{ mt: 5, mb: 2, fontSize: 24 }}>
          Location
        </Typography>

        <BusinessMap
          businesses={[
            {
              id: business.id,
              name: business.name,
              latitude: business.latitude,
              longitude: business.longitude,
              address: business.address,
            },
          ]}
        />
      </Box>
    </Box>
  );
}
