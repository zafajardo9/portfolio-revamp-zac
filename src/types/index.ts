export interface WorkExperience {
    title: string
    company: string
    period: string
    description: string[]
}

export interface Interest {
    title: string
    description: string
}

export interface Project {
    title: string
    description: string
    tech: string[]
    image: string
    liveUrl?: string
    githubUrl?: string
    isPrivate?: boolean
    status?: "completed" | "ongoing"
} 