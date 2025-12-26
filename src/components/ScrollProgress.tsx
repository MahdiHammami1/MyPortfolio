import { motion, useScroll, useSpring } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="scroll-progress">
      {/* Progress Bar */}
      <div className="relative h-32 w-1 rounded-full bg-border/30 overflow-hidden">
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute inset-0 bg-gradient-to-b from-primary to-secondary rounded-full"
        />
      </div>

      {/* Section Dots */}
      <div className="flex flex-col gap-3 mt-4">
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group relative"
          >
            <div className="w-2 h-2 rounded-full bg-border/50 group-hover:bg-primary transition-colors" />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ScrollProgress;
