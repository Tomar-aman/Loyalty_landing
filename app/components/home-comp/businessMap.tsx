"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { Box, Card, Typography, Button, Stack } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsIcon from "@mui/icons-material/Directions";
import L from "leaflet";
import SVG from "@/app/assets/svg";
import Image from "next/image";
import IMAGES from "@/app/assets/images";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import CostumeButton from "../button";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ClickableBox from "../router";

/* ---------- TYPES ---------- */
interface BusinessMapProps {
  businesses: {
    id: number | string;
    name: string;
    latitude: string | number;
    longitude: string | number;
    address?: string;
    phone_number?: string;
    email?: string;
    offers?: { title: string }[];
  }[];
}

/* ---------- LEAFLET DYNAMIC IMPORTS ---------- */
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false },
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false },
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

/* ---------- CUSTOM MARKER ---------- */
const redPin = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

export default function BusinessMap({ businesses }: BusinessMapProps) {
  /* अगर कोई business नहीं है */
  if (!businesses || businesses.length === 0) {
    return <Typography textAlign="center">No locations found</Typography>;
  }

  const center: [number, number] = [
    Number(businesses[0].latitude),
    Number(businesses[0].longitude),
  ];

  return (
    <Box sx={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {businesses.map((b) => {
          const position: [number, number] = [
            Number(b.latitude),
            Number(b.longitude),
          ];

          return (
            <Marker key={b.id} position={position} icon={redPin}>
              <Popup>
                <Stack direction={"row"} spacing={1}>
                  <Box>
                    <Image src={IMAGES.MapImage} alt="map" />
                  </Box>
                  <Box className="mapContent">
                    <Typography
                      sx={{
                        fontSize: "16px !important",
                        color: "#020817 !important",
                        fontWeight: "700 !important",
                      }}
                    >
                      {b.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px !important",
                        color: "#7C3BED !important",
                        fontWeight: "500 !important",
                      }}
                    >
                      Italian Restaurant
                    </Typography>
                    <Typography
                      fontWeight="h4"
                      sx={{
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        color: "#65758B",
                      }}
                    >
                      <LocationPinIcon sx={{ color: "#65758B" }} />
                      {b.address}
                    </Typography>

                    <ClickableBox nextPageUrl="/explore-businesses">
                      <Box
                        sx={{
                          color: "#7C3BED",
                          background: "#F0F0FF ",
                          height: "29px ",
                          padding: "12px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderRadius: "100px",
                          "@media (max-width: 600px)": {
                            width: "60% !important",
                          },
                        }}
                      >
                        More details
                        <ChevronRightOutlinedIcon />
                      </Box>
                    </ClickableBox>

                    {/* OFFER */}
                    {b.offers?.[0]?.title && (
                      <Box
                        sx={{
                          mt: 1,
                          color: "white",
                          textAlign: "left",
                          p: 1,
                          background:
                            "linear-gradient(100.61deg, #7C3BED 0%, #B366FF 100%)",
                          borderRadius: "6px",
                          fontWeight: "600",
                          "@media (max-width: 600px)": {
                            width: "60% !important",
                          },
                        }}
                      >
                        {b.offers[0].title} off dinner
                      </Box>
                    )}

                    {/* ACTION BUTTONS */}
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="space-between"
                      sx={{
                        mt: 2,
                        "@media (max-width: 600px)": {
                          marginLeft: "-90px !important",
                        },
                      }}
                    >
                      {b.phone_number && (
                        <CostumeButton
                          className="inheritCssComonBtn"
                          stylesRest={{
                            border: "1px solid #F0F0FF !important",
                            color: "#007F13 !important",
                            background: "#F5F5FF !important",
                            height: "26px !important",
                            padding: "12px !important",
                          }}
                          startIcon={<CallIcon sx={{ color: "#007F13" }} />}
                          href={`tel:${b.phone_number}`}
                        >
                          Call
                        </CostumeButton>
                      )}

                      {b.email && (
                        <CostumeButton
                          className="inheritCssComonBtn"
                          stylesRest={{
                            border: "1px solid #F0F0FF !important",
                            color: "#7C3BED !important",
                            background: "#F5F5FF !important",
                            height: "26px !important",
                            padding: "12px !important",
                          }}
                          startIcon={<EmailIcon sx={{ color: "#7C3BED" }} />}
                          href={`mailto:${b.email}`}
                        >
                          Email
                        </CostumeButton>
                      )}

                      <Button
                        sx={{
                          border: "1px solid #F0F0FF !important",
                          color: "#7C3BED !important",
                          background: "#F5F5FF !important",
                          height: "26px !important",
                          padding: "12px !important",
                          boxShadow: "none",
                          borderRadius: "10px",
                        }}
                        startIcon={<DirectionsIcon sx={{ color: "#7C3BED" }} />}
                        href={`https://www.google.com/maps?q=${b.latitude},${b.longitude}`}
                        target="_blank"
                      >
                        Direction
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </Box>
  );
}
