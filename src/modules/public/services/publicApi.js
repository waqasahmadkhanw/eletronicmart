import api from "../../../config/axios";
export const getHomeData = () =>
  api.get("/home");

export const getFeaturedProducts = () =>
  api.get("/products/featured");

export const getCategories = () =>
  api.get("/categories");

export const getDeals = () =>
  api.get("/deals");

export const getBrands = () =>
  api.get("/brands");

export const getTestimonials = () =>
  api.get("/testimonials");

export const getBlogs = () =>
  api.get("/blogs");

export const getBlogDetails = (slug) =>
  api.get(`/blogs/${slug}`);

export const sendContactMessage = (data) =>
  api.post("/contact", data);

export const subscribeNewsletter = (data) =>
  api.post("/newsletter/subscribe", data);