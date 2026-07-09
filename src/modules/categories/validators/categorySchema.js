import * as Yup from "yup";

export const categorySchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, "Category name must be at least 3 characters")
    .max(50, "Category name must not exceed 50 characters")
    .required("Category name is required"),

  description: Yup.string()
    .trim()
    .max(500, "Description must not exceed 500 characters"),

  image: Yup.mixed()
    .nullable()
    .test(
      "fileSize",
      "Image size must be less than 2MB",
      (file) => {
        if (!file) return true;

        return file.size <= 2 * 1024 * 1024;
      }
    )
    .test(
      "fileType",
      "Only JPG, JPEG, and PNG images are allowed",
      (file) => {
        if (!file) return true;

        return [
          "image/jpeg",
          "image/jpg",
          "image/png",
        ].includes(file.type);
      }
    ),

  status: Yup.string()
    .oneOf(
      ["active", "inactive"],
      "Invalid category status"
    )
    .default("active"),
});