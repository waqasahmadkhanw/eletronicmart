import * as Yup from "yup";

const productSchema = Yup.object({
  name: Yup.string()
    .trim()
    .required("Product name is required")
    .min(3, "Product name must be at least 3 characters")
    .max(100, "Product name cannot exceed 100 characters"),

  description: Yup.string()
    .trim()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description cannot exceed 1000 characters"),

  category: Yup.string()
    .trim()
    .required("Category is required"),

  brand: Yup.string()
    .trim()
    .required("Brand is required"),

  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .positive("Price must be greater than 0"),

  stock: Yup.number()
    .typeError("Stock must be a number")
    .required("Stock is required")
    .min(0, "Stock cannot be negative")
    .integer("Stock must be an integer"),

  sku: Yup.string()
    .trim()
    .required("SKU is required")
    .min(3, "SKU must be at least 3 characters")
    .max(30, "SKU cannot exceed 30 characters"),

  image: Yup.string()
    .trim()
    .url("Enter a valid image URL")
    .nullable(),

  status: Yup.string()
    .oneOf(["active", "inactive"], "Invalid status")
    .required("Status is required"),
});

export default productSchema;