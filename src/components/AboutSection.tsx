import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Server, Cloud, TrendingUp } from 'lucide-react';

const highlights = [
  { icon: Brain, label: 'AI/ML Focus', desc: 'Forecasting & Risk Modeling' },
  { icon: Server, label: 'Full-Stack', desc: 'Angular/React + Spring/NestJS' },
  { icon: Cloud, label: 'DevOps', desc: 'CI/CD & Cloud Deployment' },
  { icon: TrendingUp, label: 'FinTech', desc: 'Decision-Support Systems' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* Wave Divider Top */}
      <div className="wave-divider -top-[59px]">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,60 C300,20 600,20 900,40 C1100,55 1200,30 1200,30 L1200,60 L0,60 Z"
            fill="hsl(216 50% 12%)"
          />
        </svg>
      </div>

      <div className="bg-card py-12">
        <div ref={ref} className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="text-sm font-medium text-primary tracking-wider uppercase"
              >
                About Me
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4"
              >
                Bridging <span className="text-gradient">AI & Engineering</span>
              </motion.h2>
            </div>

            {/* About Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed text-center mb-12"
            >
              I am a Computer Science Engineering student at ENSI with a specialization in Finance, 
              passionate about leveraging artificial intelligence for forecasting, risk modeling, and 
              automation. My expertise spans full-stack delivery with Angular, React, Spring Boot, and 
              NestJS, backed by solid DevOps practices including CI/CD pipelines, Docker containerization, 
              and cloud deployment. I am particularly interested in FinTech applications and building 
              decision-support systems that transform data into actionable insights.
            </motion.p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass rounded-xl p-5 text-center group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.label}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider Bottom */}
      <div className="wave-divider -bottom-[59px] rotate-180">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,60 C300,20 600,20 900,40 C1100,55 1200,30 1200,30 L1200,60 L0,60 Z"
            fill="hsl(216 50% 12%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
