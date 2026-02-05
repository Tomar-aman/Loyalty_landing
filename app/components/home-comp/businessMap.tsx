"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { Box, Card, Typography, Button, Stack } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsIcon from "@mui/icons-material/Directions";
import L from "leaflet";

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
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

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
                <Card sx={{ width: 260, p: 2, borderRadius: 3 }}>
                  <Typography fontWeight="bold">{b.name}</Typography>

                  <Typography variant="body2" sx={{ mt: 1 }}>
                    📍 {b.address}
                  </Typography>

                  {/* OFFER */}
                  {b.offers?.[0]?.title && (
                    <Button
                      fullWidth
                      size="small"
                      sx={{
                        mt: 1,
                        background: "#c8a5ff",
                        color: "white",
                        textTransform: "none",
                      }}
                    >
                      {b.offers[0].title}
                    </Button>
                  )}

                  {/* ACTION BUTTONS */}
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="space-between"
                    sx={{ mt: 2 }}
                  >
                    {b.phone_number && (
                      <Button
                        size="small"
                        startIcon={<CallIcon />}
                        href={`tel:${b.phone_number}`}
                      >
                        Call
                      </Button>
                    )}

                    {b.email && (
                      <Button
                        size="small"
                        startIcon={<EmailIcon />}
                        href={`mailto:${b.email}`}
                      >
                        Email
                      </Button>
                    )}

                    <Button
                      size="small"
                      startIcon={<DirectionsIcon />}
                      href={`https://www.google.com/maps?q=${b.latitude},${b.longitude}`}
                      target="_blank"
                    >
                      Direction
                    </Button>
                  </Stack>
                </Card>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </Box>
  );
}
