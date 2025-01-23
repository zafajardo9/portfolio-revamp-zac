"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { socialLinks } from "@/data/content"
import { useScrollTo } from "@/hooks/useScrollTo"

export default function Navbar() {
    const scrollTo = useScrollTo()

    return (
        <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="relative">
                <div className="absolute inset-0 bg-noise pointer-events-none" />
                <div className="container mx-auto flex h-16 items-center justify-between px-4 relative">
                    <div className="flex items-center">
                        <button
                            onClick={() => scrollTo("hero")}
                            className="flex items-center space-x-2"
                        >
                            <span className="font-bold text-secondary">Portfolio</span>
                        </button>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={() => scrollTo("projects")}
                            className="text-secondary hover:text-accent transition-colors"
                        >
                            Projects
                        </button>
                        <button
                            onClick={() => scrollTo("experience")}
                            className="text-secondary hover:text-accent transition-colors"
                        >
                            Experience
                        </button>
                        <button
                            onClick={() => scrollTo("contact")}
                            className="text-secondary hover:text-accent transition-colors"
                        >
                            Contact
                        </button>
                        <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-background"
                            asChild
                        >
                            <a href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
                                Resume
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
} 