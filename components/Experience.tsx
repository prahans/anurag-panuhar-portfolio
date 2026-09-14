import Image from "next/image";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 w-full scroll-mt-28">
      <h2 id="experience-heading" className="heading">
        My <span className="text-purple">work experience</span>
      </h2>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, index) => (
          <Button
            key={card.id}
            as="article"
            duration={10000 + index * 2000}
            containerClassName={card.className}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-white border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt=""
                width={128}
                height={128}
                className="h-auto lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h3 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h3>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
