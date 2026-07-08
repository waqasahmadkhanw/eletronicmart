import { useState, useEffect } from "react";

const UserFilter = ({
  filters = {},
  onFilterChange,
}) => {
  const [formData, setFormData] = useState({
    role: "",
    status: "",
    sortBy: "",
    ...filters,
  });

  useEffect(() => {
    setFormData({
      role: "",
      status: "",
      sortBy: "",
      ...filters,
    });
  }, [filters]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFilters = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFilters);
    onFilterChange?.(updatedFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      role: "",
      status: "",
      sortBy: "",
    };

    setFormData(resetFilters);
    onFilterChange?.(resetFilters);
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <div className="grid gap-4 md:grid-cols-4">
        {/* Role */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Role
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="User">User</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Sort By
          </label>

          <select
            name="sortBy"
            value={formData.sortBy}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Default</option>
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="role">Role</option>
            <option value="status">Status</option>
          </select>
        </div>

        {/* Reset Button */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-800"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserFilter;