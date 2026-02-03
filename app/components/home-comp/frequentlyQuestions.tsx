"use client";
import React from "react";
import CustomAccordion from "../accordion/accordion";
import { Typography, Box } from "@mui/material";

/* ---------- TYPES ---------- */
export interface FAQItem {
  question: string;
  answer: string;
}

interface FrequentlyQuestionsProps {
  title?: string;
  description?: string;
  faqs?: FAQItem[];
}

/* ---------- FALLBACK DATA ---------- */
const fallbackFaqs: FAQItem[] = [
  {
    question: "How do I activate my advantage card?",
    answer:
      "Once you purchase a card, it is activated instantly and ready to use at participating businesses.",
  },
  {
    question: "Can I use my card at any business?",
    answer:
      "You can use your advantage card at all partner businesses listed on our platform.",
  },
  {
    question: "What happens when my card expires?",
    answer:
      "Once your card expires, you can easily renew or upgrade to continue enjoying discounts.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Refunds are subject to our terms and conditions. Please contact support for more details.",
  },
];

export default function FrequentlyQuestions({
  title,
  description,
  faqs,
}: FrequentlyQuestionsProps) {
  const faqData = faqs && faqs.length ? faqs : fallbackFaqs;

  return (
    <Box>
      {/* -------- SECTION HEADER -------- */}
      <Typography variant="h2" sx={{ fontSize: "30px", textAlign: "center" }}>
        {title ? (
          title
        ) : (
          <>
            <span
              style={{
                background: "none",
                WebkitBackgroundClip: "unset",
                WebkitTextFillColor: "#020817",
                paddingRight: "10px",
              }}
            >
              Frequently Asked
            </span>
            Questions
          </>
        )}
      </Typography>

      <Typography
        variant="h6"
        sx={{ color: "#64748B", textAlign: "center", mt: 1 }}
      >
        {description ??
          "Quick answers to common questions about our platform"}
      </Typography>

      {/* -------- FAQ LIST -------- */}
      {faqData.map((item, index) => (
        <CustomAccordion
          key={index}
          title={item.question}
          defaultExpanded={index === 0}
          restStyle={{ borderBottom: "1px solid #E3E3E3" }}
        >
          <Typography variant="h6" sx={{ color: "#6F6C90" }}>
            {item.answer}
          </Typography>
        </CustomAccordion>
      ))}
    </Box>
  );
}
