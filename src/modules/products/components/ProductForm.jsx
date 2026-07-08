import { useFormik } from "formik";
import { productSchema } from "../validators";

const ProductForm = ({
  initialValues,
  onSubmit,
  loading = false,
  submitButtonText = "Save Product",
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema: productSchema,
    enableReinitialize: true,
    onSubmit,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mx-auto max-w-4xl space-y-6 rounded-lg bg-white p-6 shadow"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Product Name */}
        <div>
          <label className="mb-1 block font-medium">Product Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          {formik.touched.name && formik.errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.name}
            </p>
          )}
        </div>

        {/* Brand */}
        <div>
          <label className="mb-1 block font-medium">Brand</label>

          <input
            type="text"
            name="brand"
            placeholder="Enter brand"
            value={formik.values.brand}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          {formik.touched.brand && formik.errors.brand && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.brand}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="mb-1 block font-medium">Category</label>

          <input
            type="text"
            name="category"
            placeholder="Enter category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          {formik.touched.category && formik.errors.category && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.category}
            </p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="mb-1 block font-medium">Price</label>

          <input
            type="number"
            name="price"
            placeholder="0.00"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          {formik.touched.price && formik.errors.price && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.price}
            </p>
          )}
        </div>

        {/* Stock */}
        <div>
          <label className="mb-1 block font-medium">Stock</label>

          <input
            type="number"
            name="stock"
            placeholder="0"
            value={formik.values.stock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          {formik.touched.stock && formik.errors.stock && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.stock}
            </p>
          )}
        </div>

        {/* SKU */}
        <div>
          <label className="mb-1 block font-medium">SKU</label>

          <input
            type="text"
            name="sku"
            placeholder="Enter SKU"
            value={formik.values.sku}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          {formik.touched.sku && formik.errors.sku && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.sku}
            </p>
          )}
        </div>

        {/* Image */}
        <div className="md:col-span-2">
          <label className="mb-1 block font-medium">Image URL</label>

          <input
            type="text"
            name="image"
            placeholder="https://example.com/image.jpg"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          {formik.touched.image && formik.errors.image && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.image}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="mb-1 block font-medium">Description</label>

          <textarea
            rows={5}
            name="description"
            placeholder="Enter product description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          />

          {formik.touched.description &&
            formik.errors.description && (
              <p className="mt-1 text-sm text-red-500">
                {formik.errors.description}
              </p>
            )}
        </div>

        {/* Status */}
        <div>
          <label className="mb-1 block font-medium">Status</label>

          <select
            name="status"
            value={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full rounded-md border px-4 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          {formik.touched.status && formik.errors.status && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.status}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-blue-600 px-6 py-2 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Please wait..." : submitButtonText}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;