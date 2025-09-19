import type { ReactNode, RefObject } from "react";

type SectionProps = {
  id: string,
  innerRef: RefObject<HTMLElement | null>;
  children: ReactNode
}

const Section: React.FC<SectionProps> = ({ id, innerRef, children }) => {
  return (
    <section
      id={id}
      ref={innerRef}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {children}
    </section>
  );
};

export default Section;