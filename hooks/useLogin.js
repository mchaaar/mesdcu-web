"use client";

import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function useLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { login: contextLogin } = useContext(AuthContext);

  async function login(email, password) {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }
      const data = await res.json();
      contextLogin(data.token);
      router.push("/dashboard");
      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return { login, loading };
}
