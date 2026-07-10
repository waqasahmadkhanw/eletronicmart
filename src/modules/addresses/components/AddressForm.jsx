// modules/addresses/components/AddressForm.jsx

import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { addressSchema } from "../validators";

const initialValues = {
  fullName: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",
  addressType: "Home",
  isDefault: false,
};

const AddressForm = ({
  initialData = {},
  onSubmit,
  loading = false,
}) => {
  const formValues = {
    ...initialValues,
    ...initialData,
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <Formik
        initialValues={formValues}
        validationSchema={addressSchema}
        enableReinitialize
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="space-y-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <Field
                  name="fullName"
                  type="text"
                  placeholder="Enter full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                />

                <ErrorMessage
                  name="fullName"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <Field
                  name="phone"
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                />

                <ErrorMessage
                  name="phone"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Address Line 1
              </label>

              <Field
                name="addressLine1"
                type="text"
                placeholder="Street address"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />

              <ErrorMessage
                name="addressLine1"
                component="p"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Address Line 2
              </label>

              <Field
                name="addressLine2"
                type="text"
                placeholder="Apartment, suite, etc. (Optional)"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  City
                </label>

                <Field
                  name="city"
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                />

                <ErrorMessage
                  name="city"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  State / Province
                </label>

                <Field
                  name="state"
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                />

                <ErrorMessage
                  name="state"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Country
                </label>

                <Field
                  name="country"
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                />

                <ErrorMessage
                  name="country"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Postal Code
                </label>

                <Field
                  name="postalCode"
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2"
                />

                <ErrorMessage
                  name="postalCode"
                  component="p"
                  className="mt-1 text-sm text-red-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Address Type
              </label>

              <Field
                as="select"
                name="addressType"
                className="w-full rounded-lg border border-gray-300 px-4 py-2"
              >
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Other">Other</option>
              </Field>

              <ErrorMessage
                name="addressType"
                component="p"
                className="mt-1 text-sm text-red-500"
              />
            </div>

            <label className="flex items-center gap-2">
              <Field
                type="checkbox"
                name="isDefault"
                className="h-4 w-4"
              />

              <span className="text-sm text-gray-700">
                Set as default address
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save Address"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

AddressForm.propTypes = {
  initialData: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default AddressForm;