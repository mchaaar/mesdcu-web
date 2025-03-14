"use client";
import { useState } from "react";

export default function useSubscribe() {
  const [loading, setLoading] = useState(false);

  async function subscribe(userId, productId) {
    setLoading(true);
    console.log("Starting subscription...");
    console.log("UserId:", userId, "ProductId:", productId);
    try {
      const token = localStorage.getItem("token");
      console.log("Token retrieved:", token);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/subscriptions/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
          body: JSON.stringify({ userId, productId }),
        }
      );
      console.log("Fetch response:", response);
      if (!response.ok) {
        console.error("Subscription request failed with status:", response.status);
        throw new Error("Subscription failed");
      }
      const data = await response.json();
      console.log("Subscription successful, response data:", data);
      return data;
    } catch (error) {
      console.error("Error during subscription:", error);
      throw error;
    } finally {
      console.log("Subscription request finished.");
      setLoading(false);
    }
  }

  return { subscribe, loading };
}
