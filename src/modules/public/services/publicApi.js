import api from "../../../config/axios";
export const getFeaturedProductsApi = () => {
  return api.get("/products/featured");
};

export const getFeaturedCategoriesApi = () => {
  return api.get("/categories/featured");
};

export const getNewArrivalsApi = () => {
  return api.get("/products/new-arrivals");
};

export const getTestimonialsApi = () => {
  return api.get("/testimonials");
};

export const subscribeNewsletterApi = (data) => {
  return api.post("/newsletter/subscribe", data);
};

export const sendContactMessageApi = (data) => {
  return api.post("/contact", data);
};