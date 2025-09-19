import { SectionTitle } from "../components/SectionTitle";

const AboutPage = () => {
  return (
    <>
      <SectionTitle title="About" hideOnLarge />
      <div>
        <p className="mb-4">
          I'm a software developer based in <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Valencia</span> (Spain), with a strong focus on building accessible and visually polished user interfaces. I’m especially drawn to projects where some design and development meet — where I can implement thoughtful user experiences to life through clean, efficient code and performance-focused solutions.
        </p>
        <p className="mb-4">
          While my experience focuses on <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Full-Stack</span> development using the <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">MEAN</span> stack, I’m currently working as a <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Senior Front-End Engineer</span> at Softtek, assigned to the client SERES. There, I help to build, and maintain reusable UI components that drive the core of their frontend architecture, ensuring the platform is both functional and inclusive, aligned with web standards and best practices.
        </p>
        <p className="mb-4">
          Since I finished my degree in <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Computer Science</span> from the <span className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">University of Valencia</span> in 2015, I’ve worked across a range of industries — from fintech startups to large enterprises in the energy, utilities, and e-invoicing sectors — gaining experience in diverse technical environments.
        </p>
        <p className="mb-4">
          In my free time, I’m usually running, playing tennis or padel, hanging out with my friends, or traveling around the world discovering new places.
        </p>
      </div>
    </>
  )
}

export default AboutPage;