import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white shadow">

      <div className="p-6 text-xl font-bold border-b">
        Dashboard
      </div>

      <nav className="flex flex-col p-4 space-y-2">

        <Link
          to="/dashboard"
          className="rounded-lg px-4 py-2 hover:bg-blue-100"
        >
          Dashboard
        </Link>

        <Link
          to="/products"
          className="rounded-lg px-4 py-2 hover:bg-blue-100"
        >
          Products
        </Link>

        <Link
          to="/orders"
          className="rounded-lg px-4 py-2 hover:bg-blue-100"
        >
          Orders
        </Link>

        <Link
          to="/users"
          className="rounded-lg px-4 py-2 hover:bg-blue-100"
        >
          Users
        </Link>

      </nav>
    </aside>
  );
}