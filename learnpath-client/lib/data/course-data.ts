import type { Course } from "./course-types"

// Sample course data
const courses: Record<string, Course> = {
  "backend-development": {
    id: "backend-development",
    slug: "backend-development",
    title: "Backend Development for Beginners",
    difficulty: "beginner",
    modules: [
      {
        id: "module-1",
        title: "Module 1: Introduction to Backend Development",
        lessons: [
          {
            id: "lesson-1-1",
            title: "What is Backend Development?",
            order: 1,
          },
          {
            id: "lesson-1-2",
            title: "Understanding Client-Server Architecture",
            order: 2,
          },
          {
            id: "lesson-1-3",
            title: "Introduction to Backend Technologies and Languages",
            order: 3,
          },
          {
            id: "lesson-1-4",
            title: "Setting up Your Development Environment (IDE, Terminal)",
            order: 4,
          },
          {
            id: "lesson-1-5",
            title: "Introduction to the Command Line Interface (CLI)",
            order: 5,
          },
          {
            id: "lesson-1-6",
            title: "Case Study: Building a Simple Blog Application (Overview)",
            order: 6,
          },
        ],
      },
      {
        id: "module-2",
        title: "Module 2: Backend Languages and Frameworks (Python & Flask)",
        lessons: [
          {
            id: "lesson-2-1",
            title: "Introduction to Python for Backend Development",
            order: 1,
          },
          {
            id: "lesson-2-2",
            title: "Python Syntax and Data Structures",
            order: 2,
          },
          {
            id: "lesson-2-3",
            title: "Introduction to Flask Framework",
            order: 3,
          },
          {
            id: "lesson-2-4",
            title: "Setting up a Flask Project",
            order: 4,
          },
          {
            id: "lesson-2-5",
            title: "Creating Routes and Handling Requests in Flask",
            order: 5,
          },
          {
            id: "lesson-2-6",
            title: "Rendering Templates with Flask",
            order: 6,
          },
        ],
      },
      {
        id: "module-3",
        title: "Module 3: Databases and Data Modeling",
        lessons: [
          {
            id: "lesson-3-1",
            title: "Introduction to Databases",
            order: 1,
          },
          {
            id: "lesson-3-2",
            title: "SQL vs NoSQL Databases",
            order: 2,
          },
          {
            id: "lesson-3-3",
            title: "Setting up SQLite with Python",
            order: 3,
          },
          {
            id: "lesson-3-4",
            title: "Basic SQL Queries",
            order: 4,
          },
        ],
      },
      {
        id: "module-4",
        title: "Module 4: API Development",
        lessons: [
          {
            id: "lesson-4-1",
            title: "Introduction to APIs",
            order: 1,
          },
          {
            id: "lesson-4-2",
            title: "RESTful API Design Principles",
            order: 2,
          },
        ],
      },
      {
        id: "module-5",
        title: "Module 5: Authentication and Authorization",
        lessons: [
          {
            id: "lesson-5-1",
            title: "User Authentication Concepts",
            order: 1,
          },
          {
            id: "lesson-5-2",
            title: "Implementing Basic Authentication",
            order: 2,
          },
        ],
      },
      {
        id: "module-6",
        title: "Module 6: Deployment and Scaling",
        lessons: [
          {
            id: "lesson-6-1",
            title: "Introduction to Web Hosting",
            order: 1,
          },
          {
            id: "lesson-6-2",
            title: "Deploying a Flask Application",
            order: 2,
          },
        ],
      },
      {
        id: "module-7",
        title: "Module 7: Testing and Debugging",
        lessons: [
          {
            id: "lesson-7-1",
            title: "Introduction to Testing",
            order: 1,
          },
          {
            id: "lesson-7-2",
            title: "Writing Unit Tests for Backend Code",
            order: 2,
          },
        ],
      },
    ],
  },
}

// Function to get course data
export function getCourseData(slug: string, difficulty = "beginner"): Course | null {
  // In a real app, you would fetch this from an API or database
  // For now, we'll just return the sample data
  return courses[slug] || null
}

