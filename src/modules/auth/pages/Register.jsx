import { Link } from "react-router-dom";

import AuthHeader from "../components/AuthHeader";
import RegisterForm from "../components/RegisterForm";
import SocialLogin from "../components/SocialLogin";
import AuthFooter from "../components/AuthFooter";

export default function Register() {
  const handleGoogleRegister = () => {
    console.log("Google Register");
  };

  const handleGithubRegister = () => {
    console.log("GitHub Register");
  };

  const handleFacebookRegister = () => {
    console.log("Facebook Register");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <AuthHeader
          title="Create Account"
          subtitle="Register to get started."
        />

        <RegisterForm />

        <div className="my-6">
          <SocialLogin
            onGoogleLogin={handleGoogleRegister}
            onGithubLogin={handleGithubRegister}
            onFacebookLogin={handleFacebookRegister}
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            By creating an account, you agree to our{" "}
            <Link
              to="/terms"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <AuthFooter
          text="Already have an account?"
          linkText="Sign In"
          linkTo="/login"
        />
      </div>
    </div>
  );
}