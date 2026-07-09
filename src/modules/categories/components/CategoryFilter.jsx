const CategoryFilter = ({
  status,
  setStatus,
}) => {
  return (
    <div className="w-full">
      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      >
        <option value="">
          All Status
        </option>

        <option value="active">
          Active
        </option>

        <option value="inactive">
          Inactive
        </option>
      </select>
    </div>
  );
};

export default CategoryFilter;