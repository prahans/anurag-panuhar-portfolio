"use client";

import type { ReactNode } from "react";

interface MagicButtonProps {
  title: string;
  icon?: ReactNode;
  position?: "left" | "right";
  href?: string;
  handleClick?: () => void;
  otherClasses?: string;
  disabled?: boolean;
}

const MagicButton = ({
  title,
  icon,
  position = "right",
  href,
  handleClick,
  otherClasses = "",
  disabled = false,
}: MagicButtonProps) => {
  const className =
    "relative inline-flex h-12 w-full cursor-pointer overflow-hidden rounded-lg p-px md:mt-10 md:w-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple disabled:cursor-not-allowed disabled:opacity-50";
  const content = (
    <>
      <span aria-hidden="true" className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] motion-reduce:animate-none" />
      <span
        className={`relative inline-flex h-full w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && <span aria-hidden="true">{icon}</span>}
        {title}
        {position === "right" && <span aria-hidden="true">{icon}</span>}
      </span>
    </>
  );

  if (href) {
    return <a href={href} className={className} onClick={handleClick}>{content}</a>;
  }

  return (
    <button type="button" className={className} onClick={handleClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default MagicButton;
