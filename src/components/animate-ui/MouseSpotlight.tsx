import { useEffect, useRef } from 'react';

const MouseSpotlight = () => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const spotlight = spotlightRef.current;
      if (!spotlight) return;

      const x = e.clientX;
      const y = e.clientY;

      spotlight.style.left = `${x}px`;
      spotlight.style.top = `${y}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed z-50 h-[500px] w-[500px] rounded-full transition-transform duration-100 translate-x-[-50%] translate-y-[-50%]"
      style={{
        background: `
          radial-gradient(
            circle,
            rgba(29, 78, 216, 0.15) 0%,
            rgba(29, 78, 216, 0.15) 40%,
            transparent 80%
          )
        `,
        filter: 'blur(100px)',
      }}

    />
  );
};

export default MouseSpotlight;
