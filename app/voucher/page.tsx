import { Grid, Typography, Box, Card } from "@mui/material";
import CostumeButton from "../components/button";

export default function Voucher() {
  const offers = [
    {
      title: "20% Off",
      description: "Get 20 Percent Off!",
      expiry: "2/28/2026",
    },
    {
      title: "Flat 50% Off",
      description: "Special Weekend Offer",
      expiry: "3/15/2026",
    },
    {
      title: "20% Off",
      description: "Get 20 Percent Off!",
      expiry: "2/28/2026",
    },
    {
      title: "Flat 50% Off",
      description: "Special Weekend Offer",
      expiry: "3/15/2026",
    },
    {
      title: "20% Off",
      description: "Get 20 Percent Off!",
      expiry: "2/28/2026",
    },
    {
      title: "Flat 50% Off",
      description: "Special Weekend Offer",
      expiry: "3/15/2026",
    },
  ];

  return (
    <Box className="pageColor" sx={{ py: 5 }}>
      <Box textAlign={"center"}>
        <Typography variant="h2">
          <span
            style={{
              background: "none",
              WebkitBackgroundClip: "unset",
              WebkitTextFillColor: "#020817",
              paddingRight: "10px",
            }}
          ></span>
          Voucher
        </Typography>
        <Typography variant="h6" sx={{ color: "#64748B", mb: 4 ,mt:2}}>
          Discover amazing local voucher in your area with exclusive
          discounts.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {offers.map((offer, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card
              sx={{
                borderRadius: "16px",
                p: 3,
                position: "relative",
                background:
                  "linear-gradient(116.79deg, #7C3BED 0%, #FFC105 100%)",
                color: "#fff",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
            >
              {/* Title */}
              <Typography fontWeight={700} fontSize={22}>
                {offer.title}
              </Typography>

              {/* Description */}
              <Typography mt={1}>{offer.description}</Typography>

              {/* Expiry */}
              <Typography fontSize={14} mt={0.5}>
                Valid until {offer.expiry}
              </Typography>

              {/* Button */}
              <Box mt={3}>
                <CostumeButton className="lavenderBtn">
                  Redeem Now
                </CostumeButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
