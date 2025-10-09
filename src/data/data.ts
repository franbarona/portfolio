import type { JobProps, ProjectProps } from "../types/types";

export const sections = ["dashboard", "experience", "projects", "about"];
export const jobsData: JobProps[] = [
  {
    id: "job0",
    company: "softtek",
    work: "Full-stack Web",
    from: "Sept 2023",
    to: "Present",
    description: [
      "Currently, I am working as a Front-End Developer in collaboration with a team on a management application focused on the electronic invoicing and document exchange sector. My role involves both developing new features and adapting existing functionalities to meet the specific needs of our clients, ensuring the application is both user-friendly and highly functional.",
    ],
    tags: ["Angular", "Typescript", "Git", "Scrum", "Jenkins", "ApiRest", "More..."],
    url: "https://www.softtek.com/es/"
  },
  {
    id: "job1",
    company: "power Electronics",
    work: "Team Leader",
    from: "Jun 2021",
    to: "Sept 2023",
    description: [
      "I have developed a range of web applications, both for internal and external use, with a focus on the renewable energy sector. My work has involved creating and evolving support tools, logistics systems, and data monitoring platforms. From defining architecture to handling migration and deployment, I’ve been involved in every stage of the project lifecycle.",
      "As a Team Leader in Software Development, I managed and coordinated a development team, ensuring efficient workflow planning and task prioritization. I was responsible for time estimations, code reviews, and testing to maintain high-quality standards throughout the development process.",
    ],
    tags: ["Angular", "Node.js", "Next.js", "Docker", "Git", "Scrum", "MongoDb", "More..."],
    url: "https://power-electronics.com/"
  },
  {
    id: "job2",
    company: "finametrix",
    work: "Full-Stack Web",
    from: "Mar 2019",
    to: "Jun 2021",
    description: [
      "I have developed full-stack web applications within the financial sector, working directly with external clients. My responsibilities included task planning and collaborative development, ensuring high-quality solutions tailored to client needs.",
    ],
    tags: ["Angular", "Node.js", "Docker", "Git", "ApiRest", "MongoDb", "More..."],
    url: "https://es.linkedin.com/company/finametrix"
  },
  {
    id: "job3",
    company: "edicom",
    work: "Edi consultant",
    from: "Oct 2017",
    to: "Mar 2019",
    description: [
      "As a Consultant, I held client meetings and worked on data conversion mapping (XML, EDI, IDOC). I also configured data flows and B2B connections, ensuring seamless communication and integration between systems.",
    ],
    tags: ["Edi", "Javascript", "B2B", "WebService", "FTP", "More..."],
    url: "https://edicomgroup.es/"
  },
  {
    id: "job4",
    company: "intelectiva",
    work: "Mobile App Developer",
    from: "Jan 2016",
    to: "Oct 2017",
    description: [
      "In addition, I have experience developing mobile applications for Android and iOS, with a focus on iOS. I have worked both independently and within a team, handling the full development process, from coding to testing and deploying apps on various app stores.",
    ],
    tags: ["Swift 3", "Objective C", "Xcode", "Java", "Android Studio", "More..."],
    url: "https://intelectiva.es/"
  },
];

export const projectsData: ProjectProps[] = [
  {
    title: "Voltify - EV Charger Stations Finder",
    image: 'images/voltify.png',
    description:
      "Voltify allows users to search for electric vehicle charging stations on an interactive map and display detailed information about each station, including location, availability, and charging specifications.",
    tags: ["React", "Leafletjs", "OpenChargeMap", "Geoapify", "Framer", "Typescript", "Tailwind"],
    url: 'https://voltify.franbarona.dev/'
  },
  {
    title: "Monetix - Expense Manager",
    image: 'images/monetix.png',
    description:
      "Monetix is a modern web app expense manager developed with react and echarts. Focused on tracking our expenses and income. In this demo, you can create, edit, and delete transactions and categories, as well as view a global statistics dashboard.",
    tags: ["React", "Echarts", "Typescript", "Tailwind"],
    url: 'https://monetix.franbarona.dev/'
  },
  {
    title: "Find the country 3d - Minigame",
    image: 'images/find-the-country-3d.png',
    description:
      "Mini game developed with react and three for generate an interactive globe with the proposite of find and press the most countries posibles in allowed time",
    tags: ["React", "react-globe.gl", "three", "Framer Motion", "Tailwindcss", "TypeScript"],
    url: 'https://find-the-country.franbarona.dev/'
  }
];

export const frontSkillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Angular',
  'Tailwind CSS',
];

export const backSkillsData = [
  'Node.js',
  'Express',
  'Next.js',
  'REST APIs',
];

export const othersSkillsDate = [
  'Databases',
  'MongoDB',
  'MySQL'
];

export const skillBlocks = [
  {
    title: 'Frontend',
    skills: frontSkillsData
  },
  {
    title: 'Backend',
    skills: backSkillsData
  },
  {
    title: 'Others',
    skills: othersSkillsDate
  },
];