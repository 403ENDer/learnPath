"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, ExternalLink, Play, ThumbsUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import VideoPlayer from "@/components/video-player";

// Mock data - in a real app, this would come from your API
const mockRecommendations = {
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

export default function RecommendationList() {
  const [userPreferences, setUserPreferences] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [completedVideos, setCompletedVideos] = useState<string[]>([]);
  const [inProgressVideos, setInProgressVideos] = useState<
    Record<string, number>
  >({});

  useEffect(() => {
    // Load user preferences from localStorage
    const storedPreferences = localStorage.getItem("userPreferences");
    if (storedPreferences) {
      const preferences = JSON.parse(storedPreferences);
      setUserPreferences(preferences);

      // Get recommendations based on career goal
      const careerRecommendations =
        mockRecommendations[
          preferences.careerGoal as keyof typeof mockRecommendations
        ] || [];
      setRecommendations(careerRecommendations);

      // If there are recommendations, set the first one as selected
      if (careerRecommendations.length > 0) {
        setSelectedVideo(careerRecommendations[0]);
      }
    }

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
  }, []);

  const markAsCompleted = (videoId: string) => {
    const updatedCompletedVideos = [...completedVideos, videoId];
    setCompletedVideos(updatedCompletedVideos);
    localStorage.setItem(
      "completedVideos",
      JSON.stringify(updatedCompletedVideos)
    );

    // Remove from in-progress if it was there
    const updatedInProgressVideos = { ...inProgressVideos };
    delete updatedInProgressVideos[videoId];
    setInProgressVideos(updatedInProgressVideos);
    localStorage.setItem(
      "inProgressVideos",
      JSON.stringify(updatedInProgressVideos)
    );
  };

  const markAsInProgress = (videoId: string, progress: number) => {
    const updatedInProgressVideos = {
      ...inProgressVideos,
      [videoId]: progress,
    };
    setInProgressVideos(updatedInProgressVideos);
    localStorage.setItem(
      "inProgressVideos",
      JSON.stringify(updatedInProgressVideos)
    );
  };

  const isCompleted = (videoId: string) => completedVideos.includes(videoId);
  const getProgress = (videoId: string) => inProgressVideos[videoId] || 0;

  if (!userPreferences) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Recommendations Yet</CardTitle>
          <CardDescription>
            Please complete the onboarding form to get personalized
            recommendations
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
          >
            Go to Onboarding
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        {selectedVideo ? (
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>{selectedVideo.title}</CardTitle>
              <CardDescription>{selectedVideo.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">{selectedVideo.level}</Badge>
                <Badge variant="outline">
                  <Clock className="mr-1 h-3 w-3" />
                  {selectedVideo.duration}
                </Badge>
                <Badge variant="outline">
                  <ThumbsUp className="mr-1 h-3 w-3" />
                  {selectedVideo.upvotes}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <VideoPlayer videoId={selectedVideo.videoId} />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex gap-2">
                {selectedVideo.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {isCompleted(selectedVideo.id) ? (
                  <Button variant="outline" disabled>
                    <Check className="mr-2 h-4 w-4" />
                    Completed
                  </Button>
                ) : (
                  <Button onClick={() => markAsCompleted(selectedVideo.id)}>
                    <Check className="mr-2 h-4 w-4" />
                    Mark as Completed
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <a
                    href={`https://www.youtube.com/watch?v=${selectedVideo.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Watch on YouTube
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>No Video Selected</CardTitle>
              <CardDescription>
                Select a video from the list to start learning
              </CardDescription>
            </CardHeader>
          </Card>
        )}
      </div>

      <div>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Your Learning Path</CardTitle>
            <CardDescription>
              Based on your {userPreferences.careerGoal.replace("-", " ")}{" "}
              career goal
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[500px]">
              <div className="px-4 py-2">
                <Tabs defaultValue="all">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-4 space-y-4">
                    {recommendations.map((video) => (
                      <div key={video.id} className="group">
                        <button
                          className={`w-full text-left p-3 rounded-lg transition-colors ${
                            selectedVideo?.id === video.id
                              ? "bg-primary/10"
                              : "hover:bg-muted"
                          }`}
                          onClick={() => setSelectedVideo(video)}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                                {video.title}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
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
                            <div className="ml-4">
                              {isCompleted(video.id) ? (
                                <Badge variant="secondary">
                                  <Check className="mr-1 h-3 w-3" />
                                  Completed
                                </Badge>
                              ) : getProgress(video.id) > 0 ? (
                                <div className="w-16">
                                  <Progress
                                    value={getProgress(video.id)}
                                    className="h-2"
                                  />
                                  <span className="text-xs text-muted-foreground mt-1 block text-center">
                                    {getProgress(video.id)}%
                                  </span>
                                </div>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="rounded-full h-8 w-8 p-0"
                                >
                                  <Play className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </button>
                        <Separator className="my-2" />
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="in-progress" className="mt-4 space-y-4">
                    {recommendations
                      .filter(
                        (video) =>
                          getProgress(video.id) > 0 && !isCompleted(video.id)
                      )
                      .map((video) => (
                        <div key={video.id} className="group">
                          <button
                            className={`w-full text-left p-3 rounded-lg transition-colors ${
                              selectedVideo?.id === video.id
                                ? "bg-primary/10"
                                : "hover:bg-muted"
                            }`}
                            onClick={() => setSelectedVideo(video)}
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                                  {video.title}
                                </h3>
                                <div className="mt-2">
                                  <Progress
                                    value={getProgress(video.id)}
                                    className="h-2"
                                  />
                                  <span className="text-xs text-muted-foreground mt-1 block">
                                    {getProgress(video.id)}% complete
                                  </span>
                                </div>
                              </div>
                              <div className="ml-4">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="rounded-full h-8 w-8 p-0"
                                >
                                  <Play className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </button>
                          <Separator className="my-2" />
                        </div>
                      ))}
                    {recommendations.filter(
                      (video) =>
                        getProgress(video.id) > 0 && !isCompleted(video.id)
                    ).length === 0 && (
                      <p className="text-center text-muted-foreground py-8">
                        No videos in progress
                      </p>
                    )}
                  </TabsContent>
                  <TabsContent value="completed" className="mt-4 space-y-4">
                    {recommendations
                      .filter((video) => isCompleted(video.id))
                      .map((video) => (
                        <div key={video.id} className="group">
                          <button
                            className={`w-full text-left p-3 rounded-lg transition-colors ${
                              selectedVideo?.id === video.id
                                ? "bg-primary/10"
                                : "hover:bg-muted"
                            }`}
                            onClick={() => setSelectedVideo(video)}
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                                  {video.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                                  {video.description}
                                </p>
                              </div>
                              <div className="ml-4">
                                <Badge variant="secondary">
                                  <Check className="mr-1 h-3 w-3" />
                                  Completed
                                </Badge>
                              </div>
                            </div>
                          </button>
                          <Separator className="my-2" />
                        </div>
                      ))}
                    {recommendations.filter((video) => isCompleted(video.id))
                      .length === 0 && (
                      <p className="text-center text-muted-foreground py-8">
                        No completed videos yet
                      </p>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
