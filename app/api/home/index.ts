import * as api from "../api"; 


export const getLandingPageContent = async () => {
  return api.request({
    url: "/v1/contact/landing-page-content/",
    method: "GET",
    skipAuth: true, // ✅ public endpoint
  });
};

/* ---------- FEATURED BUSINESSES ---------- */
export const getFeaturedBusinesses = async () =>
  api.request({
    url: "/v1/business/businesses/?is_featured=True&search=&sort=desc",
    method: "GET",
    skipAuth: true,
  });


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

