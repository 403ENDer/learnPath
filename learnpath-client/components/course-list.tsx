export default function CourseList({ data }: any) {
  const formatDomain = (domain: string, level: string) => {
    const levelMap: Record<string, string> = {
      beginner: "Level 1",
      intermediate: "Level 2",
      advanced: "Level 3",
    };

    const formattedLevel = levelMap[level.toLowerCase()] || "";
    const formattedDomain = domain
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return ` ${formattedDomain} Course - ${formattedLevel}`.trim();
  };

  const formatLevel = (level: string) => {
    return level.charAt(0).toUpperCase() + level.slice(1);
  };

  if (!data || !data._id) {
    return <p>No course data available.</p>;
  }

  const link = `/course/${data._id}`;

  return (
    <div className="mt-4 space-y-4 w-full">
      <a
        href={link}
        className="block w-full bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
      >
        <div className="text-xs text-green-600 font-medium mb-1">
          {data.level ? formatLevel(data.level) : "Unknown Level"}
        </div>
        <h3 className="font-bold">
          {data.domain
            ? formatDomain(data.domain, data.level)
            : "Unknown Domain"}
        </h3>

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
          <span>{data?.length || 0} modules</span>
        </div>

        <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-gray-500 h-1.5 rounded-full"
            style={{ width: "0%" }}
          ></div>
        </div>
      </a>
    </div>
  );
}
