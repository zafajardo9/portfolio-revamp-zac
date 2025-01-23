"use client"

import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin, FaFacebook, FaPhone, FaArrowUp } from "react-icons/fa"
import Link from "next/link"

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-background flex justify-center items-center">
            <div className="container px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Left side - Name and Back to Top */}
                    <div className="space-y-4">

                        <Button
                            variant="ghost"
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-secondary hover:font-bold"
                        >
                            <FaArrowUp className="w-4 h-4" />
                            Back to Top
                        </Button>
                    </div>

                    {/* Right side - Social Links */}
                    <div className="space-y-4">
                        <div className="flex gap-6">
                            <Link
                                href="https://github.com/zafajardo9"
                                target="_blank"
                                className="text-secondary hover:text-accent transition-colors"
                            >
                                <FaGithub className="w-6 h-6" />
                            </Link>
                            <Link
                                href="https://linkedin.com/in/zafajardo9/"
                                target="_blank"
                                className="text-secondary hover:text-accent transition-colors"
                            >
                                <FaLinkedin className="w-6 h-6" />
                            </Link>
                            <Link
                                href="https://facebook.com/zafajardo"
                                target="_blank"
                                className="text-secondary hover:text-accent transition-colors"
                            >
                                <FaFacebook className="w-6 h-6" />
                            </Link>
                            <Link
                                href="tel:+639935792500"
                                className="text-secondary hover:text-accent transition-colors"
                            >
                                <FaPhone className="w-6 h-6" />
                            </Link>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Phone: +63 9935792500
                        </p>
                    </div>
                </div>

                <div className="pt-8 flex justify-center items-center w-full">
                    <h2 className="text-secondary font-figtree font-bold tracking-tight w-full text-center
                        text-[clamp(3rem,12vw,7rem)]"
                    >
                        Zackery Alline Fajardo
                    </h2>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8">
                    <p className="text-sm text-center text-muted-foreground">
                        © {new Date().getFullYear()}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer >
    )
} 