export default function RememberMe({
  checked = false,
  onChange,
  name = "rememberMe",
  label = "Remember me",
  disabled = false,
}) {
  return (
    <div className="flex items-center justify-between">
      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed"
        />

        <span className="text-sm text-gray-700">
          {label}
        </span>
      </label>
    </div>
  );
}