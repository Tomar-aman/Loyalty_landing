import { Grid, Typography, Box, Card, Stack } from "@mui/material";
import CostumeButton from "../button";
import ClickableBox from "../router";

export default function VoucherComp() {
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
      title: "60% Off",
      description: "Get 20 Percent Off!",
      expiry: "2/28/2026",
    },
  ];

  return (
    <Box>
      <Typography variant="h2" mb={5} textAlign={"center"}>
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
        <Stack sx={{ margin: "auto", mt: 3 }}>
          <ClickableBox nextPageUrl="/voucher">
            <CostumeButton className="primaryBtn">View all</CostumeButton>
          </ClickableBox>
        </Stack>
      </Grid>
    </Box>
  );
}
