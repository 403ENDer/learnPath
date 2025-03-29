import { notFound } from "next/navigation";
import CourseSidebar from "@/components/course-sidebar";
import CourseContent from "@/components/course-content";
import { getCourseData } from "@/lib/data/course-data";

interface CoursePageProps {
  params: {
    slug: string;
  };
  searchParams: {
    difficulty?: string;
  };
}

// ✅ Mark the component as async
export default async function CoursePage({
  params,
  searchParams,
}: CoursePageProps) {
  const { slug } = params;

  // ✅ Await searchParams properly
  const difficulty = searchParams?.difficulty || "beginner";
  console.log(params);
  // Get course data based on slug
  const courseData = await getCourseData(slug, difficulty);

  if (!courseData) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Banner */}
      <div className="bg-white-400 py-4 px-6 flex justify-between items-center">
        <div className="flex-1">
          <p className="text-sm font-medium">10% of the daily limit used</p>
        </div>
      </div>

      <div className="flex flex-1">
        <CourseSidebar course={courseData} />
        <CourseContent course={courseData} />
      </div>
    </div>
  );
}
