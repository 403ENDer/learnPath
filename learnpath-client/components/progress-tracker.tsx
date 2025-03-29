"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Trophy } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function ProgressTracker() {
  const [completedVideos, setCompletedVideos] = useState<string[]>([]);
  const [inProgressVideos, setInProgressVideos] = useState<
    Record<string, number>
  >({});
  const [allVideos, setAllVideos] = useState<any[]>([]);

  useEffect(() => {
    // Load completed videos from localStorage
    const storedCompletedVideos = localStorage.getItem("completedVideos");
    if (storedCompletedVideos) {
      setCompletedVideos(JSON.parse(storedCompletedVideos));
    }

    // Load in-progress videos from localStorage
    const storedInProgressVideos = localStorage.getItem("inProgressVideos");
    if (storedInProgressVideos) {
      setInProgressVideos(JSON.parse(storedInProgressVideos));
    }

    // Get all videos from mock data
    // In a real app, this would come from your API
    const mockData = {
      "frontend-developer": [
        {
          id: "1",
          title: "HTML & CSS Crash Course",
          description:
            "Learn the basics of HTML and CSS to build your first website",
          videoId: "hu-q2zYwEYs",
          duration: "2h 15m",
          level: "Beginner",
          tags: ["HTML", "CSS", "Web Development"],
          upvotes: 1245,
        },
        {
          id: "2",
          title: "JavaScript Fundamentals",
          description: "Master the core concepts of JavaScript programming",
          videoId: "W6NZfCO5SIk",
          duration: "1h 40m",
          level: "Beginner",
          tags: ["JavaScript", "Web Development"],
          upvotes: 982,
        },
        {
          id: "3",
          title: "React.js Crash Course",
          description: "Build modern user interfaces with React",
          videoId: "w7ejDZ8SWv8",
          duration: "1h 48m",
          level: "Intermediate",
          tags: ["React", "JavaScript", "Web Development"],
          upvotes: 1567,
        },
        {
          id: "4",
          title: "CSS Flexbox & Grid",
          description: "Master modern CSS layout techniques",
          videoId: "JJSoEo8JSnc",
          duration: "1h 20m",
          level: "Intermediate",
          tags: ["CSS", "Web Development"],
          upvotes: 876,
        },
        {
          id: "5",
          title: "TypeScript for React Developers",
          description: "Add type safety to your React applications",
          videoId: "Z5iWr6Srsj8",
          duration: "1h 30m",
          level: "Advanced",
          tags: ["TypeScript", "React", "Web Development"],
          upvotes: 1123,
        },
      ],
      "backend-developer": [
        {
          id: "6",
          title: "Node.js Crash Course",
          description: "Build server-side applications with JavaScript",
          videoId: "fBNz5xF-Kx4",
          duration: "1h 30m",
          level: "Beginner",
          tags: ["Node.js", "JavaScript", "Backend"],
          upvotes: 1345,
        },
        {
          id: "7",
          title: "Express.js Tutorial",
          description: "Create RESTful APIs with Express.js",
          videoId: "L72fhGm1tfE",
          duration: "1h 10m",
          level: "Intermediate",
          tags: ["Express.js", "Node.js", "Backend"],
          upvotes: 987,
        },
      ],
      "data-scientist": [
        {
          id: "8",
          title: "Python for Data Science",
          description: "Learn Python fundamentals for data analysis",
          videoId: "LHBE6Q9XlzI",
          duration: "2h 20m",
          level: "Beginner",
          tags: ["Python", "Data Science"],
          upvotes: 1876,
        },
        {
          id: "9",
          title: "Machine Learning Basics",
          description: "Introduction to machine learning algorithms",
          videoId: "aircAruvnKk",
          duration: "1h 45m",
          level: "Intermediate",
          tags: ["Machine Learning", "Data Science"],
          upvotes: 2145,
        },
      ],
    };

    // Flatten all videos from all categories
    const allVideosArray = Object.values(mockData).flat();
    setAllVideos(allVideosArray);
  }, []);

  const getTotalProgress = () => {
    if (allVideos.length === 0) return 0;
    return Math.round((completedVideos.length / allVideos.length) * 100);
  };

  const getCompletedByLevel = (level: string) => {
    const levelVideos = allVideos.filter((video) => video.level === level);
    const completedLevelVideos = levelVideos.filter((video) =>
      completedVideos.includes(video.id)
    );
    return {
      completed: completedLevelVideos.length,
      total: levelVideos.length,
      percentage:
        levelVideos.length > 0
          ? Math.round((completedLevelVideos.length / levelVideos.length) * 100)
          : 0,
    };
  };

  const beginnerStats = getCompletedByLevel("Beginner");
  const intermediateStats = getCompletedByLevel("Intermediate");
  const advancedStats = getCompletedByLevel("Advanced");

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Learning Progress</CardTitle>
          <CardDescription>Track your journey and achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm text-muted-foreground">
                  {getTotalProgress()}%
                </span>
              </div>
              <Progress value={getTotalProgress()} className="h-2" />
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium">
                    Beginner
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold">
                    {beginnerStats.completed}/{beginnerStats.total}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    courses completed
                  </p>
                  <Progress
                    value={beginnerStats.percentage}
                    className="h-2 mt-3"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium">
                    Intermediate
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold">
                    {intermediateStats.completed}/{intermediateStats.total}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    courses completed
                  </p>
                  <Progress
                    value={intermediateStats.percentage}
                    className="h-2 mt-3"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm font-medium">
                    Advanced
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-2xl font-bold">
                    {advancedStats.completed}/{advancedStats.total}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    courses completed
                  </p>
                  <Progress
                    value={advancedStats.percentage}
                    className="h-2 mt-3"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Course History</CardTitle>
          <CardDescription>
            View your completed and in-progress courses
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="completed">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            </TabsList>
            <TabsContent value="completed" className="p-4">
              <ScrollArea className="h-[300px]">
                {completedVideos.length > 0 ? (
                  <div className="space-y-4">
                    {allVideos
                      .filter((video) => completedVideos.includes(video.id))
                      .map((video) => (
                        <div key={video.id} className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">{video.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {video.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {video.level}
                              </Badge>
                              <span className="text-xs text-muted-foreground flex items-center">
                                <Clock className="mr-1 h-3 w-3" />
                                {video.duration}
                              </span>
                            </div>
                          </div>
                          <Badge variant="secondary">
                            <Trophy className="mr-1 h-3 w-3" />
                            Completed
                          </Badge>
                          <Separator className="my-2" />
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      No completed courses yet
                    </p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="in-progress" className="p-4">
              <ScrollArea className="h-[300px]">
                {Object.keys(inProgressVideos).length > 0 ? (
                  <div className="space-y-4">
                    {allVideos
                      .filter(
                        (video) =>
                          inProgressVideos[video.id] &&
                          !completedVideos.includes(video.id)
                      )
                      .map((video) => (
                        <div key={video.id} className="flex items-start gap-4">
                          <div className="flex-1">
                            <h3 className="font-medium">{video.title}</h3>
                            <div className="mt-2">
                              <Progress
                                value={inProgressVideos[video.id]}
                                className="h-2"
                              />
                              <span className="text-xs text-muted-foreground mt-1 block">
                                {inProgressVideos[video.id]}% complete
                              </span>
                            </div>
                          </div>
                          <Separator className="my-2" />
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      No courses in progress
                    </p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
