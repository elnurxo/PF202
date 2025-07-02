import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Logo + Title */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-600">Bazaar</h1>
          <p className="text-gray-500 mt-1">Welcome back! Please sign in.</p>
        </div>

        {/* Google Sign In */}
        <button className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition mb-6">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700">
            Sign in with Google
          </span>
        </button>

        {/* Divider */}
        <div className="flex items-center justify-between my-4">
          <span className="w-full h-px bg-gray-200"></span>
          <span className="mx-2 text-sm text-gray-400">or</span>
          <span className="w-full h-px bg-gray-200"></span>
        </div>

        {/* Email + Password Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-600 font-medium"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-600 font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
