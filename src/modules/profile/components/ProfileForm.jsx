import React from "react";
import { useFormik } from "formik";
import profileSchema from "../validators/profileSchema";

const ProfileForm = ({ initialValues, onSubmit, loading }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: initialValues?.fullName || "",
      email: initialValues?.email || "",
      phone: initialValues?.phone || "",
      bio: initialValues?.bio || "",
      address: initialValues?.address || "",
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full bg-white rounded-xl shadow p-6 space-y-4"
    >
      <div>
        <label className="text-sm font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          className="w-full border rounded px-3 py-2 mt-1"
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <p className="text-red-500 text-xs">{formik.errors.fullName}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="w-full border rounded px-3 py-2 mt-1"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs">{formik.errors.email}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Phone</label>
        <input
          type="text"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          className="w-full border rounded px-3 py-2 mt-1"
        />
        {formik.touched.phone && formik.errors.phone && (
          <p className="text-red-500 text-xs">{formik.errors.phone}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Bio</label>
        <textarea
          name="bio"
          value={formik.values.bio}
          onChange={formik.handleChange}
          className="w-full border rounded px-3 py-2 mt-1"
        />
      </div>

      <div>
        <label className="text-sm font-medium">Address</label>
        <input
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          className="w-full border rounded px-3 py-2 mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Updating..." : "Update Profile"}
      </button>
    </form>
  );
};

export default ProfileForm;