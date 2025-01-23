"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { RiComputerLine } from "react-icons/ri"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from 'next/dynamic'
import privateAnimation from "@/assets/lottie/private.json"
import { cn } from "@/lib/utils"
import { projects, DEFAULT_IMAGE_URL } from "@/data/content"
import type { Project } from "@/types"

// Dynamically import LottieAnimation with SSR disabled
const LottieAnimation = dynamic(() => import('@/components/ui/lottie-animation').then(mod => mod.LottieAnimation), {
    ssr: false
})

export default function Projects() {
    const [isLoading, setIsLoading] = useState(false)
    const [visibleProjects, setVisibleProjects] = useState(3)

    const loadMore = async () => {
        setIsLoading(true)
        // Simulate loading delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setVisibleProjects(prev => prev + 3)
        setIsLoading(false)
    }

    const ProjectLinks = ({ project }: { project: Project }) => {
        return (
            <div className="flex gap-4">
                {project.liveUrl && (
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 px-4 py-2 text-background hover:text-background/80"
                        asChild
                    >
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <RiComputerLine className="w-4 h-4" />
                            Live Demo
                        </a>
                    </Button>
                )}

                {project.githubUrl && !project.isPrivate ? (
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2 px-4 py-2 text-background hover:text-background/80"
                        asChild
                    >
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="w-4 h-4" />
                            GitHub
                        </a>
                    </Button>
                ) : project.isPrivate && (
                    <span className="flex items-center gap-2 text-sm text-background/80">
                        <FaGithub className="w-4 h-4" />
                        Private Repository
                    </span>
                )}
            </div>
        )
    }

    const ProjectImage = ({ project }: { project: Project }) => {
        const StatusBadge = () => {
            if (!project.status) return null;

            return (
                <div className={cn(
                    "absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium z-10",
                    project.status === "ongoing"
                        ? "bg-yellow-500/80 text-background"
                        : "bg-green-500/80 text-background"
                )}>
                    {project.status === "ongoing" ? "In Progress" : "Completed"}
                </div>
            );
        };

        // Show actual image if it exists and is not the default image
        if (project.image && project.image !== DEFAULT_IMAGE_URL) {
            return (
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                    <StatusBadge />
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            )
        }

        // Show private animation for projects with DEFAULT_IMAGE_URL
        if (project.image === DEFAULT_IMAGE_URL) {
            return (
                <div className="relative h-[300px] rounded-xl overflow-hidden bg-background/5">
                    <StatusBadge />
                    <LottieAnimation
                        animationData={privateAnimation}
                        className="p-8"
                    />
                </div>
            )
        }

        // Fallback case
        return (
            <div className="relative h-[300px] rounded-xl overflow-hidden">
                <StatusBadge />
                <Image
                    src={DEFAULT_IMAGE_URL}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
        )
    }

    return (
        <section id="projects" className="py-20 bg-accent rounded-2xl px-8 relative">
            <div className="absolute inset-0 bg-noise pointer-events-none rounded-2xl" />
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-background">Featured Projects</h2>

            <div className="space-y-24">
                <AnimatePresence mode="wait">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2
                            }}
                        >
                            <Card className="flex flex-col md:flex-row gap-8 p-6 border-none shadow-none bg-transparent">
                                {/* Project Details */}
                                <div className="flex-1 space-y-4">
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-2xl text-background">{project.title}</CardTitle>
                                        <CardDescription className="text-background/80 text-base">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="p-0">
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.1 + i * 0.1 }}
                                                    className="px-3 py-1 border border-background/30 text-background rounded-full text-sm hover:border-background transition-colors"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        <ProjectLinks project={project} />
                                    </CardContent>
                                </div>

                                {/* Project Image */}
                                <motion.div
                                    className="flex-1 relative group"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.3 }}
                                >
                                    <ProjectImage project={project} />
                                </motion.div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {visibleProjects < projects.length && (
                <div className="flex justify-center mt-16">
                    <Button
                        onClick={loadMore}
                        variant="outline"
                        className="text-accent hover:bg-background relative"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-center gap-2"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full"
                                />
                                Loading...
                            </motion.div>
                        ) : (
                            "Load More Projects"
                        )}
                    </Button>
                </div>
            )}
        </section>
    )
} 