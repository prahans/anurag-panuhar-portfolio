"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type ScrollerStyle = CSSProperties & {
  "--animation-direction": "normal" | "reverse";
  "--animation-duration": string;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const style: ScrollerStyle = {
    "--animation-direction": direction === "left" ? "normal" : "reverse",
    "--animation-duration": speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s",
  };

  return (
    <div
      style={style}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        className={cn(
          "flex min-w-full w-max shrink-0 flex-nowrap gap-16 py-4",
          items.length > 0 && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
        )}
      >
        {[false, true].flatMap((duplicate) =>
          items.map((item, index) => (
            <li
              key={String(duplicate) + "-" + index}
              aria-hidden={duplicate || undefined}
              className={cn(
                "relative w-[90vw] max-w-full shrink-0 rounded-2xl border border-b-0 border-slate-800 p-5 md:w-[60vw] md:p-16",
                duplicate && "motion-reduce:hidden"
              )}
              style={{
                background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <blockquote>
                <p className="relative z-20 text-sm font-normal leading-[1.6] text-white md:text-lg">
                  {item.quote}
                </p>
                <footer className="relative z-20 mt-6 flex flex-row items-center">
                  <Image
                    src="/profile.svg"
                    width={48}
                    height={48}
                    alt=""
                    className="me-3 shrink-0"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-xl font-bold leading-[1.6] text-white">{item.name}</p>
                    <p className="text-sm font-normal leading-[1.6] text-white-200">{item.title}</p>
                  </div>
                </footer>
              </blockquote>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
