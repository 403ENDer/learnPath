"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authstore";

const AuthSuccess = () => {
  const router = useRouter();
  const setUser = useAuthStore((state: any) => state.user);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      alert("Login successful! 🎉");
      router.push("/"); // Redirect to home
    } else {
      alert("Login failed. Please try again.");
      router.push("/login");
    }
  }, [router]);

  return <div>Processing your login...</div>;
};

export default AuthSuccess;
