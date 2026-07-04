import * as publicApi from "./publicApi";

export const getFeaturedProducts = async () => {
  const response = await publicApi.getFeaturedProductsApi();
  return response.data;
};

export const getFeaturedCategories = async () => {
  const response = await publicApi.getFeaturedCategoriesApi();
  return response.data;
};

export const getNewArrivals = async () => {
  const response = await publicApi.getNewArrivalsApi();
  return response.data;
};

export const getTestimonials = async () => {
  const response = await publicApi.getTestimonialsApi();
  return response.data;
};

export const subscribeNewsletter = async (data) => {
  const response = await publicApi.subscribeNewsletterApi(data);
  return response.data;
};

export const sendContactMessage = async (data) => {
  const response = await publicApi.sendContactMessageApi(data);
  return response.data;
};