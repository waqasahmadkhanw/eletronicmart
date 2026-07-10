import * as Yup from "yup";

export const reviewSchema = Yup.object({
  rating: Yup.number()
    .required("Rating is required")
    .min(1, "Rating must be at least 1")
    .max(5, "Rating cannot exceed 5"),

  title: Yup.string()
    .trim()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  comment: Yup.string()
    .trim()
    .required("Review is required")
    .min(10, "Review must be at least 10 characters")
    .max(1000, "Review cannot exceed 1000 characters"),
});