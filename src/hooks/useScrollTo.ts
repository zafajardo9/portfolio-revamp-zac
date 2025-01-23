"use client"

import { useCallback } from "react"

export const useScrollTo = () => {
    const scrollTo = useCallback((elementId: string) => {
        if (typeof window === "undefined") return

        const element = document.getElementById(elementId)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    }, [])

    return scrollTo
} 