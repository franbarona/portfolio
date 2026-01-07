import { useTranslatedData } from "@/hooks/useTranslatedData";
import { ExperienceCard } from "../components/ExperienceCard";
import { SectionTitle } from "../components/SectionTitle";

const ExperiencePage: React.FC = () => {
  const { jobs } = useTranslatedData();

  return (
    <>
      <SectionTitle title="Experience" />
      <ol className="group/list">
        {jobs.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </ol>
    </>
  );
};

export default ExperiencePage;
