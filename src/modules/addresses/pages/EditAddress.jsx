// modules/addresses/pages/EditAddress.jsx

import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { AddressForm } from "../components";
import {
  useAddressDetails,
  useAddressActions,
} from "../hooks";

const EditAddress = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    currentAddress,
    loading: detailsLoading,
  } = useAddressDetails(id);

  const {
    loading,
    handleUpdateAddress,
  } = useAddressActions();

  const handleSubmit = async (values) => {
    try {
      await handleUpdateAddress(id, values);

      toast.success("Address updated successfully.");

      navigate("/addresses");
    } catch (error) {
      toast.error(error || "Failed to update address.");
    }
  };

  if (detailsLoading) {
    return (
      <div className="rounded-lg bg-white p-10 text-center shadow">
        Loading address...
      </div>
    );
  }

  if (!currentAddress) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-10 text-center">
        Address not found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Edit Address
        </h1>

        <p className="mt-2 text-gray-600">
          Update your address information.
        </p>
      </div>

      <AddressForm
        initialData={currentAddress}
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditAddress;