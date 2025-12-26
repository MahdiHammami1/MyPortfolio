import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Server, Layout, Brain, Cloud, Database } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'HTML/CSS'],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Spring Boot', 'NestJS', 'NodeJs', 'Express.js'],
  },
  {
    icon: Layout,
    title: 'Frontend & Mobile',
    skills: ['Angular', 'React', 'Next.js', 'Flutter', 'React Native'],
  },
  {
    icon: Brain,
    title: 'AI / ML',
    skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'LSTM', 'GRU', 'Multi-Agent (Mesa)', 'RAG/LLMs'],
  },
  {
    icon: Cloud,
    title: 'DevOps / Cloud',
    skills: ['Docker', 'Docker Compose', 'Jenkins', 'GitLab CI/CD', 'SonarQube', 'Azure', 'Keycloak (OAuth2/SSO)', 'Kubernetes'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-primary tracking-wider uppercase"
          >
            Technical Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl md:text-4xl font-bold mt-3"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 glow-border group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.03 }}
                    className="skill-chip"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
