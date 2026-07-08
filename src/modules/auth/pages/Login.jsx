import { Link } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import SocialLogin from "../components/SocialLogin";
import AuthHeader from "../components/AuthHeader";
import AuthFooter from "../components/AuthFooter";

export default function Login() {
  const handleGoogleLogin = () => {
    console.log("Google Login");
  };

  const handleGithubLogin = () => {
    console.log("GitHub Login");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook Login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to continue to your account."
        />

        <LoginForm />

        <div className="my-6">
          <SocialLogin
            onGoogleLogin={handleGoogleLogin}
            onGithubLogin={handleGithubLogin}
            onFacebookLogin={handleFacebookLogin}
          />
        </div>

        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Forgot Password?
          </Link>
        </div>

        <AuthFooter
          text="Don't have an account?"
          linkText="Register"
          linkTo="/register"
        />
      </div>
    </div>
  );
}