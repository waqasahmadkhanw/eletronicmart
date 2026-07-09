import { useFormik } from "formik";

import { categorySchema } from "../validators";

const CategoryForm = ({
  initialValues = {
    name: "",
    description: "",
    image: null,
    status: "active",
  },
  onSubmit,
  loading = false,
}) => {
  const formik = useFormik({
    initialValues,

    validationSchema: categorySchema,

    enableReinitialize: true,

    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-5 rounded-xl bg-white p-6 shadow"
    >
      {/* Category Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Category Name
        </label>

        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
          placeholder="Enter category name"
        />

        {formik.touched.name && formik.errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {formik.errors.name}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          name="description"
          rows="4"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
          placeholder="Enter category description"
        />

        {formik.touched.description &&
          formik.errors.description && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.description}
            </p>
          )}
      </div>

      {/* Image */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Category Image
        </label>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(event) =>
            formik.setFieldValue(
              "image",
              event.currentTarget.files[0]
            )
          }
          className="w-full rounded-lg border px-4 py-2"
        />

        {formik.touched.image &&
          formik.errors.image && (
            <p className="mt-1 text-sm text-red-500">
              {formik.errors.image}
            </p>
          )}
      </div>

      {/* Status */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Status
        </label>

        <select
          name="status"
          value={formik.values.status}
          onChange={formik.handleChange}
          className="w-full rounded-lg border px-4 py-2"
        >
          <option value="active">
            Active
          </option>

          <option value="inactive">
            Inactive
          </option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Category"}
      </button>
    </form>
  );
};

export default CategoryForm;