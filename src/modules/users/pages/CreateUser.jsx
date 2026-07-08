import { useNavigate } from "react-router-dom";

import { UserForm } from "../components";

const CreateUser = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/users");
  };

  const handleCancel = () => {
    navigate("/users");
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Create User
          </h1>

          <p className="mt-1 text-gray-500">
            Add a new user to the system.
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
        isEdit={false}
        onSuccess={handleSuccess}
      />
    </div>
  );
};

export default CreateUser;