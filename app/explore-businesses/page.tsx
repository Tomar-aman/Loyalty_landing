import { Grid, Typography, Box } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CostumeButton from "../components/button";

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
      <Box className="pageColor" sx={{ py: 5 }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2">
            <span
              style={{
                background: "none",
                WebkitBackgroundClip: "unset",
                WebkitTextFillColor: "#020817",
                paddingRight: "10px",
              }}
            >
              Explore Local
            </span>
            Businesses
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#64748B", my: 3, fontSize: "20px" }}
          >
            Discover amazing local businesses in your area. From restaurants to
            services, find <br /> exactly what you need with exclusive member
            discounts.
          </Typography>
        </Box>
        <Grid container spacing={2}>
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
                  <CostumeButton className="successBtn">
                    More details
                  </CostumeButton>
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
        </Grid>
      </Box>
    </>
  );
}
