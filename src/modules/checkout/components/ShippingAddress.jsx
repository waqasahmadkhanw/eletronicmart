import { Field, ErrorMessage } from "formik";

const ShippingAddress = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <h2 className="text-xl font-semibold mb-6">
        Shipping Address
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Full Name
          </label>
          <Field
            type="text"
            name="fullName"
            placeholder="Enter full name"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="fullName"
            component="p"
            className="mt-1 text-sm text-red-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Email
          </label>
          <Field
            type="email"
            name="email"
            placeholder="Enter email"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="email"
            component="p"
            className="mt-1 text-sm text-red-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Phone
          </label>
          <Field
            type="text"
            name="phone"
            placeholder="Enter phone number"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="phone"
            component="p"
            className="mt-1 text-sm text-red-500"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Country
          </label>
          <Field
            type="text"
            name="country"
            placeholder="Enter country"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="country"
            component="p"
            className="mt-1 text-sm text-red-500"
          />
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-sm font-medium">
            Address
          </label>
          <Field
            as="textarea"
            rows="3"
            name="address"
            placeholder="Enter complete address"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="address"
            component="p"
            className="mt-1 text-sm text-red-500"
          />
        </div>

        {/* City */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            City
          </label>
          <Field
            type="text"
            name="city"
            placeholder="Enter city"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="city"
            component="p"
            className="mt-1 text-sm text-red-500"
          />
        </div>

        {/* State */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            State
          </label>
          <Field
            type="text"
            name="state"
            placeholder="Enter state"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="state"
            component="p"
            className="mt-1 text-sm text-red-500"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Postal Code
          </label>
          <Field
            type="text"
            name="postalCode"
            placeholder="Enter postal code"
            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage
            name="postalCode"
            component="p"
            className="mt-1 text-sm text-red-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;