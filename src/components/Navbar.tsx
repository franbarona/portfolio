import type { SectionId } from "../types/types";
// import { Volume2 } from "./animate-ui/icons/volume-2";
// import { Bot } from "./animate-ui/icons/bot";
// import ThemeToggle from "./ThemeToggle";

type NavbarProps = {
  activeSection: string,
  isSticky?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const menuItems: { id: SectionId; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <nav className={`nav hidden lg:block`}>
      <ul className="mt-16 w-max">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`group flex items-center py-3`}
            >
              <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${activeSection === item.id ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`} />
              <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === item.id ? 'w-12 text-slate-200' : 'text-slate-500'}`}>
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
