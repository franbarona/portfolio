import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Send } from "./animate-ui/icons/send";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

const SendIcon = () => {
  const [key, setKey] = useState(false);
  const resetAnimation = () => {
    setKey(true);
  };
  return (
    <a href="mailto:franbarona@gmail.com" className="cursor-pointer">
      {key && <Send animateOnHover={"default"} size={24} />}
      {!key && (
        <Send
          animateOnView={"path-loop"}
          size={24}
          onAnimateEnd={resetAnimation}
        />
      )}
    </a>
  );
};

export const SocialMediaList = () => {
  return (
    <div className="flex mt-8 gap-4 items-center">
        <LanguageSwitcher />
      <ul className="ml-1 flex items-center gap-5">
        {/* <MoonIcon /> */}
        <a href="https://github.com/franbarona" target="_blank">
          <FaGithub
            size={24}
            className="cursor-pointer transition-transform duration-300 ease-in-out animate-swing hover:animate-bounce"
          />
        </a>
        <a
          href="http://www.linkedin.com/in/francisco-barona-sempere-61a37314b"
          target="_blank"
        >
          <FaLinkedinIn
            size={24}
            className="cursor-pointer transition-transform duration-300 ease-in-out animate-bounce hover:animate-swing"
          />
        </a>
        <SendIcon />
      </ul>
    </div>
  );
};
