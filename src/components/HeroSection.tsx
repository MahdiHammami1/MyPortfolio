import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import heroPhoto from '@/assets/hero-photo.jpeg';

const quickFacts = ['ENSI', 'DevOps', 'FinTech', 'Software Engineering'];

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroPhoto})` }}
        />
        {/* Blur Vignette Effect on sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        {/* Gradient Overlay - adjusted for better photo visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
      </motion.div>

      {/* Animated Blobs */}
      <div className="blob w-96 h-96 -top-48 -right-48 animate-pulse" />
      <div className="blob w-64 h-64 bottom-20 -left-32 animate-pulse animation-delay-400" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-6 py-20"
      >
        <div className="max-w-3xl mx-auto">
          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-strong rounded-2xl p-8 md:p-12"
          >
            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {quickFacts.map((fact, index) => (
                <span
                  key={fact}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {fact}
                </span>
              ))}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-display text-4xl md:text-6xl font-bold mb-4"
            >
              <span className="text-foreground">Mahdi </span>
              <span className="text-gradient">Hammami</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-display text-xl md:text-2xl text-primary font-semibold mb-4"
            >
              FinTech Software Engineer
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
            >
              Computer Science Engineering student at ENSI specialized in Finance, 
              building end-to-end AI systems and scalable DevOps-ready platforms.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              {/* Primary CTA */}
              <a
                href="/Mahdi_Hammami_CV.pdf"
                download="Mahdi_Hammami_CV.pdf"
                className="btn-shine inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download CV
              </a>

              {/* Secondary CTAs */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/MahdiHammami1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass border border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mahdi-hammami-1aba45292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass border border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#contact"
                  className="p-3 rounded-xl glass border border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
