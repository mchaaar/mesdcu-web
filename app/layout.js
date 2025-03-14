"use client";

import "./globals.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext, AuthProvider } from "../context/authContext";

function LayoutContent({ children }) {
  const { loggedIn, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <html lang="en">
      <head>
        <title>My Next App</title>
      </head>
      <body className="bg-white text-gray-900">
        <main className="p-6">{children}</main>
        {loggedIn && (
          <button
            onClick={handleLogout}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 text-xs text-white bg-[#8000FF] rounded-full shadow hover:bg-[#6F00E6]"
          >
            Logout
          </button>
        )}
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <LayoutContent>{children}</LayoutContent>
    </AuthProvider>
  );
}
