import { ExperienceCard } from "../components/ExperienceCard";
import { SectionTitle } from "../components/SectionTitle";
import { jobsData } from "../data/data";

const ExperiencePage: React.FC = () => {
  return (
    <>
      <SectionTitle title="Experience" />
      <ol className="group/list">
        {
          jobsData.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))
        }
      </ol>
    </>
  )
}

export default ExperiencePage;