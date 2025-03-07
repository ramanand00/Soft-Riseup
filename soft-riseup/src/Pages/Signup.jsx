import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

// Simulate signup (Google, Facebook, etc.)
const handleSignupWithProvider = (provider) => {
  alert(`Signing up with ${provider}`);
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Signed up with email: ${email} and password: ${password}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-600">
      <div className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-96 space-y-6">
        {/* Logo */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-600">Soft-Riseup</h1>
        </div>

        {/* Signup Box */}
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-lg text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-lg text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-lg text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Social Signup */}
          <div className="flex justify-between items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full py-2 bg-blue-500 text-white rounded-lg flex justify-center items-center gap-2 hover:bg-blue-600 transition duration-300"
              onClick={() => handleSignupWithProvider("Google")}
            >
              <FaGoogle /> Sign Up with Google
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full py-2 bg-blue-800 text-white rounded-lg flex justify-center items-center gap-2 hover:bg-blue-900 transition duration-300"
              onClick={() => handleSignupWithProvider("Facebook")}
            >
              <FaFacebookF /> Sign Up with Facebook
            </motion.button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <span className="text-sm text-gray-700">Already have an account?</span>
            <Link to="/login" className="text-sm text-blue-600 hover:underline"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
