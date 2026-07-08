import * as publicApi from "./publicApi";

export const fetchHomeData = async () => {
  const { data } = await publicApi.getHomeData();
  return data;
};

export const fetchFeaturedProducts = async () => {
  const { data } = await publicApi.getFeaturedProducts();
  return data;
};

export const fetchCategories = async () => {
  const { data } = await publicApi.getCategories();
  return data;
};

export const fetchDeals = async () => {
  const { data } = await publicApi.getDeals();
  return data;
};

export const fetchBrands = async () => {
  const { data } = await publicApi.getBrands();
  return data;
};

export const fetchTestimonials = async () => {
  const { data } = await publicApi.getTestimonials();
  return data;
};

export const fetchBlogs = async () => {
  const { data } = await publicApi.getBlogs();
  return data;
};

export const fetchBlogDetails = async (slug) => {
  const { data } = await publicApi.getBlogDetails(slug);
  return data;
};

export const contactUs = async (payload) => {
  const { data } = await publicApi.sendContactMessage(payload);
  return data;
};

export const subscribeToNewsletter = async (payload) => {
  const { data } = await publicApi.subscribeNewsletter(payload);
  return data;
};