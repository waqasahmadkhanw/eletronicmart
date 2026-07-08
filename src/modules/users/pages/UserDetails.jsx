import { useNavigate, useParams } from "react-router-dom";

import {
  UserCard,
} from "../components";

import {
  useUserDetails,
  useUserActions,
} from "../hooks";

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    user,
    loading,
    error,
  } = useUserDetails(id);

  const {
    removeUser,
  } = useUserActions();

  const handleEdit = () => {
    navigate(`/users/${id}/edit`);
  };

  const handleBack = () => {
    navigate("/users");
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) return;

    try {
      await removeUser(id).unwrap();
      navigate("/users");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <p className="text-gray-500">Loading user...</p>
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

  if (!user) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6 text-center">
        <p className="text-gray-500">
          User not found.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            User Details
          </h1>

          <p className="mt-1 text-gray-500">
            View user information.
          </p>
        </div>

        <button
          onClick={handleBack}
          className="rounded-lg border px-5 py-2 hover:bg-gray-100"
        >
          Back
        </button>
      </div>

      {/* User Card */}
      <UserCard
        user={user}
        onView={() => {}}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default UserDetails;