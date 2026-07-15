import { useState, useEffect } from "react";
import {
  Filter,
  Shield,
  UserCheck,
  ArrowUpDown,
  RotateCcw,
} from "lucide-react";

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
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-5">
        <div className="rounded-xl bg-white/20 p-2 text-white">
          <Filter size={20} />
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">
            Filter Users
          </h2>
          <p className="text-sm text-blue-100">
            Quickly refine user records
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2 xl:grid-cols-4">
        {/* Role */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Shield
              size={16}
              className="text-blue-600"
            />
            Role
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option value="">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Manager">
              Manager
            </option>
            <option value="User">User</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <UserCheck
              size={16}
              className="text-emerald-600"
            />
            Status
          </label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option value="">All Status</option>
            <option value="active">
              Active
            </option>
            <option value="inactive">
              Inactive
            </option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ArrowUpDown
              size={16}
              className="text-amber-500"
            />
            Sort By
          </label>

          <select
            name="sortBy"
            value={formData.sortBy}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option value="">Default</option>
            <option value="name">
              Name
            </option>
            <option value="email">
              Email
            </option>
            <option value="role">
              Role
            </option>
            <option value="status">
              Status
            </option>
          </select>
        </div>

        {/* Reset */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={handleReset}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-lg active:scale-95"
          >
            <RotateCcw size={17} />
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserFilter;