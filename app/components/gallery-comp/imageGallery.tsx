// "use client";
// import { Typography, Grid, Card, CardMedia } from "@mui/material";

// export interface ImageGalleryProps {
//   images: string[];
// }

// export default function ImageGallery({ images }: ImageGalleryProps) {
//   if (!images.length) return null;

//   return (
//     <>
//       <Typography variant="h3" sx={{ mt:5, mb:2, fontSize:24 }}>
//         Gallery
//       </Typography>

//       <Grid container spacing={0}>
//         {images.map((img, index) => (
//           <Grid key={index} size={{ xs:12, md:3 }}>
//             <Card sx={{ boxShadow:"none" }}>
//               <CardMedia
//                 component="img"
//                 src={img}
//                 alt={`Gallery ${index}`}
//                 sx={{ height:230, objectFit:"cover" }}
//               />
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </>
//   );
// }


"use client";
import { useState, useCallback, useEffect } from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  Modal,
  Box,
  IconButton,
  Fade,
  Backdrop,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpen = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, handlePrev, handleNext]);

  if (!images.length) return null;

  return (
    <>
      <Typography variant="h3" sx={{ mt: 5, mb: 2, fontSize: 24 }}>
        Gallery
      </Typography>

      <Grid container spacing={0}>
        {images.map((img, index) => (
          <Grid key={index} size={{ xs: 12, md: 3 }}>
            <Card
              sx={{ boxShadow: "none", cursor: "pointer" }}
              onClick={() => handleOpen(index)}
            >
              <CardMedia
                component="img"
                src={img}
                alt={`Gallery ${index}`}
                sx={{
                  height: 230,
                  objectFit: "cover",
                  transition: "opacity 0.2s ease",
                  "&:hover": { opacity: 0.85 },
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Lightbox Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
            sx: { backgroundColor: "rgba(0,0,0,0.82)" },
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              outline: "none",
            }}
          >
            {/* Image Wrapper — all overlays positioned relative to image */}
            <Box
              sx={{
                position: "relative",
                lineHeight: 0,
                borderRadius: 1,
              }}
            >
              {/* Main Image */}
              <Box
                component="img"
                src={images[activeIndex]}
                alt={`Gallery ${activeIndex}`}
                sx={{
                  maxWidth: "100vw",
                  maxHeight: "85vh",
                  objectFit: "contain",
                  borderRadius: 1,
                  display: "block",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
                  "@media (max-width: 600px)": {
                    maxWidth: "95vw",
                  },
                }}
              />

              {/* Counter — top left corner of image */}
              <Box
                sx={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  border: "2px solid #ccc",
                  color: "#ccc",
                  bgcolor: "transparent",
                  px: 1.2,
                  py: 0.3,
                  fontSize: 13,
                  fontWeight: 700,
                  lineHeight: 1.8,
                  userSelect: "none",
                  zIndex: 10,
                  borderRadius: "4px 0 6px 0",
                  "@media (max-width: 600px)": {
                    top: 10,
                    left: 10,
                  },
                }}
              >
                {activeIndex + 1} / {images.length}
              </Box>

              {/* Close Button — top right corner of image */}
              <IconButton
                onClick={handleClose}
                size="small"
                sx={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  zIndex: 10,
                  bgcolor: "#e53935",
                  color: "#fff",
                  width: 36,
                  height: 36,
                  borderRadius: "0 4px 0 6px",
                  "&:hover": { bgcolor: "#c62828" },
                  "@media (max-width: 600px)": {
                    top: 10,
                    right: 10,
                  },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>

              {/* Prev Button — left center of image */}
              {images.length > 1 && (
                <IconButton
                  onClick={handlePrev}
                  size="small"
                  sx={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    bgcolor: "rgba(0,0,0,0.45)",
                    color: "#fff",
                    width: 40,
                    height: 40,
                    "&:hover": { bgcolor: "rgba(0,0,0,0.72)" },
                  }}
                >
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
              )}

              {/* Next Button — right center of image */}
              {images.length > 1 && (
                <IconButton
                  onClick={handleNext}
                  size="small"
                  sx={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    bgcolor: "rgba(0,0,0,0.45)",
                    color: "#fff",
                    width: 40,
                    height: 40,
                    "&:hover": { bgcolor: "rgba(0,0,0,0.72)" },
                  }}
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
