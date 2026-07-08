import React from "react";
import { useFormik } from "formik";

import useUpdateProfile from "../hooks/useUpdateProfile";
import passwordSchema from "../validators/passwordSchema";

const ChangePassword = () => {
  const { updateProfile, loading } = useUpdateProfile();

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values, { resetForm }) => {
      updateProfile({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });
      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full bg-white rounded-xl shadow p-6 space-y-4"
    >
      <div>
        <label className="text-sm font-medium">Current Password</label>
        <input
          type="password"
          name="currentPassword"
          value={formik.values.currentPassword}
          onChange={formik.handleChange}
          className="w-full border rounded px-3 py-2 mt-1"
        />
        {formik.touched.currentPassword && formik.errors.currentPassword && (
          <p className="text-red-500 text-xs">
            {formik.errors.currentPassword}
          </p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">New Password</label>
        <input
          type="password"
          name="newPassword"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          className="w-full border rounded px-3 py-2 mt-1"
        />
        {formik.touched.newPassword && formik.errors.newPassword && (
          <p className="text-red-500 text-xs">
            {formik.errors.newPassword}
          </p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          className="w-full border rounded px-3 py-2 mt-1"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p className="text-red-500 text-xs">
            {formik.errors.confirmPassword}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
      >
        {loading ? "Updating..." : "Change Password"}
      </button>
    </form>
  );
};

export default ChangePassword;