"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/data/course-types";

interface CourseContentProps {
  course: Course;
}

export default function CourseContent({ course }: CourseContentProps) {
  const [startedLessons, setStartedLessons] = useState<Record<string, boolean>>(
    {}
  );

  const handleStartLesson = (lessonId: string) => {
    setStartedLessons((prev) => ({
      ...prev,
      [lessonId]: true,
    }));
  };

  return (
    <main className="flex-1 p-8 overflow-y-auto w-full">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">{course.title}</h1>
          <p className="text-sm text-gray-500">{course.difficulty}</p>
        </div>

        {course.modules.map((module) => (
          <div key={module.id} className="mb-12">
            <h2 className="text-xl font-bold mb-4">{module.title}</h2>

            <div className="space-y-4">
              {module.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  id={lesson.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">
                        {lesson.order}
                      </div>
                      <h3 className="font-medium">{lesson.title}</h3>
                    </div>

                    <Button
                      onClick={() => handleStartLesson(lesson.id)}
                      variant={
                        startedLessons[lesson.id] ? "outline" : "default"
                      }
                      className={
                        startedLessons[lesson.id]
                          ? "border-green-500 text-green-500"
                          : ""
                      }
                    >
                      {startedLessons[lesson.id] ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Started
                        </>
                      ) : (
                        <>
                          Start <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
