export default function Loader({
  size = "10",
}) {
  return (
    <div className="flex justify-center items-center py-8">
      <div
        className={`h-${size} w-${size} animate-spin rounded-full border-4 border-blue-600 border-t-transparent`}
      ></div>
    </div>
  );
}