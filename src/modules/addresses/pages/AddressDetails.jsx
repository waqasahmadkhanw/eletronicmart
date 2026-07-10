// modules/addresses/pages/AddressDetails.jsx

import { useNavigate, useParams } from "react-router-dom";

import { AddressCard } from "../components";
import {
  useAddressDetails,
  useAddressActions,
} from "../hooks";

const AddressDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    currentAddress,
    loading,
    error,
  } = useAddressDetails(id);

  const {
    handleDeleteAddress,
    handleSetDefaultAddress,
  } = useAddressActions();

  const handleEdit = () => {
    navigate(`/addresses/${id}/edit`);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this address?"
    );

    if (!confirmed) return;

    try {
      await handleDeleteAddress(id);
      navigate("/addresses");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSetDefault = async () => {
    try {
      await handleSetDefaultAddress(id);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="rounded-lg bg-white p-10 text-center shadow">
        Loading address...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-red-600">
        {error}
      </div>
    );
  }

  if (!currentAddress) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
        Address not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          Address Details
        </h1>

        <button
          onClick={() => navigate("/addresses")}
          className="rounded-lg border border-gray-300 px-5 py-2 text-gray-700 transition hover:bg-gray-100"
        >
          Back
        </button>
      </div>

      <AddressCard
        address={currentAddress}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSetDefault={handleSetDefault}
      />
    </div>
  );
};
export default AddressDetails;