"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { dataStore } from "@/store/courseData";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

export default function CourseSidebar({ course }: any) {
  const [activeModule, setActiveModule] = useState<string | null>(
    course.submodules.length > 0 ? course.submodules[0].id : null
  );
  const [open, setOpen] = useState(false);
  const store: any = dataStore();

  const handleRefresh = () => {
    setOpen(false);
    const flag = store.reframeRoadmap({ courseId: course.id });
    if (flag) {
      toast.success("Roadmap refreshed successfully");
    } else {
      toast.error("Failed to refresh the roadmap");
    }
  };
  function calculateCourseProgress(course: any) {
    let total = 0;
    let completed = 0;

    course.submodules.forEach((module: any) => {
      module.topics.forEach((subtopic: any) => {
        total += 1;
        if (subtopic.isTopicCompleted) {
          completed += 1;
        }
      });
    });

    const percentage = total > 0 ? (completed / total) * 100 : 0;

    return {
      percentage: percentage.toFixed(0),
    };
  }

  const { percentage } = calculateCourseProgress(course);

  return (
    <Sidebar className="border-r border-gray-200 w-80 min-w-80">
      <SidebarHeader className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="bg-yellow-100 text-yellow-800 rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">
            {percentage}%
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
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="ml-1.5 mr-1.5">
              Want to reframe roadmap?
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Reframing Roadmap</DialogTitle>
              <DialogDescription className="text-black">
                Your completed topics are safe and sound! We’ll update the
                incomplete ones with something new. Ready to refresh?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="destructive">
                  Close
                </Button>
              </DialogClose>

              <Button type="button" variant="default" onClick={handleRefresh}>
                Refresh
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </SidebarContent>
    </Sidebar>
  );
}
