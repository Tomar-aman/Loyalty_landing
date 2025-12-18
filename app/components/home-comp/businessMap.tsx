"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { Box, Card, Typography, Button, Stack } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsIcon from "@mui/icons-material/Directions";
import L from "leaflet";

// Dynamically load React-Leaflet (fixes Next.js SSR issues)
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

const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Custom Marker Icon (Red Pin)
const redPin = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

// Sample Business Data
const restaurants = [
  {
    id: 1,
    name: "Bella Vista Restaurant",
    type: "Italian Restaurant",
    location: "123 Main St",
    position: [45.75, -1.15] as [number, number],
  },
  {
    id: 2,
    name: "La Roma",
    type: "Italian Restaurant",
    location: "42 Hill St",
    position: [45.8, -0.95] as [number, number],
  },
];

export default function BusinessMap() {
  return (
    <Box sx={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={[45.7, -0.9]}
        zoom={9}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {restaurants.map((r) => (
          <Marker key={r.id} position={r.position} icon={redPin}>
            <Popup>
              <Card
                sx={{
                  width: 260,
                  padding: 2,
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {r.name}
                </Typography>

                <Typography variant="body2" color="primary">
                  {r.type}
                </Typography>

                <Typography variant="body2" sx={{ mt: 1 }}>
                  📍 {r.location}
                </Typography>

                <Button
                  fullWidth
                  size="small"
                  sx={{
                    mt: 2,
                    background: "#e0d7ff",
                    color: "#6a1bff",
                    borderRadius: 2,
                    textTransform: "none",
                  }}
                >
                  More details
                </Button>

                <Button
                  fullWidth
                  size="small"
                  sx={{
                    mt: 1,
                    background: "#c8a5ff",
                    color: "white",
                    borderRadius: 2,
                    textTransform: "none",
                  }}
                >
                  20% off dinner
                </Button>

                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="space-between"
                  sx={{ mt: 2 }}
                >
                  <Button
                    size="small"
                    startIcon={<CallIcon />}
                    sx={{ textTransform: "none" }}
                  >
                    Call
                  </Button>

                  <Button
                    size="small"
                    startIcon={<EmailIcon />}
                    sx={{ textTransform: "none" }}
                  >
                    Email
                  </Button>

                  <Button
                    size="small"
                    startIcon={<DirectionsIcon />}
                    sx={{ textTransform: "none" }}
                  >
                    Direction
                  </Button>
                </Stack>
              </Card>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
}
