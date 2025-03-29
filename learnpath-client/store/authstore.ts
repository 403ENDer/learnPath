"use client";
import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  user: null,
  login: async (router: any) => {
    try {
      const url = process.env.NEXT_PUBLIC_API_URL;
      window.location.href = `${url}/api/auth/google`;
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  },
  logout: (router: any) => {
    localStorage.removeItem("token");
    set({ user: null });
    router.push("/login");
  },
}));

export default useAuthStore;
