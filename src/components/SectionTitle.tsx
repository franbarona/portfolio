type SectionTitleProps = {
  title: string;
  hideOnLarge?: boolean;
}

export const SectionTitle = ({ title, hideOnLarge = false }: SectionTitleProps) => {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-10 mb-4 w-screen overflow-hidden bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-16 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">{title}</h2>
      </div>
      {
        !hideOnLarge &&
        <div className=" gap-8 items-center hidden lg:flex">
          <span className="h-px w-full my-8 border-0 bg-gray-700" />
          <h2 className="text-sm font-bold uppercase tracking-widest text-teal-300">{title}</h2>
        </div>
      }
    </>
  )
}