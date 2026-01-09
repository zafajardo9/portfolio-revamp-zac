"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const didCompleteRef = useRef(false);

  useEffect(() => {
    // Simulation logic
    // We want to reach close to 100% fairly quickly but wait for window load for the final bit
    const startedAt = performance.now();
    const minDurationMs = 2400;
    const settleAt100Ms = 650;

    const timer = window.setInterval(() => {
      setProgress((prev) => {
        if (didCompleteRef.current) return prev;
        const cap = 96;
        if (prev >= cap) return prev;

        const baseIncrement =
          prev < 25 ? 2.2 : prev < 55 ? 1.3 : prev < 75 ? 0.65 : 0.25;
        const jitter = Math.random() * 0.35;
        return Math.min(prev + baseIncrement + jitter, cap);
      });
    }, 120);

    let safetyTimeout: number | undefined;
    let completeTimeout: number | undefined;

    const waitForWindowLoad = () => {
      if (document.readyState === "complete") return Promise.resolve();
      return new Promise<void>((resolve) => {
        const handler = () => resolve();
        window.addEventListener("load", handler, { once: true });
      });
    };

    const waitForFonts = async () => {
      const fonts = document.fonts;
      if (!fonts?.ready) return;
      try {
        await fonts.ready;
      } catch {
        return;
      }
    };

    const waitForImages = async () => {
      const images = Array.from(document.images);
      if (images.length === 0) return Promise.resolve();

      const tasks = images.map(async (img) => {
        if (!(img.complete && img.naturalWidth > 0)) {
          await new Promise<void>((resolve) => {
            const done = () => resolve();
            img.addEventListener("load", done, { once: true });
            img.addEventListener("error", done, { once: true });
          });
        }

        if (typeof img.decode === "function") {
          try {
            await img.decode();
          } catch {
            return;
          }
        }
      });

      await Promise.allSettled(tasks);
    };

    const ensureMinDuration = async () => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, minDurationMs - elapsed);
      if (remaining === 0) return;
      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, remaining);
      });
    };

    const handleLoad = () => {
      if (didCompleteRef.current) return;
      didCompleteRef.current = true;

      window.clearInterval(timer);
      if (safetyTimeout) window.clearTimeout(safetyTimeout);

      void (async () => {
        await ensureMinDuration();
        setProgress(100);
        completeTimeout = window.setTimeout(onComplete, settleAt100Ms); // Slight delay at 100% before triggering complete
      })();
    };

    void (async () => {
      await Promise.all([waitForWindowLoad(), waitForFonts(), waitForImages()]);
      handleLoad();
    })();

    // Fallback safety timeout in case load event fails or is too slow
    safetyTimeout = window.setTimeout(handleLoad, 12000);

    return () => {
      window.clearInterval(timer);
      if (safetyTimeout) window.clearTimeout(safetyTimeout);
      if (completeTimeout) window.clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 text-foreground backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -120,
        filter: "blur(6px)",
        transition: { duration: 1.0, ease: "easeInOut" },
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/60 to-background" />
        <div className="absolute inset-0 bg-noise opacity-25" />
      </div>

      <div className="relative w-full max-w-2xl px-6 sm:px-10 text-center">
        <motion.h1
          className="mb-3 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Loading portfolio
        </motion.h1>

        <motion.p
          className="mb-10 text-sm sm:text-base text-muted-foreground"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Curating projects, experience, and details…
        </motion.p>

        <div className="relative h-5 sm:h-6 w-full overflow-hidden rounded-full bg-secondary/20">
          <motion.div
            className="h-full rounded-full bg-primary shadow-lg shadow-primary/20"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>

        <motion.p
          className="mt-5 text-sm font-medium text-secondary"
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          {Math.round(progress)}%
        </motion.p>
      </div>
    </motion.div>
  );
}
