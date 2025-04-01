"use client";
import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
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
  setToken: async (token: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", jwtDecode(token));
    return;
  },
  checkAuth: async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return true;
      }
      const url = process.env.NEXT_PUBLIC_API_URL;
      const checkToken = await axios.get(`${url}/api/auth/verifyJWT`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ user: jwtDecode(token) });
    } catch (err) {
      console.error("Error checking auth:", err);
    }
  },
}));

export default useAuthStore;
