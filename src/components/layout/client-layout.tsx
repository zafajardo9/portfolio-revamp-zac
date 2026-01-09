"use client";

import { CustomCursor } from "@/components/ui/custom-cursor";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { AnimatePresence } from "framer-motion";
import { type ReactNode, useState } from "react";

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {!isLoading && <CustomCursor />}
      <AnimatedBackground />
      <div className="relative z-10">{children}</div>

      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            onComplete={() => {
              setIsLoading(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};
