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


export const getFeaturedBusinesses = async (params?: {
  search?: string;
  category?: string;
  city?: string;
  sort?: string;
}) => {

  const filteredParams: any = {
    is_featured: "True",
  };

  if (params?.search?.trim())
    filteredParams.search = params.search.trim();

  if (params?.category)
    filteredParams.category = params.category;

  if (params?.city)
    filteredParams.city = params.city;

  if (params?.sort)
    filteredParams.sort = params.sort === "asc" ? "asc" : "desc";

  console.log("API Params:", filteredParams);

  return api.request<PaginatedResponse<BusinessItem>>({
    url: "/v1/business/businesses/",
    method: "GET",
    skipAuth: true,
    params: filteredParams,
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


export const getOffers= async () => {
  return api.request({
    url: "/v1/business/popular/",
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

export const getCities = async () => {
  return api.request({
    url: "/v1/user/cities",
    method: "GET",
    skipAuth: true,
  });
};

export const getCategories = async () => {
  return api.request({
    url: "/v1/business/categories/",
    method: "GET",
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

export const getSocialMedia = async () => {
  return api.request({
    url: "/v1/contact/social-media-links/",
    method: "GET",
    skipAuth: true,
  });
};
export const getAppDetails = async () => {
  return api.request({
    url: "/v1/contact/app-download-links/",
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
export const getNewsItems = async (params?: {
  page?: number;
  per_page?: number;
}) => {
  return api.request({
    url: "/v1/news/articles/",
    method: "GET",
    params, // 👈 important
    skipAuth: true,
  });
};

