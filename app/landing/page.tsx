import { Box, Stack, Typography } from "@mui/material";
import Topbanner from "../components/home-comp/topbanner";
import ExploreBusiness from "../components/home-comp/exploreBusiness";
import AdvantageCard from "../components/home-comp/advantageCard";
import FrequentlyQuestions from "../components/home-comp/frequentlyQuestions";
import HowItWorks from "../components/home-comp/howItWorks";
import LatestNewsUpdates from "../components/home-comp/latestNewsUpdates";
import GetInTouch from "../components/home-comp/getInTouch";

const Landing = () => {
  return (
    <>
      <Topbanner />
      <Box className="pageColor">
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
        
        <Stack spacing={4}>
          <ExploreBusiness />
          <AdvantageCard />
          <HowItWorks />
          <LatestNewsUpdates />
          <GetInTouch />
          <FrequentlyQuestions />
        </Stack>
      </Box>
    </>
  );
};

Landing.showHeader = true;
export default Landing;
