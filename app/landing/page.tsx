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

import {
  getLandingPageContent,
  getFeaturedBusinesses,
  getNewsItems,
  getCards,
  getFaqs,
  getCities,
  getCategories,
} from "../api/home";

import {
  LandingPageContent,
  FAQItem,
  NewsItem,
  CardPlan,
  BusinessItem,
} from "@/services/types.";

import { RemoteStatus } from "../api/types";
import JobFilterSection from "../components/home-comp/SearchFilter";
import VoucherComp from "../components/home-comp/voucher";

const Landing = () => {
  const [landing, setLanding] = useState<LandingPageContent | null>(null);
  const [businesses, setBusinesses] = useState<BusinessItem[]>([]);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [cards, setCards] = useState<CardPlan[]>([]);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);

      const [
        landingRes,
        businessRes,
        newsRes,
        cardRes,
        faqRes,
        cityRes,
        categoryRes,
      ] = await Promise.all([
        getLandingPageContent(),
        getFeaturedBusinesses(),
        getNewsItems(),
        getCards(),
        getFaqs(),
        getCities(),
        getCategories(),
      ]);

      if (landingRes.remote === RemoteStatus.Success)
        setLanding(landingRes.data as LandingPageContent);

      //console.log(businessRes.data.results);
      if (businessRes.remote === RemoteStatus.Success)
        setBusinesses(businessRes.data.results);

      if (newsRes.remote === RemoteStatus.Success)
        setNews(newsRes.data as NewsItem[]);

      if (cardRes.remote === RemoteStatus.Success)
        setCards(cardRes.data as CardPlan[]);

      if (faqRes.remote === RemoteStatus.Success)
        setFaqs(faqRes.data as FAQItem[]);

      if (cityRes.remote === RemoteStatus.Success)
        setCities(cityRes.data as any[]);

      if (categoryRes.remote === RemoteStatus.Success)
        setCategories(categoryRes.data as any[]);

      setLoading(false);
    };

    fetchAllData();
  }, []);

  const handleBusinessSearch = async (filters: any) => {
  const res = await getFeaturedBusinesses(filters);

  if (res.remote === RemoteStatus.Success) {
    setBusinesses(res.data.results);
  }
};

  if (loading) {
    return (
      <Typography align="center" sx={{ mt: 4 }}>
        Loading...
      </Typography>
    );
  }

  if (!landing) return null;

  return (
    <>
      <Topbanner
        banner_title={landing.banner_title}
        banner_description={landing.banner_description}
        banner_image={landing.banner_image}
      />

      <Box className="pageColor">
        <Stack spacing={4}>
          <ExploreBusiness
            title={landing.business_section_title}
            description={landing.business_section_description}
            businesses={businesses}
            cities={cities}
            categories={categories}
            onSearch={handleBusinessSearch}
          />

          <AdvantageCard
            title={landing.card_section_title}
            description={landing.card_section_description}
            image={landing.card_section_image}
            cards={cards}
          />

          <VoucherComp />

          <HowItWorks />

          <LatestNewsUpdates
            title={landing.news_section_title}
            description={landing.news_section_description}
            news={news}
          />

          <GetInTouch
            title={landing.touch_section_title}
            description={landing.touch_section_description}
          />

          <FrequentlyQuestions
            title={landing.faq_section_title}
            description={landing.faq_section_description}
            faqs={faqs}
          />
        </Stack>
      </Box>
    </>
  );
};

Landing.showHeader = true;
export default Landing;
