"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useRegister() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function register({ first_name, last_name, email, password, phone }) {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
          phone,
        }),
      });
      if (!res.ok) {
        throw new Error("Registration failed");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return { register, loading };
}
    