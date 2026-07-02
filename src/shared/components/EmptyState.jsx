export default function EmptyState({
  title = "No Data Found",
  description = "Nothing to display.",
}) {
  return (
    <div className="py-16 text-center">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-2 text-gray-500">
        {description}
      </p>

    </div>
  );
}