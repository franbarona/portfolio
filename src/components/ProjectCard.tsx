import type { ProjectProps } from "../types/types";
import { ExternalLink } from "./animate-ui/icons/external-link";
import { TagList } from "./TagList";

type ProjectCardProps = {
  item: ProjectProps;
}

export const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            width="200"
            height="48"
            decoding="async"
            data-nimg="1"
            className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 group-hover:scale-110" style={{ color: 'transparent' }} />
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div className="w-full">
              <a href={item.url ? item.url : ''} target="_blank" className="w-full inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <div className="flex justify-between w-full">
                  <span>
                    {item.title}
                  </span>
                  <span className="lg:hidden group-hover:block">
                    <ExternalLink animateOnView={'path'} animateOnViewOnce={false} size={20} />
                  </span>
                </div>
              </a>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal">
            {item.description}
          </p>
          {
            item.tags && <TagList tags={item.tags} />
          }
        </div>
      </div>
    </li>
  )
}