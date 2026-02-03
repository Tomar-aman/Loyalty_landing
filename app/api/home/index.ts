import * as api from "../api"; 

export const getLandingPageContent = async () => {
  return api.request({
    url: "/v1/contact/landing-page-content/",
    method: "GET",
    skipAuth: true, // ✅ public endpoint
  });
};

