import { useDispatch, useSelector } from "react-redux";

import {
  getHomeData,
  getFeaturedProducts,
  getCategories,
  getDeals,
  getBrands,
  getTestimonials,
  getBlogs,
  getBlogDetails,
  submitContactForm,
  subscribeNewsletter,

  clearError,
  clearSuccess,

  // selectHomeData,
  selectFeaturedProducts,
  selectCategories,
  selectDeals,
  selectBrands,
  selectTestimonials,
  selectBlogs,
  selectBlogDetails,
  selectPublicLoading,
  selectPublicError,
  selectPublicSuccess,
} from "../store";

const usePublic = () => {
  const dispatch = useDispatch();

  return {
    // State
    // homeData: useSelector(selectHomeData),
    // featuredProducts: useSelector(selectFeaturedProducts),
    // categories: useSelector(selectCategories),
    // deals: useSelector(selectDeals),
    // brands: useSelector(selectBrands),
    // testimonials: useSelector(selectTestimonials),
    // blogs: useSelector(selectBlogs),
    // blogDetails: useSelector(selectBlogDetails),

    // loading: useSelector(selectPublicLoading),
    // error: useSelector(selectPublicError),
    // success: useSelector(selectPublicSuccess),

    // Actions
    getHomeData: () => dispatch(getHomeData()),

    getFeaturedProducts: () =>
      dispatch(getFeaturedProducts()),

    getCategories: () =>
      dispatch(getCategories()),

    getDeals: () =>
      dispatch(getDeals()),

    getBrands: () =>
      dispatch(getBrands()),

    getTestimonials: () =>
      dispatch(getTestimonials()),

    getBlogs: () =>
      dispatch(getBlogs()),

    getBlogDetails: (slug) =>
      dispatch(getBlogDetails(slug)),

    submitContactForm: (payload) =>
      dispatch(submitContactForm(payload)),

    subscribeNewsletter: (payload) =>
      dispatch(subscribeNewsletter(payload)),

    clearError: () =>
      dispatch(clearError()),

    clearSuccess: () =>
      dispatch(clearSuccess()),
  };
};

export default usePublic;