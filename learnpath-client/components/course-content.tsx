"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

export default function CourseContent({ course }: any) {
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
        </div>

        {course.submodules.map((module: any) => (
          <div key={module.id} className="mb-12">
            <h2 className="text-xl font-bold mb-4">{module.title}</h2>

            <div className="space-y-4">
              {module.topics.map((topic: any, index: any) => (
                <div
                  key={topic.topic}
                  id={topic.topic}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">
                        {index + 1}
                      </div>
                      <h3 className="font-medium">{topic.topic}</h3>
                    </div>

                    <Button
                      onClick={() => handleStartLesson(topic.topic)}
                      variant={
                        startedLessons[topic.topic] ? "outline" : "default"
                      }
                      className={
                        startedLessons[topic.topic]
                          ? "border-green-500 text-green-500"
                          : ""
                      }
                    >
                      {startedLessons[topic.topic] ? (
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
                  {/* 
                  {startedLessons[topic.topic] && (
                    <div className="mt-4 space-y-2">
                      {topic.topics.map((subtopic: any) => (
                        <a
                          key={subtopic.subtopic}
                          href={subtopic.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:underline"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {subtopic.topic}
                        </a>
                      ))}
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
