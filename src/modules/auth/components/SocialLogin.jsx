import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

export default function SocialLogin({
  onGoogleLogin,
  onGithubLogin,
  onFacebookLogin,
  loading = false,
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="h-px flex-1 bg-gray-300" />
        <span className="px-3 text-sm text-gray-500">
          Or continue with
        </span>
        <div className="h-px flex-1 bg-gray-300" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <button
          type="button"
          disabled={loading}
          onClick={onGoogleLogin}
          className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FaGoogle className="text-red-500" />
          Google
        </button>

        <button
          type="button"
          disabled={loading}
          onClick={onGithubLogin}
          className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FaGithub className="text-gray-900" />
          GitHub
        </button>

        <button
          type="button"
          disabled={loading}
          onClick={onFacebookLogin}
          className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FaFacebook className="text-blue-600" />
          Facebook
        </button>
      </div>
    </div>
  );
}