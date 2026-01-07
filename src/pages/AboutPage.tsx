import { useTranslation } from 'react-i18next';
import { SectionTitle } from "../components/SectionTitle";
import { HighlightedText } from "../components/HighlightedText";

const AboutPage = () => {
  const { t } = useTranslation();
  const paragraphs = t('about.paragraphs', { returnObjects: true }) as string[];
  const highlights = t('about.highlights', { returnObjects: true }) as string[];

  return (
    <>
      <SectionTitle title={t('about.title')} hideOnLarge />
      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4">
            <HighlightedText text={paragraph} highlights={highlights} />
          </p>
        ))}
      </div>
    </>
  );
};

export default AboutPage;