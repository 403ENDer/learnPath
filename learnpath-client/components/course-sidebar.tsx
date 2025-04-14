"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export default function CourseSidebar({ course }: any) {
  const [activeModule, setActiveModule] = useState<string | null>(
    course.submodules.length > 0 ? course.submodules[0].id : null
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
          {course.submodules.map((submodule: any, moduleIndex: any) => (
            <div key={submodule.id} className="mb-4">
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() =>
                    setActiveModule(
                      submodule.id === activeModule ? null : submodule.id
                    )
                  }
                  className={cn(
                    "flex items-center justify-between font-medium",
                    submodule.id === activeModule
                      ? "text-gray-900"
                      : "text-gray-600"
                  )}
                >
                  <div className="flex items-center">
                    <div className="bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">
                      {moduleIndex + 1}
                    </div>
                    <span>{submodule.title}</span>
                  </div>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      submodule.id === activeModule ? "rotate-90" : ""
                    )}
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>

              {submodule.id === activeModule && (
                <div className="ml-8 mt-2 space-y-1">
                  {submodule.topics.map((topic: any, topicIndex: any) => (
                    <Link
                      key={topic.topic}
                      href={`#${topic.topic}`}
                      className="flex items-center py-2 px-3 text-sm text-gray-600 hover:bg-gray-100 rounded-md"
                    >
                      <div className="bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2">
                        {topicIndex + 1}
                      </div>
                      <span>{topic.topic}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <Button
        variant="outline"
        className="w-14 h-14 p-0 flex items-center justify-center rounded-full"
      >
        ?{/* <HelpCircle className="w-8 h-8" /> */}
      </Button>
    </Sidebar>
  );
}
