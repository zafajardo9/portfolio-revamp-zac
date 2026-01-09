"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedBackground = ({
    className,
    showRadialGradient = true,
}: {
    className?: string;
    showRadialGradient?: boolean;
}) => {
    return (
        <div
            className={cn(
                "relative flex flex-col items-center justify-center h-full w-full bg-slate-950 transition-bg overflow-hidden fixed inset-0 -z-50",
                className
            )}
        >
            <div className="absolute inset-0 opacity-50">
                <motion.div
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [0.9, 1.1, 0.9],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[20%] w-[30rem] h-[30rem] bg-violet-500/30 rounded-full blur-[100px] mix-blend-screen filter"
                />
                <motion.div
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                        x: [0, 50, -50, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[20%] right-[10%] w-[25rem] h-[25rem] bg-teal-500/20 rounded-full blur-[100px] mix-blend-screen filter"
                />
                <motion.div
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [0.8, 1, 0.8],
                        y: [0, -30, 30, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen filter"
                />
            </div>

            {showRadialGradient && (
                <div className="absolute inset-0 bg-slate-950/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            )}
        </div>
    );
};
