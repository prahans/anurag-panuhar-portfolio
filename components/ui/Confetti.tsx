"use client";

import { useEffect, useRef } from "react";
import type { AnimationItem } from "lottie-web";

import animationData from "@/data/confetti.json";

export default function Confetti({ active }: { active: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!active || !container) return;

    let cancelled = false;
    let animation: AnimationItem | undefined;

    void import("lottie-web").then(({ default: lottie }) => {
      if (cancelled) return;

      animation = lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        // Lottie mutates its data; each mount needs its own copy.
        animationData: structuredClone(animationData),
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          focusable: false,
        },
      });
    });

    return () => {
      cancelled = true;
      animation?.destroy();
    };
  }, [active]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none h-[200px] w-[400px] max-w-full overflow-hidden"
    />
  );
}
