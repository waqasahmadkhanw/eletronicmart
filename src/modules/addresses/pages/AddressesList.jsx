// modules/addresses/pages/AddressesList.jsx

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AddressSearch,
  AddressTable,
} from "../components";

import {
  useAddresses,
  useAddressActions,
} from "../hooks";

const AddressesList = () => {
  const navigate = useNavigate();

  const { addresses, loading } = useAddresses();
  const {
    handleDeleteAddress,
    handleSetDefaultAddress,
  } = useAddressActions();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredAddresses = useMemo(() => {
    if (!searchTerm.trim()) return addresses;

    const keyword = searchTerm.toLowerCase();

    return addresses.filter((address) =>
      [
        address.fullName,
        address.phone,
        address.city,
        address.state,
        address.country,
        address.addressLine1,
        address.addressType,
      ]
        .filter(Boolean)
        .some((value) =>
          value.toLowerCase().includes(keyword)
        )
    );
  }, [addresses, searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleView = (id) => {
    navigate(`/addresses/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/addresses/${id}/edit`);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this address?"
    );

    if (!confirmed) return;

    try {
      await handleDeleteAddress(id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetDefault = async (id) => {
    try {
      await handleSetDefaultAddress(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold text-gray-900">
          My Addresses
        </h1>

        <button
          onClick={() => navigate("/addresses/create")}
          className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
        >
          Add Address
        </button>
      </div>

      <AddressSearch onSearch={handleSearch} />

      {loading ? (
        <div className="rounded-lg bg-white p-10 text-center shadow">
          Loading addresses...
        </div>
      ) : (
        <AddressTable
          addresses={filteredAddresses}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onSetDefault={handleSetDefault}
        />
      )}
    </div>
  );
};

export default AddressesList;