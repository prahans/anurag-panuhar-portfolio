"use client";

import { FaGithub, FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="h-[26rem] lg:h-[30rem] flex items-center justify-center sm:w-96 w-[min(80vw,24rem)]"
            key={item.id}>
            <PinContainer title={item.title}>
              <div className="relative flex items-center justify-center sm:w-96 w-[min(80vw,24rem)] overflow-hidden aspect-video mb-8">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}>
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}>
                {item.des}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}>
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title} on GitHub (opens in a new tab)`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm text-white transition-colors hover:border-purple hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple">
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${item.title} live demo (opens in a new tab)`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-purple/40 bg-purple/10 px-3 py-2 text-sm text-purple transition-colors hover:bg-purple/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple">
                    Live Demo
                    <FaLocationArrow aria-hidden="true" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
