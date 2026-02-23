"use client";
import { Grid, Typography, Box, Stack } from "@mui/material";
import CostumeButton from "../button";
import CustomTabs from "../tabs/tab";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ClickableBox from "../router";
import { BusinessItem } from "@/services/types.";
import { FC, useMemo } from "react";
import dynamic from "next/dynamic";
import WordLimitText from "../wordLimit/limit";
import JobFilterSection from "./SearchFilter";

type BusinessMapProps = {
  businesses: BusinessItem[];
};

const BusinessMap = dynamic<BusinessMapProps>(
  () =>
    import("./businessMap").then((mod) => mod.default as FC<BusinessMapProps>),
  { ssr: false },
);

/* ---------- UI TYPE ---------- */
interface UIBusiness {
  id: number | string;
  title: string;
  category: string;
  discount: string;
  logo: string;
  address: string;
  phone_number: string;
  opening_time: string;
}

/* ---------- PROPS ---------- */
interface ExploreBusinessProps {
  title?: string;
  description?: string;
  businesses?: BusinessItem[];
  cities?: any[];
  categories?: any[];
  onSearch?: (filters: any) => void;
}

/* ---------- FALLBACK ---------- */
// const fallbackData: UIBusiness[] = [
//   {
//     id: "fallback",
//     title: "Bella Vista Restaurant",
//     category: "Restaurant",
//     discount: "Discount Available",
//     address: "123 Main Street",
//     phone_number: "(555) 123-4567",
//     opening_time: "9:00 AM - 10:00 PM",
//   },
// ];

/* ---------- MAPPER ---------- */
const mapBusinessToUI = (item: BusinessItem): UIBusiness => ({
  id: item.id,
  title: item.name,
  category: item.category?.name ?? "Business",
  discount: item.discount_text ?? "Special discounts available",
  address: item.address ?? "Address not available",
  logo: item.logo ?? "",
  phone_number: item.phone_number ?? "N/A",
  opening_time:
    item.opening_time && item.closing_time
      ? `${item.opening_time} - ${item.closing_time}`
      : "Timings not available",
});

export default function ExploreBusiness({
  title,
  description,
  businesses = [],
  cities = [],
  categories = [],
  onSearch,
}: ExploreBusinessProps) {
  /* ---------- GRID DATA ---------- */
  const cardData: UIBusiness[] = useMemo(() => {
    if (!Array.isArray(businesses)) return [];

    return businesses.slice(0, 3).map(mapBusinessToUI);
  }, [businesses]);

  return (
    <>
      {/* ---------- SECTION HEADER ---------- */}
      {(title || description) && (
        <Box textAlign="center" id="business">
          {title && <Typography variant="h2">{title}</Typography>}
          {description && (
            <Typography variant="h6" color="#64748B" mt={2}>
              {description}
            </Typography>
          )}
        </Box>
      )}

      <JobFilterSection
        cities={cities}
        categories={categories}
        onSearch={onSearch}
      />
      <CustomTabs
        tabLabels={["Grid View", "Map View"]}
        tabContents={[
          /* ---------- GRID VIEW ---------- */
          <Grid container spacing={2} sx={{ pt: 3 }} key="grid">
            {cardData.map((item) => (
              <Grid size={{ xs: 12, md: 4 }} key={item.id}>
                <Box
                  className="customCardShadow"
                  sx={{
                    boxShadow: "0px 1px 36.9px 0px #6A6A6A40",
                    minHeight: "300px !important",
                  }}
                >
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h3">{item.title}</Typography>
                    <ClickableBox nextPageUrl={`/gallery?id=${item.id}`}>
                      <CostumeButton className="successBtn">
                        More details
                      </CostumeButton>
                    </ClickableBox>
                  </Box>

                  <Typography variant="h6" color="#64748B" mt={0.3}>
                    {item.category}
                  </Typography>

                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      variant="h5"
                      fontSize={16}
                      mt={1}
                      color="#020817"
                      sx={{
                        "@media (max-width: 600px)": {
                        fontSize:"16px"
                        },
                      }}
                    >
                      {item.discount}
                    </Typography>

                    {item.logo && (
                      <Box
                        component="img"
                        src={item.logo}
                        alt="logo"
                        sx={{
                          height: "80px",
                          width: "80px",
                          borderRadius: "4px",
                        }}
                      />
                    )}
                  </Stack>

                  <Box mt={2}>
                    <Stack rowGap={1}>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems={"flex-start"}
                      >
                        <RoomIcon
                          fontSize="small"
                          sx={{
                            color: "#64748B",
                            position: "relative",
                            top: 4,
                          }}
                        />
                        <Typography variant="h6" sx={{ color: "#64748B" }}>
                          <WordLimitText text={item.address} wordLimit={12} />
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={1}>
                        <LocalPhoneIcon
                          fontSize="small"
                          sx={{
                            color: "#64748B",
                            position: "relative",
                            top: 4,
                          }}
                        />
                        <Typography variant="h6" sx={{ color: "#64748B" }}>
                          {item.phone_number}
                        </Typography>
                      </Stack>

                      <Stack direction="row" alignItems="center" spacing={1}>
                        <AccessTimeIcon
                          fontSize="small"
                          sx={{
                            color: "#64748B",
                            position: "relative",
                            top: 3,
                          }}
                        />
                        <Typography variant="h6" sx={{ color: "#64748B" }}>
                          {item.opening_time}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>,

          /* ---------- MAP VIEW ---------- */
          <Grid container sx={{ pt: 3 }} key="map">
            <Grid size={{ xs: 12 }}>
              {businesses.length > 0 ? (
                <BusinessMap businesses={businesses} />
              ) : (
                <Typography textAlign="center" color="text.secondary">
                  No locations available
                </Typography>
              )}
            </Grid>
          </Grid>,
        ]}
      />

      {/* ---------- VIEW ALL ---------- */}
      <Box my={3} display="flex" justifyContent="center">
        <ClickableBox nextPageUrl="/explore-businesses">
          <CostumeButton className="primaryBtn">View all</CostumeButton>
        </ClickableBox>
      </Box>
    </>
  );
}

/* ---------- HELPER ---------- */
const InfoRow = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <Box display="flex" alignItems="center" gap={1} mb={0.6} color="#64748B">
    {icon}
    <Typography variant="h6" color="#64748B">
      {text}
    </Typography>
  </Box>
);
