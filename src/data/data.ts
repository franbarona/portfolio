import type { JobProps, ProjectProps } from "../types/types";

export const sections = ["dashboard", "experience", "projects", "about"];
export const jobsData: JobProps[] = [
  {
    id: "job0",
    company: "softtek",
    work: "jobs.softtek.work",
    description: "jobs.softtek.description",
    from: "Sept 2023",
    to: "Present",
    tags: [
      "Angular",
      "Typescript",
      "Git",
      "Scrum",
      "Jenkins",
      "ApiRest",
      "More...",
    ],
    url: "https://www.softtek.com/es/",
  },
  {
    id: "job1",
    company: "power Electronics",
    work: "jobs.powerElectronics.work",
    description: "jobs.powerElectronics.description",
    from: "Jun 2021",
    to: "Sept 2023",
    tags: [
      "Angular",
      "Node.js",
      "Next.js",
      "Docker",
      "Git",
      "Scrum",
      "MongoDb",
      "More...",
    ],
    url: "https://power-electronics.com/",
  },
  {
    id: "job2",
    company: "finametrix",
    work: "jobs.finametrix.work",
    description: "jobs.finametrix.description",
    from: "Mar 2019",
    to: "Jun 2021",
    tags: [
      "Angular",
      "Node.js",
      "Docker",
      "Git",
      "ApiRest",
      "MongoDb",
      "More...",
    ],
    url: "https://es.linkedin.com/company/finametrix",
  },
  {
    id: "job3",
    company: "edicom",
    work: "jobs.edicom.work",
    description: "jobs.edicom.description",
    from: "Oct 2017",
    to: "Mar 2019",
    tags: ["Edi", "Javascript", "B2B", "WebService", "FTP", "More..."],
    url: "https://edicomgroup.es/",
  },
  {
    id: "job4",
    company: "intelectiva",
    work: "jobs.intelectiva.work",
    description: "jobs.intelectiva.description",
    from: "Jan 2016",
    to: "Oct 2017",
    tags: [
      "Swift 3",
      "Objective C",
      "Xcode",
      "Java",
      "Android Studio",
      "More...",
    ],
    url: "https://intelectiva.es/",
  },
];

export const projectsData: ProjectProps[] = [
  {
    title: "projects.rockPaperScissorsFront.title",
    image: "images/rock-paper-scissors-front.png",
    description: "projects.rockPaperScissorsFront.description",
    tags: ["Angular", "RxJs", "Standalone", "Typescript", "Tailwind"],
    url: "https://github.com/franbarona/Rock-Paper-Scissors-Frontend",
  },
  {
    title: "projects.rockPaperScissorsBack.title",
    image: "images/rock-paper-scissors-back.png",
    description: "projects.rockPaperScissorsBack.description",
    tags: ["Java", "Spring Boot", "REST APIs", "MySQL", "JUnit", "More..."],
    url: "https://github.com/franbarona/Rock-Paper-Scissors-Backend",
  },
  {
    title: "projects.flowDesk.title",
    image: "images/flow-desk.png",
    description: "projects.flowDesk.description",
    tags: ["Angular", "RxJs", "Standalone", "Typescript", "Tailwind"],
    url: "https://flow-desk.franbarona.dev/",
  },
  {
    title: "projects.voltify.title",
    image: "images/voltify.png",
    description: "projects.voltify.description",
    tags: [
      "React",
      "Leafletjs",
      "OpenChargeMap",
      "Geoapify",
      "Framer",
      "Typescript",
      "Tailwind",
    ],
    url: "https://voltify.franbarona.dev/",
  },
  {
    title: "projects.monetix.title",
    image: "images/monetix.png",
    description: "projects.monetix.description",
    tags: ["React", "Echarts", "Typescript", "Tailwind"],
    url: "https://monetix.franbarona.dev/",
  },
  {
    title: "projects.findTheCountry.title",
    image: "images/find-the-country-3d.png",
    description: "projects.findTheCountry.description",
    tags: [
      "React",
      "react-globe.gl",
      "three",
      "Framer Motion",
      "Tailwindcss",
      "TypeScript",
    ],
    url: "https://find-the-country.franbarona.dev/",
  },
];

export const frontSkillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "Tailwind CSS",
];

export const backSkillsData = ["Node.js", "Express", "Next.js", "REST APIs"];

export const othersSkillsDate = ["Databases", "MongoDB", "MySQL"];

export const skillBlocks = [
  {
    title: "Frontend",
    skills: frontSkillsData,
  },
  {
    title: "Backend",
    skills: backSkillsData,
  },
  {
    title: "Others",
    skills: othersSkillsDate,
  },
];
