"use client";

import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

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
  const animationStyle = {
    "--animation-direction": direction === "left" ? "normal" : "reverse",
    "--animation-duration": { fast: "20s", normal: "40s", slow: "80s" }[speed],
  } as CSSProperties;

  return (
    <div
      style={animationStyle}
      className={cn(
        "scroller relative z-20 w-full max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]",
        className
      )}
    >
      <ul
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap animate-scroll motion-reduce:animate-none",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {[...items, ...items].map((item, idx) => (
          <li
            aria-hidden={idx >= items.length ? true : undefined}
            className="w-[calc(100vw-2.5rem)] sm:w-[calc(100vw-5rem)] relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-10 md:w-[min(60vw,48rem)] motion-reduce:aria-hidden:hidden"
            style={{
              //   background:
              //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            // change to idx cuz we have the same name
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              {/* change text color, text-lg */}
              <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  {/* change text color, font-normal to font-bold, text-xl */}
                  <span className="text-xl font-bold leading-[1.6] text-white">
                    {item.name}
                  </span>
                  {/* change text color */}
                  <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
