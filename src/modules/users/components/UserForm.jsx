// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";

// import { userSchema } from "../validators";
// import { useUserActions } from "../hooks";

// const UserForm = ({
//   defaultValues,
//   isEdit = false,
//   onSuccess,
// }) => {
//   const { addUser, editUser, loading } = useUserActions();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(userSchema),
//     defaultValues: defaultValues || {
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       role: "",
//       status: "active",
//       password: "",
//       confirmPassword: "",
//     },
//   });

//   const onSubmit = async (data) => {
//     try {
//       if (isEdit) {
//         await editUser(defaultValues.id, data).unwrap();
//       } else {
//         await addUser(data).unwrap();
//       }

//       onSuccess?.();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="space-y-6 rounded-xl bg-white p-6 shadow"
//     >
//       <div className="grid gap-6 md:grid-cols-2">
//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             First Name
//           </label>

//           <input
//             {...register("firstName")}
//             className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
//           />

//           <p className="mt-1 text-sm text-red-500">
//             {errors.firstName?.message}
//           </p>
//         </div>

//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             Last Name
//           </label>

//           <input
//             {...register("lastName")}
//             className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
//           />

//           <p className="mt-1 text-sm text-red-500">
//             {errors.lastName?.message}
//           </p>
//         </div>

//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             Email
//           </label>

//           <input
//             type="email"
//             {...register("email")}
//             className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
//           />

//           <p className="mt-1 text-sm text-red-500">
//             {errors.email?.message}
//           </p>
//         </div>

//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             Phone
//           </label>

//           <input
//             {...register("phone")}
//             className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
//           />

//           <p className="mt-1 text-sm text-red-500">
//             {errors.phone?.message}
//           </p>
//         </div>

//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             Role
//           </label>

//           <select
//             {...register("role")}
//             className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
//           >
//             <option value="">Select Role</option>
//             <option value="Admin">Admin</option>
//             <option value="Manager">Manager</option>
//             <option value="User">User</option>
//           </select>

//           <p className="mt-1 text-sm text-red-500">
//             {errors.role?.message}
//           </p>
//         </div>

//         <div>
//           <label className="mb-2 block text-sm font-medium">
//             Status
//           </label>

//           <select
//             {...register("status")}
//             className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
//           >
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>

//           <p className="mt-1 text-sm text-red-500">
//             {errors.status?.message}
//           </p>
//         </div>

//         {!isEdit && (
//           <>
//             <div>
//               <label className="mb-2 block text-sm font-medium">
//                 Password
//               </label>

//               <input
//                 type="password"
//                 {...register("password")}
//                 className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
//               />

//               <p className="mt-1 text-sm text-red-500">
//                 {errors.password?.message}
//               </p>
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-medium">
//                 Confirm Password
//               </label>

//               <input
//                 type="password"
//                 {...register("confirmPassword")}
//                 className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
//               />

//               <p className="mt-1 text-sm text-red-500">
//                 {errors.confirmPassword?.message}
//               </p>
//             </div>
//           </>
//         )}
//       </div>

//       <div className="flex justify-end">
//         <button
//           type="submit"
//           disabled={loading}
//           className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
//         >
//           {loading
//             ? "Saving..."
//             : isEdit
//             ? "Update User"
//             : "Create User"}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default UserForm;
import { Formik, Form, Field, ErrorMessage } from "formik";

import { userSchema } from "../validators";
import { useUserActions } from "../hooks";

const UserForm = ({
  defaultValues,
  isEdit = false,
  onSuccess,
}) => {
  const { addUser, editUser, loading } = useUserActions();

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
        await editUser(defaultValues.id, values).unwrap();
      } else {
        await addUser(values).unwrap();
      }

      onSuccess?.();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      enableReinitialize
      onSubmit={onSubmit}
    >
      <Form className="space-y-6 rounded-xl bg-white p-6 shadow">
        <div className="grid gap-6 md:grid-cols-2">
          {/* First Name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              First Name
            </label>

            <Field
              name="firstName"
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            />

            <ErrorMessage
              name="firstName"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Last Name
            </label>

            <Field
              name="lastName"
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            />

            <ErrorMessage
              name="lastName"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <Field
              type="email"
              name="email"
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            />

            <ErrorMessage
              name="email"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone
            </label>

            <Field
              name="phone"
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            />

            <ErrorMessage
              name="phone"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Role */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Role
            </label>

            <Field
              as="select"
              name="role"
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="User">User</option>
            </Field>

            <ErrorMessage
              name="role"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Status
            </label>

            <Field
              as="select"
              name="status"
              className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Field>

            <ErrorMessage
              name="status"
              component="p"
              className="mt-1 text-sm text-red-500"
            />
          </div>

          {!isEdit && (
            <>
              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Password
                </label>

                <Field
                  type="password"
                  name="password"
                  className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
                />

                <ErrorMessage
                  name="password"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Confirm Password
                </label>

                <Field
                  type="password"
                  name="confirmPassword"
                  className="w-full rounded-lg border px-4 py-2 focus:border-blue-500 focus:outline-none"
                />

                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Saving..."
              : isEdit
              ? "Update User"
              : "Create User"}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default UserForm;