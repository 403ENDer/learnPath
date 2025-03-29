"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import CourseSelector from "@/components/course-selector";
import useAuthStore from "@/store/authstore";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const user = useAuthStore((state: any) => state.user);
  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/login");
  }
  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Banner */}

      {/* Navigation */}
      {/* <header className="bg-[#0a0e1a] text-white py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect width="24" height="24" rx="4" />
              </svg>
            </div>
            <button className="text-gray-400">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white text-sm">
                Start Here
              </a>
              <a href="#" className="text-gray-400 text-sm">
                Roadmaps
              </a>
              <a href="#" className="text-gray-400 text-sm">
                AI Tutor
              </a>
              <a href="#" className="text-gray-400 text-sm">
                Teams
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-purple-400">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </button>
            <div className="bg-purple-500 text-white rounded-md px-3 py-1 text-sm flex items-center">
              <span>Account / Teams</span>
              <svg
                className="ml-2 w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Learn anything with AI</h1>
            <p className="text-gray-600">
              Enter a topic below to generate a personalized course for it
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <CourseSelector />
          </div>

          {/* Your Courses Section */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Courses</h2>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Search your courses..."
              />
            </div>

            {/* Course List */}
            <div className="mt-4 space-y-4">
              <Link
                href="/course/backend-development"
                className="block bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
              >
                <div className="text-xs text-green-600 font-medium mb-1">
                  Beginner
                </div>
                <h3 className="font-bold">Backend Development for Beginners</h3>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <span>42 lessons</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-gray-500 h-1.5 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </Link>

              <Link
                href="/course/backend-development-2"
                className="block bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
              >
                <div className="text-xs text-green-600 font-medium mb-1">
                  Beginner
                </div>
                <h3 className="font-bold">Backend Development for Beginners</h3>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <span>35 lessons</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-gray-500 h-1.5 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
