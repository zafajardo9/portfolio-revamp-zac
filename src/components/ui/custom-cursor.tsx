"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <motion.div
            className={cn(
                "fixed left-0 top-0 z-[9999] pointer-events-none flex items-center justify-center",
                !isVisible && "opacity-0"
            )}
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
        >
            <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full border border-primary/50 bg-primary/20 backdrop-blur-sm" />
                <div className="absolute inset-center w-2 h-2 bg-primary rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.2, 0.5]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -inset-2 rounded-full border border-primary/20"
                />
            </div>
        </motion.div>
    );
};
