import { useNavigate, useParams } from "react-router-dom";

import { UserForm } from "../components";
import { useUserDetails } from "../hooks";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    user,
    loading,
    error,
  } = useUserDetails(id);

  const handleSuccess = () => {
    navigate("/users");
  };

  const handleCancel = () => {
    navigate("/users");
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
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Edit User
          </h1>

          <p className="mt-1 text-gray-500">
            Update user information.
          </p>
        </div>

        <button
          type="button"
          onClick={handleCancel}
          className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-100"
        >
          Back
        </button>
      </div>

      {/* Form */}
      <UserForm
        isEdit
        defaultValues={user}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default EditUser;