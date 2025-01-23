"use client"

import { Button } from "@/components/ui/button"
import { socialLinks } from "@/data/content"
import { useScrollTo } from "@/hooks/useScrollTo"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose } from "react-icons/io5"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
    const scrollTo = useScrollTo()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

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

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
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
                            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-background"
                            asChild
                        >
                            <a href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
                                Resume
                            </a>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-background transition-colors"
                    >
                        {isMenuOpen ? (
                            <IoClose className="h-6 w-6" />
                        ) : (
                            <RxHamburgerMenu className="h-6 w-6" />
                        )}
                    </button>

                    {/* Mobile Menu Dropdown */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-20 right-4 w-48 bg-background border-2 border-secondary rounded-lg shadow-lg md:hidden"
                            >
                                <div className="py-2 px-4 space-y-3">
                                    <button
                                        onClick={() => {
                                            scrollTo("projects")
                                            toggleMenu()
                                        }}
                                        className="block w-full text-left py-2 text-secondary hover:text-accent transition-colors"
                                    >
                                        Projects
                                    </button>
                                    <button
                                        onClick={() => {
                                            scrollTo("experience")
                                            toggleMenu()
                                        }}
                                        className="block w-full text-left py-2 text-secondary hover:text-accent transition-colors"
                                    >
                                        Experience
                                    </button>
                                    <button
                                        onClick={() => {
                                            scrollTo("contact")
                                            toggleMenu()
                                        }}
                                        className="block w-full text-left py-2 text-secondary hover:text-accent transition-colors"
                                    >
                                        Contact
                                    </button>
                                    <div className="pt-2 border-t border-secondary/20">
                                        <Button
                                            variant="outline"
                                            className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-background"
                                            asChild
                                            onClick={toggleMenu}
                                        >
                                            <a href={socialLinks.resume} target="_blank" rel="noopener noreferrer">
                                                Resume
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    )
} 