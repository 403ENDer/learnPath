"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronsUpDown, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { dataStore } from "@/store/courseData";
import { useLoader } from "@/app/context/loaderContext";

// Sample course topics
const courseTopics = [
  { value: "backend-development", label: "Backend Development" },
  { value: "frontend-development", label: "Frontend Development" },
  { value: "data-science", label: "Data Science" },
  { value: "machine-learning", label: "Machine Learning" },
];

export default function CourseSelector() {
  const router = useRouter();
  const store: any = dataStore();
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("beginner");
  const [tailorCourse, setTailorCourse] = useState(false);
  const { loading, setLoading } = useLoader();

  const handleGenerateCourse = async () => {
    setLoading(true);
    if (topic) {
      const data = await store.generateCourse(router, {
        domain: topic,
        level: difficulty,
      });
      setLoading(false);
      router.push(`/course/${data.id}`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="topic" className="block text-sm font-medium">
          Course Topic
        </label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between h-10"
            >
              {topic
                ? courseTopics.find(
                    (courseTopic) => courseTopic.value === topic
                  )?.label
                : "e.g., Backend Development"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
            <Command>
              <CommandInput placeholder="Search course topics..." />
              <CommandList>
                <CommandEmpty>No course topic found.</CommandEmpty>
                <CommandGroup>
                  {courseTopics.map((courseTopic) => (
                    <CommandItem
                      key={courseTopic.value}
                      value={courseTopic.value}
                      onSelect={(currentValue: any) => {
                        setTopic(currentValue === topic ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          topic === courseTopic.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {courseTopic.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Difficulty Level</label>
        <div className="flex space-x-2">
          <Button
            type="button"
            variant={difficulty === "beginner" ? "default" : "outline"}
            className={`flex-1 ${
              difficulty === "beginner" ? "bg-gray-900 text-white" : ""
            }`}
            onClick={() => setDifficulty("beginner")}
          >
            Beginner
          </Button>
          <Button
            type="button"
            variant={difficulty === "intermediate" ? "default" : "outline"}
            className={`flex-1 ${
              difficulty === "intermediate" ? "bg-gray-900 text-white" : ""
            }`}
            onClick={() => setDifficulty("intermediate")}
          >
            Intermediate
          </Button>
          <Button
            type="button"
            variant={difficulty === "advanced" ? "default" : "outline"}
            className={`flex-1 ${
              difficulty === "advanced" ? "bg-gray-900 text-white" : ""
            }`}
            onClick={() => setDifficulty("advanced")}
          >
            Advanced
          </Button>
        </div>
      </div>
      <Button
        className="w-full bg-gray-700 hover:bg-gray-900 text-white"
        onClick={handleGenerateCourse}
      >
        <Wand2 className="mr-2 h-4 w-4" /> Generate Course
      </Button>
    </div>
  );
}
