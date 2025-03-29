"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Course } from "@/lib/data/course-types";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface CourseSidebarProps {
  course: Course;
}

export default function CourseSidebar({ course }: CourseSidebarProps) {
  const [activeModule, setActiveModule] = useState<string | null>(
    course.modules.length > 0 ? course.modules[0].id : null
  );

  return (
    <Sidebar className="border-r border-gray-200 w-80 min-w-80">
      <SidebarHeader className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">
            0%
          </div>
          <span className="text-xs">Completed</span>
        </div>
        <Link
          href="#"
          className="mt-2 inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          <span className="mr-2">Start Course</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {course.modules.map((module, moduleIndex) => (
            <div key={module.id} className="mb-4">
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() =>
                    setActiveModule(
                      module.id === activeModule ? null : module.id
                    )
                  }
                  className={cn(
                    "flex items-center justify-between font-medium",
                    module.id === activeModule
                      ? "text-gray-900"
                      : "text-gray-600"
                  )}
                >
                  <div className="flex items-center">
                    <div className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">
                      {moduleIndex + 1}
                    </div>
                    <span>{module.title}</span>
                  </div>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      module.id === activeModule ? "rotate-90" : ""
                    )}
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>

              {module.id === activeModule && (
                <div className="ml-8 mt-2 space-y-1">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <Link
                      key={lesson.id}
                      href={`#${lesson.id}`}
                      className="flex items-center py-2 px-3 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                    >
                      <div className="bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">
                        {lessonIndex + 1}
                      </div>
                      <span>{lesson.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
