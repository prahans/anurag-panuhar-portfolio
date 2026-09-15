import { FaLocationArrow, FaPhone } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt=""
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Interested in working{" "}
          <span className="text-purple">together?</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I&apos;m currently open to junior full-stack and software development
          opportunities. Feel free to reach out.
        </p>
        <MagicButton
          href="mailto:anuragpanuhar016@gmail.com"
          title="Let's Connect"
          icon={<FaLocationArrow aria-hidden="true" />}
          position="right"
        />
        <a
          href="tel:+9779707108983"
          aria-label="Call Anurag Panuhar at +977 9707108983"
          className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-white-200 transition-colors hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple">
          <FaPhone aria-hidden="true" />
          <span>+977 9707108983</span>
        </a>
      </div>
      <div className="relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center gap-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Anurag Panuhar
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${info.name} (opens in a new tab)`}
              className="w-11 h-11 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-colors hover:border-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
            >
              <img src={info.img} alt="" aria-hidden="true" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
