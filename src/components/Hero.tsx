"use client"

import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"
import Link from "next/link"
import { WobbleCard } from "@/components/ui/wobble-card"
import Image from "next/image"
import { socialLinks, personalInfo } from "@/data/content"

export default function Hero() {
    const wobbleImages = [1, 2, 3, 4].map(num => ({
        src: `/wobble/${num}.jpg`,
        alt: `Project ${num}`
    }))

    return (
        <section id="hero" className="min-h-[90vh] px-8 py-20 flex items-center justify-between">
            <div className="flex-1 space-y-6">
                <div className="space-y-2">
                    <div>
                        <span className="text-xl text-secondary font-medium">
                            Hi, I am
                        </span>
                        <span className="ml-2 text-xl font-bold tracking-tight text-secondary">
                            {personalInfo.name}
                        </span>
                    </div>

                    <p className="text-5xl font-bold tracking-tight lg:text-7xl text-accent">
                        {personalInfo.title}
                    </p>
                </div>

                <p className="text-sm text-muted-foreground max-w-[600px]">
                    {personalInfo.bio}
                </p>

                <div className="flex gap-4 items-center">
                    <Link
                        href={socialLinks.github}
                        target="_blank"
                        className="text-secondary hover:text-accent transition-colors"
                    >
                        <FaGithub className="w-6 h-6" />
                    </Link>
                    <Link
                        href={socialLinks.linkedin}
                        target="_blank"
                        className="text-secondary hover:text-accent transition-colors"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </Link>
                    <Link
                        href={socialLinks.facebook}
                        target="_blank"
                        className="text-secondary hover:text-accent transition-colors"
                    >
                        <FaFacebook className="w-6 h-6" />
                    </Link>
                </div>

                <div className="flex gap-4 pt-4">
                    <Button
                        variant="outline"
                        className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-background"
                        asChild
                    >
                        <a href={socialLinks.resume} rel="noopener noreferrer">
                            Download CV
                        </a>
                    </Button>
                </div>
            </div>

            {/* Updated Grid of Wobble Cards */}
            <div className="hidden md:block w-[600px]">
                <div className="grid grid-cols-2 gap-4">
                    {wobbleImages.map((image, index) => (
                        <WobbleCard key={index} containerClassName="aspect-square bg-secondary/5 overflow-hidden">
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 600px) 50vw, 300px"
                                    priority={index < 2} // Load first two images immediately
                                />
                            </div>
                        </WobbleCard>
                    ))}
                </div>
            </div>
        </section>
    )
} 