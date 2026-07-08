import { Link } from "react-router-dom";

import AuthHeader from "../components/AuthHeader";
import VerifyEmailForm from "../components/VerifyEmailForm";
import AuthFooter from "../components/AuthFooter";

export default function VerifyEmail() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <AuthHeader
          title="Verify Your Email"
          subtitle="Please wait while we verify your email address."
        />

        <VerifyEmailForm />

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
          >
            Back to Login
          </Link>
        </div>

        <AuthFooter
          text="Already verified your email?"
          linkText="Sign In"
          linkTo="/login"
        />
      </div>
    </div>
  );
}