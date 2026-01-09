"use client";

import { CustomCursor } from "@/components/ui/custom-cursor";
import { AnimatedBackground } from "@/components/ui/animated-background";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <CustomCursor />
            <AnimatedBackground />
            <div className="relative z-10">
                {children}
            </div>
        </>
    );
};
