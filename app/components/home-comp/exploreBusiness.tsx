import { Grid, Typography, Box } from "@mui/material";
import CostumeButton from "../button";
import CustomTabs from "../tabs/tab";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BusinessMap from "./businessMap";
import ClickableBox from "../router";

/* ---------- TYPES ---------- */
export interface BusinessItem {
  title: string;
  category: string;
  discount: string;
  address: string;
  phone: string;
  time: string;
}

interface ExploreBusinessProps {
  title?: string;
  description?: string;
  businesses?: BusinessItem[];
}

/* ---------- FALLBACK DATA ---------- */
const fallbackData: BusinessItem[] = [
  {
    title: "Bella Vista Restaurant",
    category: "Restaurant",
    discount: "Discount Text",
    address: "123 Main Street",
    phone: "(555) 123-4567",
    time: "9:00 AM - 10:00 PM",
  },
  {
    title: "Tech Solutions Hub",
    category: "Technology",
    discount: "Discount",
    address: "456 Tech Avenue",
    phone: "(555) 234-5678",
    time: "8:00 AM - 6:00 PM",
  },
  {
    title: "Green Garden Spa",
    category: "Health & Beauty",
    discount: "Discount",
    address: "789 Wellness Way",
    phone: "(555) 345-6789",
    time: "10:00 AM - 8:00 PM",
  },
];

export default function ExploreBusiness({
  title,
  description,
  businesses,
}: ExploreBusinessProps) {
  const cardData = businesses && businesses.length ? businesses : fallbackData;

  return (
    <>
      {/* Section Heading */}
      {(title || description) && (
        <Box textAlign="center">
          {title && <Typography variant="h2">{title}</Typography>}
          {description && (
            <Typography variant="h6" color="#64748B" mt={2}>
              {description}
            </Typography>
          )}
        </Box>
      )}

      <CustomTabs
        tabLabels={["Grid View", "Map View"]}
        tabContents={[
          /* ---------- GRID VIEW ---------- */
          <Grid container spacing={2} sx={{ pt: 3 }} key="grid">
            {cardData.map((item, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Box
                  className="customCardShadow"
                  sx={{ boxShadow: "0px 1px 36.9px 0px #6A6A6A40" }}
                >
                  {/* Header */}
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h3">{item.title}</Typography>
                    <ClickableBox nextPageUrl="/gallery">
                      <CostumeButton className="successBtn">
                        More details
                      </CostumeButton>
                    </ClickableBox>
                  </Box>

                  <Typography variant="h6" color="#64748B" mt={0.3}>
                    {item.category}
                  </Typography>

                  <Typography variant="h5" fontSize={16} mt={1}>
                    {item.discount}
                  </Typography>

                  {/* Details */}
                  <Box mt={2}>
                    <InfoRow icon={<RoomIcon fontSize="small" />} text={item.address} />
                    <InfoRow icon={<LocalPhoneIcon fontSize="small" />} text={item.phone} />
                    <InfoRow icon={<AccessTimeIcon fontSize="small" />} text={item.time} />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>,

          /* ---------- MAP VIEW ---------- */
          <Grid container sx={{ pt: 3 }} key="map">
            <Grid size={{ xs: 12 }}>
              <BusinessMap />
            </Grid>
          </Grid>,
        ]}
      />

      {/* View All */}
      <Box my={3} display="flex" justifyContent="center">
        <ClickableBox nextPageUrl="/explore-businesses">
          <CostumeButton className="primaryBtn">View all</CostumeButton>
        </ClickableBox>
      </Box>
    </>
  );
}

/* ---------- SMALL HELPER COMPONENT ---------- */
const InfoRow = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <Box display="flex" alignItems="center" gap={1} mb={0.6} color="#64748B">
    {icon}
    <Typography variant="h6" color="#64748B">
      {text}
    </Typography>
  </Box>
);
