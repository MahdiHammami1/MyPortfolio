import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Sofrecom',
    role: 'Summer Internship',
    period: 'Jul 2025 - Aug 2025',
    bullets: [
      'Developed GitLab release orchestration platform (NestJS/Angular/MongoDB/Prisma)',
      'Implemented OAuth2 SSO authentication with Keycloak',
      'Configured Jenkins CI/CD: Jest tests, SonarQube gates, Dockerization, registry publishing',
    ],
  },
  {
    company: 'CAVEO AUTOMOTIVE TUNISIA S.A.',
    role: 'AI Software Engineer - Stage',
    period: 'Jun 2025 - Jul 2025',
    bullets: [
      'Automated Sage X3 ERP workflows, implementing provisioning and RBAC logic with APIs and scripting.',
      'Designed and deployed an ERP conversational agent using LangChain, LangGraph, and Ollama for natural language queries.',
    ],
  },
  {
    company: 'Centre Informatique du Ministère des Finances (CIMF)',
    role: 'Internship',
    period: 'Jun 2025 - Jul 2025',
    bullets: [
      'Built visitor management system (Angular/Spring Boot/PostgreSQL)',
      'Implemented RBAC with JUnit/Mockito testing and SonarQube quality automation',
      'Deployed application via ngrok for external access',
    ],
  },
  {
    company: 'ACTIA Engineering Services',
    role: 'Internship',
    period: 'Jul 2024 - Sep 2024',
    bullets: [
      'Developed training management platform (Angular/Spring Boot/MySQL)',
      'Created feedback module via REST APIs',
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-primary tracking-wider uppercase"
          >
            Career Path
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl md:text-4xl font-bold mt-3"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 md:pl-12">
            {/* Timeline Line */}
            <div className="timeline-line ml-3" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15 }}
                className="relative mb-10 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-5 md:-left-9 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                {/* Card */}
                <div className="glass rounded-xl p-6 ml-4 glow-border">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">{exp.company}</h3>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        <Briefcase size={14} />
                        {exp.role}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
