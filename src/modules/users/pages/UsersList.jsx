import { useNavigate } from "react-router-dom";

import {
  UserTable,
  UserSearch,
  UserFilter,
} from "../components";

import {
  useUsers,
  useUserActions,
} from "../hooks";

const UsersList = () => {
  const navigate = useNavigate();

  const {
    users,
    loading,
    refetch,
  } = useUsers();

  const {
    removeUser,
  } = useUserActions();

  const handleSearch = (search) => {
    refetch({
      search,
    });
  };

  const handleFilterChange = (filters) => {
    refetch(filters);
  };

  const handleView = (user) => {
    navigate(`/users/${user.id}`);
  };

  const handleEdit = (user) => {
    navigate(`/users/${user.id}/edit`);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmed) return;

    try {
      await removeUser(id).unwrap();
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreate = () => {
    navigate("/users/create");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Users
          </h1>

          <p className="mt-1 text-gray-500">
            Manage all users from one place.
          </p>
        </div>

        <button
          onClick={handleCreate}
          className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Create User
        </button>
      </div>

      {/* Search */}
      <UserSearch
        onSearch={handleSearch}
      />

      {/* Filters */}
      <UserFilter
        onFilterChange={handleFilterChange}
      />

      {/* Users Table */}
      <UserTable
        users={users}
        loading={loading}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default UsersList;