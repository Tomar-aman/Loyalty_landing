import { Grid, Typography, Box } from "@mui/material";
import CostumeButton from "../button";
import CustomTabs from "../tabs/tab";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BusinessMap from "./businessMap";
import ClickableBox from "../router";

export default function ExploreBusiness() {
  const cardData = [
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
    {
      title: "Urban Coffee Co.",
      category: "Café",
      discount: "Discount",
      address: "321 Coffee Street",
      phone: "(555) 456-7890",
      time: "6:00 AM - 9:00 PM",
    },
    {
      title: "Elite Automotive",
      category: "Automotive",
      discount: "Discount",
      address: "654 Auto Lane",
      phone: "(555) 567-8901",
      time: "7:00 AM - 7:00 PM",
    },
    {
      title: "Fashion Forward",
      category: "Retail",
      discount: "Discount",
      address: "987 Style Boulevard",
      phone: "(555) 678-9012",
      time: "10:00 AM - 9:00 PM",
    },
  ];

  return (
    <>
      <CustomTabs
        tabLabels={["Grid View ", "Map View"]}
        tabContents={[
          <Grid container spacing={2} sx={{ pt: 3 }} key="1">
            {cardData.map((item, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Box
                  className="customCardShadow"
                  sx={{ boxShadow: "0px 1px 36.9px 0px #6A6A6A40" }}
                >
                  {/* Title */}
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
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

                  <Typography
                    variant="h5"
                    fontSize={"16px"}
                    color="#020817"
                    mt={1}
                  >
                    {item.discount}
                  </Typography>

                  {/* Details */}
                  <Box mt={2}>
                    <Box
                      display="flex"
                      alignItems="center"
                      mb={0.6}
                      gap={1}
                      color="#64748B"
                    >
                      <RoomIcon fontSize="small" />
                      <Typography variant="h6" color="#64748B">
                        {item.address}
                      </Typography>
                    </Box>

                    <Box
                      display="flex"
                      alignItems="center"
                      mb={0.6}
                      gap={1}
                      color="#64748B"
                    >
                      <LocalPhoneIcon fontSize="small" />
                      <Typography variant="h6" color="#64748B">
                        {item.phone}
                      </Typography>
                    </Box>

                    <Box
                      display="flex"
                      alignItems="center"
                      gap={1}
                      color="#64748B"
                    >
                      <AccessTimeIcon fontSize="small" />
                      <Typography variant="h6" color="#64748B">
                        {item.time}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>,
          <Grid
            container
            rowSpacing={1.5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ pt: 3 }}
            key="2"
          >
            <Grid size={{ xs: 12, md: 12 }}>
              <BusinessMap />
            </Grid>
          </Grid>,
        ]}
      />
      {/* View All Button (Only once) */}
      <Box my={3} display="flex" justifyContent="center">
        <ClickableBox nextPageUrl="/explore-businesses">
        <CostumeButton className="primaryBtn">View all</CostumeButton>
        </ClickableBox>
      </Box>
    </>
  );
}
