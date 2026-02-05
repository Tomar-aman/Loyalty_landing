import * as api from "../api"; 
import { PaginatedResponse, BusinessItem, CardPlan, NewsItem } from "@/services/types.";

export const getLandingPageContent = async () => {
  return api.request({
    url: "/v1/contact/landing-page-content/",
    method: "GET",
    skipAuth: true, // ✅ public endpoint
  });
};

/* ---------- FEATURED BUSINESSES ---------- */


export const getFeaturedBusinesses = async () => {
  return api.request<PaginatedResponse<BusinessItem>>({
    url: "/v1/business/businesses/?is_featured=True&search&sort=desc",
    method: "GET",
    skipAuth: true,
  });
};

export const getBusinessDetails = async (id: number | string) => {
  return api.request<any>({
    url: `/v1/business/businesses/${id}/`,
    method: "GET",
    skipAuth: true,
  });
};

/* ---------- FAQs ---------- */
export const getFaqs = async () => {
  return api.request({
    url: "/v1/contact/faqs/",
    method: "GET",
    skipAuth: true,
  });
};

/* ---------- Contact Us (form submit) ---------- */
export const submitContactUs = async (payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return api.request({
    url: "/v1/contact/contact-us/",
    method: "POST",
    data: payload,
    skipAuth: true,
  });
};

/* ---------- Newsletter Subscribe ---------- */
export const subscribeNewsletter = async (payload: {
  email: string;
}) => {
  return api.request({
    url: "/v1/contact/subscribe/",
    method: "POST",
    data: payload,
    skipAuth: true,
  });
};

/* ---------- Support ---------- */
export const submitSupportRequest = async (payload: {
  name: string;
  email: string;
  issue: string;
}) => {
  return api.request({
    url: "/v1/contact/support/",
    method: "POST",
    data: payload,
    skipAuth: true,
  });
};


export const getFooterDetails = async () => {
  return api.request({
    url: "/v1/contact/support/",
    method: "GET",
    skipAuth: true,
  });
};


/* ---------- Advantage Cards ---------- */
export const getCards = async () => {
  return api.request({
    url: "/v1/card/",
    method: "GET",
    skipAuth: true,
  });
};


/* ---------- News Articles ---------- */
export const getNewsItems = async () => {
  return api.request({
    url: "/v1/news/articles/",
    method: "GET",
    skipAuth: true,
  });
};
