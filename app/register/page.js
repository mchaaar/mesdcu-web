"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import useRegister from "../../hooks/useRegister";
import { useRouter } from "next/navigation";

const MotionAnchor = motion("a");

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, loading } = useRegister();
  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await register({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        phone,
      });
      router.push("/login");
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
        Register
      </h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8000FF]"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8000FF]"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8000FF]"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
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
          {loading ? "Registering..." : "Register"}
        </motion.button>
      </form>

      <p className="mt-6 text-center">
        Already have an account?{" "}
        <MotionAnchor
          href="/login"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="text-blue-600 hover:underline"
        >
          Login
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
