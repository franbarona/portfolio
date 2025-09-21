import { SocialMediaList } from "./SocialMediaList";

const Footer = () => {
  return (
    <div className="lg:pb-8 text-sm text-slate-500 sm:pb-0 flex flex-col items-center justify-center space-y-4">
      <div className="block lg:hidden">
        <SocialMediaList />
      </div>
      <p className="flex flex-wrap items-center gap-1 justify-center text-center">
        Developed and built by me with <a href="https://react.dev/" target="_blank" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">React</a> &
        <a href="https://vite.dev/" target="_blank" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"> Vite </a>
        , styled with <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">TailwindCss</a>
      </p>
      <p>© 2025, Fran Barona</p>
    </div>
  )
}

export default Footer;