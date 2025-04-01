"use client";
import logo from "../../public/assets/name-logo.png";
import Image from "next/image";
import useAuthStore from "@/store/authstore";
import { useRouter } from "next/navigation";

export default function Login() {
  const store: any = useAuthStore();
  const router = useRouter();
  async function handleLogin() {
    await store.login(router);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-3xl">
        {/* Left Side - Google Button */}
        <div className="flex flex-col items-center justify-center w-1/2 p-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Sign in to Continue
          </h2>
          <p className="text-sm text-gray-500 mb-8 text-center">
            Use your Google account to sign in and get started.
          </p>

          {/* Google Sign-in Button */}
          <button
            onClick={handleLogin}
            className="flex items-center justify-center w-full border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition duration-200"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
        </div>

        {/* Right Side - Company Logo */}
        <div className="flex items-center justify-center w-1/2 ">
          <div className="flex flex-col items-center">
            <Image src={logo} alt="Company Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
