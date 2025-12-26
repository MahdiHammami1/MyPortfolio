import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative py-24 md:py-32 bg-card/30">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div ref={ref} className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-primary tracking-wider uppercase"
          >
            Academic Background
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl md:text-4xl font-bold mt-3"
          >
            <span className="text-gradient">Education</span>
          </motion.h2>
        </div>

        {/* Education Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* ENSI */}
          <div className="glass-strong rounded-2xl p-8 glow-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/5 blur-2xl" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                National School of Computer Science (ENSI)
              </h3>
              <p className="text-primary font-medium text-lg mb-4">
                Computer Science Engineering
              </p>

              {/* Specialization Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Award size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Finance Specialization</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Comprehensive curriculum covering software engineering, artificial intelligence, 
                data science, and specialized coursework in financial technology and quantitative methods.
              </p>
            </div>
          </div>

          {/* IPEIEM */}
          <div className="glass-strong rounded-2xl p-8 glow-border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/5 blur-2xl" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Institut préparatoire aux études d'ingénieurs d'El Manar (IPEIEM)
              </h3>
              <p className="text-primary font-medium text-lg mb-4">
                Première année commune aux études de santé, Technologies de l'information
              </p>

              {/* Period Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Award size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Sept 2021 - Jun 2023</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Foundational engineering studies with focus on information technology and scientific methodologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradient Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default EducationSection;
