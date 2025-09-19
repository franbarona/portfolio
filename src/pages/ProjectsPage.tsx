import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";
import { projectsData } from "../data/data";

const ProjectsPage: React.FC = () => {
  return (
    <>
      <SectionTitle title="Projects" />
      <ol className="group/list">
        {
          projectsData.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))
        }
      </ol>
    </>
  )
}

export default ProjectsPage;