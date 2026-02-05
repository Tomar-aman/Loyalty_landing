"use client";
import { Typography, Grid, Card, CardMedia } from "@mui/material";

export interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  if (!images.length) return null;

  return (
    <>
      <Typography variant="h3" sx={{ mt:5, mb:2, fontSize:24 }}>
        Gallery
      </Typography>

      <Grid container spacing={0}>
        {images.map((img, index) => (
          <Grid key={index} size={{ xs:12, md:3 }}>
            <Card sx={{ boxShadow:"none" }}>
              <CardMedia
                component="img"
                src={img}
                alt={`Gallery ${index}`}
                sx={{ height:230, objectFit:"cover" }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
