// modules/addresses/pages/CreateAddress.jsx

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { AddressForm } from "../components";
import { useAddressActions } from "../hooks";

const CreateAddress = () => {
  const navigate = useNavigate();

  const {
    loading,
    handleCreateAddress,
  } = useAddressActions();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await handleCreateAddress(values);

      toast.success("Address created successfully.");

      resetForm();

      navigate("/addresses");
    } catch (error) {
      toast.error(error || "Failed to create address.");
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Create Address
        </h1>

        <p className="mt-2 text-gray-600">
          Add a new shipping or billing address.
        </p>
      </div>

      <AddressForm
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateAddress;