"use client";
import { notFound } from "next/navigation";
import CourseSidebar from "@/components/course-sidebar";
import CourseContent from "@/components/course-content";
import { dataStore } from "@/store/courseData";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

export default function CoursePage() {
  const params = useParams();
  const courseId = params?.id as string;
  const store: any = dataStore();
  const courseData = store.courseData;

  useEffect(() => {
    if (!courseData && courseId) {
      store.getCourseData(courseId);
      store.getCourses();
    }
  }, [courseData, courseId, store.getCourseDat]);

  if (!courseData) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50 bg-opacity-70 z-50">
        <Spinner className="text-blue-400 w-8 h-8" />
        <span className="text-lg font-semibold text-gray-700">
          &nbsp;&nbsp;&nbsp;Loading Course Data...
        </span>
      </div>
    );
  }
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <CourseSidebar course={courseData} />
        <CourseContent course={courseData} />
      </div>
    </div>
  );
}
