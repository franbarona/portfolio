import { useTranslatedData } from "@/hooks/useTranslatedData";
import { ProjectCard } from "../components/ProjectCard";
import { SectionTitle } from "../components/SectionTitle";

const ProjectsPage: React.FC = () => {
  const { projects } = useTranslatedData();

  return (
    <>
      <SectionTitle title="Recent projects" />
      <ol className="group/list">
        {
          projects.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))
        }
      </ol>
    </>
  )
}

export default ProjectsPage;