import { useEffect, useRef, useState, type RefObject } from "react";
import type { SectionId } from "./types/types";
import { ThemeProvider } from "./context/ThemeContext";
import Section from "./components/Section";
import MouseSpotlight from "./components/animate-ui/MouseSpotlight";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import { DownloadCv } from "./components/DownloadCv";
import { SocialMediaList } from "./components/SocialMediaList";
import Footer from "./components/Footer";
import { TypingTextEffect } from "./components/animate-ui/TypingTextEffect";
import { ChevronRight } from "./components/animate-ui/icons/chevron-right";

function App() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const sectionRefs: Record<SectionId, RefObject<HTMLElement | null>> = {
    experience: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="scroll-smooth bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div>
          <div className="hidden lg:block">
            <MouseSpotlight />
          </div>
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="#">Fran Barona</a>
                  </h1>
                  <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl flex gap-2 items-end">
                    <ChevronRight animateOnView={"path"} />
                    <TypingTextEffect
                      text="Front End Engineer"
                      cursor={true}
                    ></TypingTextEffect>
                  </h2>
                  <p className="mt-4 max-w-xs leading-normal">
                    I build scalable, visually polished user experiences for the
                    web (and much more...).
                  </p>
                  <DownloadCv />

                  <Navbar activeSection={activeSection} />
                </div>
                <SocialMediaList />
              </header>
              <main className="pt-16 lg:w-[52%] lg:pt-24 lg:pb-12">
                <Section id="about" innerRef={sectionRefs.about}>
                  <AboutPage />
                </Section>
                <Section id="experience" innerRef={sectionRefs.experience}>
                  <ExperiencePage />
                </Section>
                <Section id="projects" innerRef={sectionRefs.projects}>
                  <ProjectsPage />
                </Section>
                <Footer />
              </main>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
