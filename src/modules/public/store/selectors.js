export const selectPublic = (state) => state.public;

export const selectFeaturedCategories = (state) =>
  state.public.featuredCategories;

export const selectFeaturedProducts = (state) =>
  state.public.featuredProducts;

export const selectNewArrivals = (state) =>
  state.public.newArrivals;

export const selectTestimonials = (state) =>
  state.public.testimonials;

export const selectLoading = (state) =>
  state.public.loading;

export const selectError = (state) =>
  state.public.error;

export const selectNewsletterLoading = (state) =>
  state.public.newsletterLoading;

export const selectNewsletterSuccess = (state) =>
  state.public.newsletterSuccess;

export const selectContactLoading = (state) =>
  state.public.contactLoading;

export const selectContactSuccess = (state) =>
  state.public.contactSuccess;