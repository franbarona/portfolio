import { useTranslation } from 'react-i18next';
import { jobsData, projectsData } from '../data/data';

export function useTranslatedData() {
  const { t } = useTranslation();

  const jobs = jobsData.map(job => ({
    ...job,
    work: t(job.work),
    description: t(job.description),
  }));

  const projects = projectsData.map(project => ({
    ...project,
    title: t(project.title),
    description: t(project.description),
  }));

  return { jobs, projects };
}