import Image from "next/image";
import CostumeButton from "../button";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import IMAGES from "@/app/assets/images";
import SVGICON from "@/app/assets/svg/icon";

interface TopBannerProps {
  banner_title?: string;
  banner_description?: string;
  banner_image?: string | null;
}

export default function Topbanner({
  banner_title,
  banner_description,
  banner_image,
}: TopBannerProps) {
  return (
    <Box
      sx={{
        background: "linear-gradient(122.01deg, #0000FF 0%, #BB33FF 100%)",
        height: "600px",
        padding: "50px 100px",
      }}
    >
      <Grid
        container
        rowSpacing={1.5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ pt: 3 }}
        alignItems="center"
      >
        {/* LEFT CONTENT */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack rowGap={3}>
            <Typography variant="h1">
              {banner_title ?? (
                <>
                  The only app you need <br />
                  <span
                    style={{
                      background: "none",
                      WebkitBackgroundClip: "unset",
                      WebkitTextFillColor: "#FFFFFF",
                    }}
                  >
                    for effortless saving
                  </span>
                </>
              )}
            </Typography>

            <Typography variant="h6">
              {banner_description || "Discover coupons and deals designed to match your shopping needs, helping you save more every day."}
            </Typography>

            <CostumeButton
              className="primaryBtn"
              stylesRest={{ width: "fit-content !important" }}
              endIcon={<SVGICON.Arrowup />}
              onClick={() => {
                const footer = document.getElementById("footer");
                footer?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start Planning
            </CostumeButton>

            {/* Downloads Section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ display: "flex" }}>
                {[IMAGES.Users].map((img, index) => (
                  <Avatar
                    key={index}
                    src={img.src}
                    sx={{
                      width: "auto",
                      height: 42,
                      ml: index === 0 ? 0 : -1.8,
                      zIndex: index === 0 ? 2 : 1,
                      borderRadius: "0",
                    }}
                  />
                ))}
              </Box>

              <Stack spacing={0.3}>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: 1.2,
                  }}
                >
                  1K+ Downloads
                </Typography>
                <Typography
                  sx={{ color: "#EDEDED", fontSize: "14px", lineHeight: 1.2 }}
                >
                  Trusted by awesome customers!
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Grid>

        {/* RIGHT IMAGE */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Image
            src={banner_image ? banner_image : IMAGES.Homebanner}
            alt="Home Banner"
            width={500}
            height={500}
            style={{ borderRadius: "100%",objectFit: "cover" }}
            unoptimized
          />
        </Grid>
      </Grid>
    </Box>
  );
}
