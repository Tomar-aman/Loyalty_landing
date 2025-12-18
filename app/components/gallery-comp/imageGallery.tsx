import IMAGES from "@/app/assets/images";
import { Typography, Grid, Card, CardMedia } from "@mui/material";
import React from "react";

export default function ImageGallery() {
  const images = [
    IMAGES.Gallery1,
    IMAGES.Gallery2,
    IMAGES.Gallery3,
    IMAGES.Gallery4,
    IMAGES.Gallery5,
    IMAGES.Gallery6,
    IMAGES.Gallery7,
    IMAGES.Gallery3,
  ];
  return (
    <div>
      <Typography variant="h3" sx={{ mt: 5, mb: 2, fontSize: "24px" }}>
        Gallery
      </Typography>

      <Grid container spacing={0}>
        {images.map((img, index) => (
          <Grid key={index} size={{ xs: 12, md: 3 }}>
            <Card sx={{ boxShadow: "none", borderRadius: 0 }}>
              <CardMedia
                component="img"
                src={img.src}
                alt={`Gallery Image ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "230px",
                  objectFit: "cover",
                  borderRadius: 0,
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
