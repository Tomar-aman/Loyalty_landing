"use client";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import Topbanner from "../components/home-comp/topbanner";
import ExploreBusiness from "../components/home-comp/exploreBusiness";
import AdvantageCard from "../components/home-comp/advantageCard";
import FrequentlyQuestions from "../components/home-comp/frequentlyQuestions";
import HowItWorks from "../components/home-comp/howItWorks";
import LatestNewsUpdates from "../components/home-comp/latestNewsUpdates";
import GetInTouch from "../components/home-comp/getInTouch";

import { getLandingPageContent } from "../api/home";
import { LandingPageContent } from "@/services/types.";
import { RemoteStatus } from "../api/types";
//import { LandingPageContent, RemoteStatus } from "../../services/types";

const Landing = () => {
  const [data, setData] = useState<LandingPageContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLandingContent = async () => {
      setLoading(true);
      const res = await getLandingPageContent();

      if (res.remote === RemoteStatus.Success) {
        setData(res.data);
      } else {
        console.error("Landing API error:", res.error);
      }

      setLoading(false);
    };

    fetchLandingContent();
  }, []);

  if (loading) {
    return (
      <Typography align="center" sx={{ mt: 4 }}>
        Loading...
      </Typography>
    );
  }

  if (!data) return null;

  return (
    <>
      {/* Top Banner */}
      <Topbanner
        title={data.banner_title}
        description={data.banner_description}
        image={data.banner_image}
      />

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
            {data.business_section_description}
          </Typography>
        </Box>

        <Stack spacing={4}>
          <ExploreBusiness
            title={data.business_section_title}
            description={data.business_section_description}
          />

          <AdvantageCard
            title={data.card_section_title}
            description={data.card_section_description}
            image={data.card_section_image}
          />

          <HowItWorks />

          <LatestNewsUpdates
            title={data.news_section_title}
            description={data.news_section_description}
          />

          <GetInTouch />

          {/* <FrequentlyQuestions
            title={data.faq_section_title}
            description={data.faq_section_description}
            faqs={[]} // plug real FAQ API data later
          /> */}
        </Stack>
      </Box>
    </>
  );
};

Landing.showHeader = true;
export default Landing;
