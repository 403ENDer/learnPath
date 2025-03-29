export interface Lesson {
  id: string
  title: string
  order: number
  completed?: boolean
}

export interface Module {
  id: string
  title: string
  lessons: Lesson[]
}

export interface Course {
  id: string
  slug: string
  title: string
  difficulty: "beginner" | "intermediate" | "advanced"
  modules: Module[]
}

