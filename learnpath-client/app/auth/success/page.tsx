"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/authstore";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";

const AuthSuccess = () => {
  const router = useRouter();
  const store: any = useAuthStore();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      router.push("/");
      store.setToken(token);
    } else {
      toast.error("Something went wrong, try again!", {
        style: {
          background: "#f0f9ff",
          color: "#dc2626",
          padding: "8px 12px",
          fontSize: "19px",
          width: "auto",
          minWidth: "auto",
        },
      });

      router.push("/login");
    }
  }, [router]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-70 z-50">
      <Spinner className="text-blue-400 w-8 h-8" />
      <span className="text-lg font-semibold text-gray-700">
        &nbsp;&nbsp;&nbsp;Logging in...
      </span>
    </div>
  );
};

export default AuthSuccess;
