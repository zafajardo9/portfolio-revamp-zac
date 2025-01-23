"use client"

import { motion } from "framer-motion"

export default function BackgroundGradient() {
    return (
        <div className="fixed inset-0 -z-[1] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="w-[1200px] h-[1200px] rounded-full bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 blur-[120px]"
                    animate={{
                        rotate: 360,
                        scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                        rotate: {
                            repeat: Infinity,
                            duration: 60,
                            ease: "linear"
                        },
                        scale: {
                            repeat: Infinity,
                            duration: 20,
                            ease: "easeInOut"
                        }
                    }}
                />
                <motion.div
                    className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-l from-accent/10 via-primary/10 to-secondary/10 blur-[120px]"
                    animate={{
                        rotate: -360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        rotate: {
                            repeat: Infinity,
                            duration: 50,
                            ease: "linear"
                        },
                        scale: {
                            repeat: Infinity,
                            duration: 25,
                            ease: "easeInOut"
                        }
                    }}
                />
            </div>
        </div>
    )
} 