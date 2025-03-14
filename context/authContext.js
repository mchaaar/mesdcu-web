"use client";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const login = (token, userId = null) => {
    localStorage.setItem("token", token);
    if (userId) {
      localStorage.setItem("userId", userId);
    }
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
