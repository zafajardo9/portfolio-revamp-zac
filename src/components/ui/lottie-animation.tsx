"use client"

import Lottie from "lottie-react"
import { cn } from "@/lib/utils"

interface LottieAnimationProps {
    animationData: object
    className?: string
    loop?: boolean
}

export function LottieAnimation({
    animationData,
    className,
    loop = true
}: LottieAnimationProps) {
    return (
        <div className={cn("w-full h-full", className)}>
            <Lottie
                animationData={animationData}
                loop={loop}
                style={{ width: '100%', height: '100%' }}
                rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />
        </div>
    )
}

// Add a default export for dynamic import
export default LottieAnimation 