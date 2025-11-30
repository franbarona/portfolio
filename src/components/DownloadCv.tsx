import { ArrowUp } from "./animate-ui/icons/arrow-up";
import { useState } from "react";

const Arrow = () => {
  const [key, setKey] = useState(false);
  const resetAnimation = () => {
    setKey(true);
  };
  return (
    <span className="cursor-pointer">
      {key && <ArrowUp size={24} />}
      {!key && (
        <ArrowUp
          animateOnView={"path-loop"}
          size={24}
          onAnimateEnd={resetAnimation}
        />
      )}
    </span>
  );
};

export const DownloadCv = () => {
  return (
    <div className="mt-12">
      <a
        className="group inline-flex items-end gap-3 justify-end leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
        href="/Francisco Barona CV 2025 English.pdf"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="View Full Resume (opens in a new tab)"
      >
          <span>Download Resume</span>
          <span className="rotate-45 group-hover:animate-bounce">
            <Arrow  />
          </span>
      </a>
    </div>
  );
};
