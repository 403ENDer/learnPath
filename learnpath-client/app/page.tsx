"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import CourseSelector from "@/components/course-selector";
import useAuthStore from "@/store/authstore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { dataStore } from "@/store/courseData";
import "../api/axios";
import CourseList from "@/components/course-list";

export default function HomePage() {
  const store: any = useAuthStore();
  const router = useRouter();
  const userData: any = dataStore();
  const user = store.user;

  useEffect(() => {
    if (!userData.courses) {
      userData.getCourses();
    }
  }, [userData.courses]);

  return (
    <div className="flex min-h-screen flex-col">
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
          {userData.courses && userData.courses.length > 0 && (
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

              {userData.courses.map((item: any) => (
                <CourseList key={item._id} data={item} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
