import { useTranslation } from "react-i18next";
import { useTranslatedData } from "@/hooks/useTranslatedData";
import { ExperienceCard } from "../components/ExperienceCard";
import { SectionTitle } from "../components/SectionTitle";

const ExperiencePage: React.FC = () => {
    const { t } = useTranslation();
  const { jobs } = useTranslatedData();

  return (
    <>
      <SectionTitle title={t("sections.experience")} />
      <ol className="group/list">
        {jobs.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </ol>
    </>
  );
};

export default ExperiencePage;
