import { Heart } from "./animate-ui/icons/heart";

const Footer = () => {
  return (
    <div className="pb-16 text-sm text-slate-500 sm:pb-0 flex flex-col items-center">
      <p className="mb-4 flex items-center gap-1">
        Developed and built by me with <a href="https://react.dev/" target="_blank" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">React</a>,
        <a href="https://vite.dev/" target="_blank" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"> Vite </a>
        &<span className="hover:text-teal-300"><Heart size={14} animateOnHover /></span>, styled with <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300">TailwindCss</a>
      </p>
      <p>© 2025, Fran Barona</p>
    </div>
  )
}

export default Footer;