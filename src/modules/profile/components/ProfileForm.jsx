import React from "react";
import { useFormik } from "formik";
import {
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
  Save,
} from "lucide-react";

import profileSchema from "../validators/profileSchema";

const ProfileForm = ({
  initialValues,
  onSubmit,
  loading = false,
}) => {
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

  const inputClass = (field) =>
    `w-full rounded-2xl border bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-700 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400
    ${
      formik.touched[field] && formik.errors[field]
        ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100"
        : "border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
    }`;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-6">
        <h2 className="text-2xl font-bold text-white">
          Edit Profile
        </h2>

        <p className="mt-1 text-sm text-blue-100">
          Update your personal information and keep your
          profile up to date.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-6 p-8"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Full Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={inputClass("fullName")}
              />
            </div>

            {formik.touched.fullName &&
              formik.errors.fullName && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {formik.errors.fullName}
                </p>
              )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={inputClass("email")}
              />
            </div>

            {formik.touched.email &&
              formik.errors.email && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {formik.errors.email}
                </p>
              )}
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Phone Number
            </label>

            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                name="phone"
                placeholder="+1 234 567 890"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={inputClass("phone")}
              />
            </div>

            {formik.touched.phone &&
              formik.errors.phone && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {formik.errors.phone}
                </p>
              )}
          </div>

          {/* Address */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Address
            </label>

            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                name="address"
                placeholder="Street, City, Country"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={inputClass("address")}
              />
            </div>

            {formik.touched.address &&
              formik.errors.address && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {formik.errors.address}
                </p>
              )}
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Bio
            </label>

            <div className="relative">
              <FileText
                size={18}
                className="absolute left-4 top-5 text-slate-400"
              />

              <textarea
                rows={5}
                name="bio"
                placeholder="Tell us something about yourself..."
                value={formik.values.bio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-700 shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
          <button
            type="reset"
            onClick={formik.handleReset}
            className="rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100"
          >
            Reset
          </button>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Save size={18} />

            {loading
              ? "Updating Profile..."
              : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;