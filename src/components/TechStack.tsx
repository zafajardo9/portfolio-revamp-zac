"use client"

import { Card } from "@/components/ui/card"
import { FaReact, FaNodeJs, FaPython, FaDocker, FaCreditCard, FaLayerGroup } from "react-icons/fa"
// SiZustand might absent, using FaLayerGroup as fallback for Zustand if needed, but let's try SiZustand if valid or just use FaLayerGroup immediately to be safe since I can't check efficiently.
// Actually, looking at docs, SiSimpleicons usually has most things. But Zustand is newer. 
// I'll be safe and use FaLayerGroup for Zustand to avoid another round trip error.
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiPhp, SiLaravel, SiMysql, SiAmazon, SiRedux, SiDart, SiGithub, SiPostman, SiZod, SiJira } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

interface TechItem {
    name: string
    icon: React.ReactNode
    category: 'frontend' | 'backend' | 'database' | 'tools'
}

export default function TechStack() {
    const technologies: TechItem[] = [
        { name: 'React', icon: <FaReact className="w-8 h-8" />, category: 'frontend' },
        { name: 'Next.js', icon: <TbBrandNextjs className="w-8 h-8" />, category: 'frontend' },
        { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" />, category: 'frontend' },
        { name: 'Tailwind', icon: <SiTailwindcss className="w-8 h-8" />, category: 'frontend' },
        { name: 'Redux', icon: <SiRedux className="w-8 h-8" />, category: 'frontend' },
        { name: 'Zustand', icon: <FaLayerGroup className="w-8 h-8" />, category: 'frontend' },
        { name: 'Dart', icon: <SiDart className="w-8 h-8" />, category: 'frontend' },
        { name: 'Zod', icon: <SiZod className="w-8 h-8" />, category: 'tools' },

        { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, category: 'backend' },
        { name: 'PHP', icon: <SiPhp className="w-8 h-8" />, category: 'backend' },
        { name: 'Laravel', icon: <SiLaravel className="w-8 h-8" />, category: 'backend' },
        { name: 'Python', icon: <FaPython className="w-8 h-8" />, category: 'backend' },

        { name: 'MySQL', icon: <SiMysql className="w-8 h-8" />, category: 'database' },
        { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, category: 'database' },
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8" />, category: 'database' },

        { name: 'AWS', icon: <SiAmazon className="w-8 h-8" />, category: 'tools' },
        { name: 'Docker', icon: <FaDocker className="w-8 h-8" />, category: 'tools' },
        { name: 'GitHub', icon: <SiGithub className="w-8 h-8" />, category: 'tools' },
        { name: 'Postman', icon: <SiPostman className="w-8 h-8" />, category: 'tools' },
        { name: 'Jira', icon: <SiJira className="w-8 h-8" />, category: 'tools' },
        { name: 'Xendit', icon: <FaCreditCard className="w-8 h-8" />, category: 'backend' },
    ]

    return (
        <section className="py-20 relative">
            <div className="absolute inset-0 pointer-events-none" />
            <div className="px-8 space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight text-secondary">Skills</h2>
                    <p className="text-muted-foreground">Technologies & Tools I work with</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {technologies.map((tech, index) => (
                        <Card
                            key={index}
                            className="p-4 flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-noise pointer-events-none opacity-50" />
                            <div className="relative text-secondary group-hover:text-accent transition-colors">
                                {tech.icon}
                            </div>
                            <span className="text-sm font-medium text-secondary/80 group-hover:text-accent transition-colors">
                                {tech.name}
                            </span>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
} 