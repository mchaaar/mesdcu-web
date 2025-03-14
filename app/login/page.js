"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import useLogin from "../../hooks/useLogin";

const MotionAnchor = motion("a");

export default function LoginPage() {
  const { login, loading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-md mx-auto mt-12 p-8 bg-white border border-gray-200 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-[#8000FF]">
        Login
      </h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8000FF]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8000FF]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full py-3 bg-[#8000FF] text-white rounded-lg hover:bg-[#6F00E6] transition"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>
      </form>

      <p className="mt-6 text-center">
        Don&apos;t have an account?{" "}
        <MotionAnchor
          href="/register"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="text-blue-600 hover:underline"
        >
          Register
        </MotionAnchor>
      </p>

      <p className="mt-2 text-center">
        <a href="/" className="text-blue-600 hover:underline">
          Back to homepage
        </a>
      </p>
    </motion.div>
  );
}
