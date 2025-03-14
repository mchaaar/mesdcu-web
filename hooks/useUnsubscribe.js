"use client";
import { useState } from "react";

export default function useUnsubscribe() {
  const [loading, setLoading] = useState(false);

  async function unsubscribe(userId, productId) {
    setLoading(true);
    console.log("Starting unsubscription...");
    console.log("UserId:", userId, "ProductId:", productId);
    try {
      const token = localStorage.getItem("token");
      console.log("Token retrieved:", token);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/subscriptions/remove`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
          body: JSON.stringify({ userId, productId }),
        }
      );
      console.log("Fetch response:", response);
      if (!response.ok) {
        console.error("Unsubscription request failed with status:", response.status);
        throw new Error("Unsubscription failed");
      }
      const data = await response.json();
      console.log("Unsubscription successful, response data:", data);
      return data;
    } catch (error) {
      console.error("Error during unsubscription:", error);
      throw error;
    } finally {
      console.log("Unsubscription request finished.");
      setLoading(false);
    }
  }

  return { unsubscribe, loading };
}
