import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaGithub } from 'react-icons/fa';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      username,
      email,
      password,
    });
    // Add your signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-900 to-red-600">
      <div className="bg-white shadow-lg p-10 rounded-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-900">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your username"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login To Your Account
          </button>
        </form>

        {/* OR Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            type="button"
            aria-label="Sign in with Google"
            className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition duration-300"
          >
            <FaGoogle size={20} />
          </button>
          <button
            type="button"
            aria-label="Sign in with Facebook"
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            <FaFacebookF size={20} />
          </button>
          <button
            type="button"
            aria-label="Sign in with GitHub"
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition duration-300"
          >
            <FaGithub size={20} />
          </button>
        </div>

        {/* Create Account Link */}
        <div className="text-center">
          <span className="text-sm text-gray-600">Don't have an account? </span>
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
