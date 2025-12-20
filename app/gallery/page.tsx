"use client";
import { Grid, Typography, Box, Card } from "@mui/material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CostumeButton from "../components/button";
// import Directions from "../components/gallery-comp/Directions";
// import ImageGallery from "../components/gallery-comp/imageGallery";
// import BusinessMap from "../components/home-comp/businessMap";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import dynamic from "next/dynamic";
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

const offers = [
  {
    title: "20% Off Dinner",
    description: "Valid for dine-in dinner orders over $30",
    expiry: "Dec 31, 2025",
  },
  {
    title: "Free Appetizer",
    description: "Free appetizer with any entree purchase",
    expiry: "Dec 31, 2025",
  },
];

export default function BellaVistaRestaurant() {
  return (
    <Box className="pageColor" sx={{ pb: 8 }}>
      {/* Heading Section */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "42px",
            fontWeight: 700,
            WebkitTextFillColor: "#020817",
          }}
        >
          Bella Vista Restaurant
        </Typography>
        <Typography
          variant="h6"
          color="#65758B"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <LocationPinIcon />
          123 Main St, Downtown
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#65758B",
            fontSize: "20px",
            maxWidth: "800px",
            mx: "auto",
            mt: 1,
          }}
        >
          Authentic Italian cuisine in the heart of downtown. Family-owned
          restaurant serving traditional recipes passed down through
          generations.
        </Typography>
      </Box>

      {/* Contact Info Cards */}
      <Directions />

      {/* -------------------- OFFERS SECTION -------------------- */}
      <Typography variant="h3" sx={{ mt: 5, mb: 2, fontSize: "24px" }}>
        Available Offers
      </Typography>

      <Grid container spacing={2}>
        {offers.map((offer, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                position: "relative",
                borderRadius: "16px",
                p: 3,
                background:
                  "linear-gradient(116.79deg, #7C3BED 0%, #FFC105 100%)",
                boxShadow: "0px 8px 32px 0px #7C3BED29",
                color: "#fff",
              }}
            >
              {/* Top-Right Date Icon */}
              <CalendarMonthRoundedIcon
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  fontSize: 26,
                }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, fontSize: "22px" }}
                >
                  {offer.title}
                </Typography>

                <Typography sx={{ mt: 1, opacity: 0.9 }}>
                  {offer.description}
                </Typography>

                <Typography sx={{ mb: 2, fontSize: "14px", opacity: 0.9 }}>
                  Valid until {offer.expiry}
                </Typography>

                {/* Redeem Button */}
                <Box
                  sx={{
                    borderTop: "1px solid #FFFFFF33",
                    pt: 3,
                    textAlign: "end",
                  }}
                >
                  <CostumeButton
                    className="lavenderBtn"
                    stylesRest={{ width: "294px !important" }}
                  >
                    Redeem Now
                  </CostumeButton>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <ImageGallery />

      <Box mt={3}>
        <Typography variant="h3" sx={{ mt: 5, mb: 2, fontSize: "24px" }}>
          Location
        </Typography>
        <BusinessMap />
      </Box>
    </Box>
  );
}
