import { Link } from "react-router-dom";
import Button from "../../../shared/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-4 text-gray-600">
        The page you are looking for doesn't exist.
      </p>

      <Link to="/">
        <Button className="mt-8">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}