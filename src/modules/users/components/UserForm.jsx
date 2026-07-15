import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import {
  User,
  Mail,
  Phone,
  Shield,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  UserPlus,
  Pencil,
} from "lucide-react";

import { userSchema } from "../validators";
import { useUserActions } from "../hooks";

const inputClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

const UserForm = ({
  defaultValues,
  isEdit = false,
  onSuccess,
}) => {
  const { addUser, editUser, loading } =
    useUserActions();

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const initialValues =
    defaultValues || {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
      status: "active",
      password: "",
      confirmPassword: "",
    };

  const onSubmit = async (values) => {
    try {
      if (isEdit) {
        await editUser(
          defaultValues.id,
          values
        ).unwrap();
      } else {
        await addUser(values).unwrap();
      }

      onSuccess?.();
    } catch (error) {
      console.error(error);
    }
  };

  const InputLabel = ({
    icon: Icon,
    children,
  }) => (
    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
      <Icon
        size={16}
        className="text-blue-600"
      />
      {children}
    </label>
  );

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-7">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/20 p-3 text-white">
            {isEdit ? (
              <Pencil size={26} />
            ) : (
              <UserPlus size={26} />
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              {isEdit
                ? "Update User"
                : "Create New User"}
            </h2>

            <p className="mt-1 text-blue-100">
              {isEdit
                ? "Modify user information."
                : "Fill in the details below to create a new account."}
            </p>
          </div>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <Form className="space-y-8 p-6 md:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* First Name */}
            <div>
              <InputLabel icon={User}>
                First Name
              </InputLabel>

              <Field
                name="firstName"
                placeholder="John"
                className={inputClass}
              />

              <ErrorMessage
                name="firstName"
                component="p"
                className="mt-2 text-sm font-medium text-red-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <InputLabel icon={User}>
                Last Name
              </InputLabel>

              <Field
                name="lastName"
                placeholder="Doe"
                className={inputClass}
              />

              <ErrorMessage
                name="lastName"
                component="p"
                className="mt-2 text-sm font-medium text-red-500"
              />
            </div>

            {/* Email */}
            <div>
              <InputLabel icon={Mail}>
                Email Address
              </InputLabel>

              <Field
                type="email"
                name="email"
                placeholder="john@example.com"
                className={inputClass}
              />

              <ErrorMessage
                name="email"
                component="p"
                className="mt-2 text-sm font-medium text-red-500"
              />
            </div>

            {/* Phone */}
            <div>
              <InputLabel icon={Phone}>
                Phone Number
              </InputLabel>

              <Field
                name="phone"
                placeholder="+1 234 567 890"
                className={inputClass}
              />

              <ErrorMessage
                name="phone"
                component="p"
                className="mt-2 text-sm font-medium text-red-500"
              />
            </div>

            {/* Role */}
            <div>
              <InputLabel icon={Shield}>
                Role
              </InputLabel>

              <Field
                as="select"
                name="role"
                className={inputClass}
              >
                <option value="">
                  Select Role
                </option>
                <option value="Admin">
                  Admin
                </option>
                <option value="Manager">
                  Manager
                </option>
                <option value="User">
                  User
                </option>
              </Field>

              <ErrorMessage
                name="role"
                component="p"
                className="mt-2 text-sm font-medium text-red-500"
              />
            </div>

            {/* Status */}
            <div>
              <InputLabel icon={CheckCircle2}>
                Status
              </InputLabel>

              <Field
                as="select"
                name="status"
                className={inputClass}
              >
                <option value="active">
                  Active
                </option>
                <option value="inactive">
                  Inactive
                </option>
              </Field>

              <ErrorMessage
                name="status"
                component="p"
                className="mt-2 text-sm font-medium text-red-500"
              />
            </div>

            {!isEdit && (
              <>
                {/* Password */}
                <div className="relative">
                  <InputLabel icon={Lock}>
                    Password
                  </InputLabel>

                  <Field
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    placeholder="Enter password"
                    className={`${inputClass} pr-12`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-[43px] text-slate-400 transition hover:text-blue-600"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>

                  <ErrorMessage
                    name="password"
                    component="p"
                    className="mt-2 text-sm font-medium text-red-500"
                  />
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <InputLabel icon={Lock}>
                    Confirm Password
                  </InputLabel>

                  <Field
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className={`${inputClass} pr-12`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    className="absolute right-4 top-[43px] text-slate-400 transition hover:text-blue-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>

                  <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="mt-2 text-sm font-medium text-red-500"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-col-reverse gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Saving...
                </>
              ) : (
                <>
                  {isEdit ? (
                    <Pencil size={18} />
                  ) : (
                    <UserPlus size={18} />
                  )}

                  {isEdit
                    ? "Update User"
                    : "Create User"}
                </>
              )}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;