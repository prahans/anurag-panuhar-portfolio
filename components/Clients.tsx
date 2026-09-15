"use client";

import { companies as toolsAndPlatforms, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        What I bring as a <span className="text-purple">developer</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="w-full min-w-0 py-10 md:py-12 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <section
          aria-labelledby="tools-platforms-heading"
          className="mt-8 w-full border-t border-white/10 pt-10">
          <h2
            id="tools-platforms-heading"
            className="text-center text-2xl sm:text-3xl font-bold">
            Tools &amp; Platforms{" "}
            <span className="text-purple">I Work With</span>
          </h2>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
            {toolsAndPlatforms.map((platform) => (
              <li key={platform.id} className="flex items-center gap-3">
                <img
                  src={platform.img}
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10"
                />
                <img
                  src={platform.nameImg}
                  alt={platform.name}
                  className="h-6 w-auto max-w-32 object-contain sm:h-7"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Clients;
