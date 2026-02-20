"use client";

import { Grid, Typography, Box, Card, Stack } from "@mui/material";
import CostumeButton from "../button";
import ClickableBox from "../router";

interface VoucherCompProps {
  offers: any[];
}

export default function VoucherComp({ offers = [] }: VoucherCompProps) {
  //console.log(offers, "offersggg");
  return (
    <Box>
      {/* Title */}
      <Typography variant="h2" mb={5} textAlign="center">
        Voucher
      </Typography>

      {/* No offers state */}
      {offers.length === 0 && (
        <Typography textAlign="center" color="text.secondary">
          No offers available
        </Typography>
      )}

      <Grid container spacing={3}>
        {offers.map((offer: any) => (
          <Grid size={{ xs: 12, md: 4 }} key={offer.id}>
            <Card
              sx={{
                borderRadius: "16px",
                p: 3,
                background:
                  "linear-gradient(116.79deg, #7C3BED 0%, #FFC105 100%)",
                color: "#fff",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
            >
              {/* Title */}
              <Typography fontWeight={700} fontSize={22}>
                {offer.title || offer.name}
              </Typography>

              {/* Description */}
              <Typography mt={1}>
                {offer.description || offer.short_description}
              </Typography>

              {/* Expiry */}
              <Typography fontSize={14} mt={0.5}>
                Valid until {offer.expiry_date || offer.valid_till}
              </Typography>

              {/* Button */}
              <Box mt={3}>
                <CostumeButton className="lavenderBtn"
                 onClick={() => {
                    const footer = document.getElementById("footer");
                    footer?.scrollIntoView({ behavior: "smooth" });
                  }}
                  >
                  Redeem Now
                </CostumeButton>
              </Box>
            </Card>
          </Grid>
        ))}

        {/* View all button */}
        {offers.length > 0 && (
          <Grid size={{ xs: 12 }}>
            <Stack alignItems="center" mt={3}>
              <ClickableBox nextPageUrl="/voucher">
                <CostumeButton className="primaryBtn">
                  View all
                </CostumeButton>
              </ClickableBox>
            </Stack>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
