import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, TrendingUp, Scale, Car, GitBranch, Shield, Bot, Dumbbell, Leaf } from 'lucide-react';

const projects = [
  {
    icon: Dumbbell,
    title: 'Fitness Hub',
    domain: 'Full-Stack Web Application',
    highlights: [
      'Comprehensive fitness tracking platform',
      'User workout plans and progress monitoring',
      'Shop and event registration features',
      'Cloud-hosted on Azure',
    ],
    stack: ['React', 'Angular', 'Spring Boot', 'PostgreSQL', 'Azure'],
    github: 'https://github.com',
    website: 'https://fitnesshubfrontend.z6.web.core.windows.net/',
  },
  {
    icon: Leaf,
    title: 'NIRD OPS',
    domain: 'Sustainable Digital Transition',
    highlights: [
      'Digital sovereignty assessment and audit platform',
      'Measure ecological impact and carbon footprint reduction',
      'Interactive action plan builder for sustainable digital transition',
      'Village gamification system for team engagement',
    ],
    stack: ['React', 'Azure Static Apps', 'Node.js', 'PostgreSQL'],
    website: 'https://ashy-sky-05ac40b03.3.azurestaticapps.net',
  },
  {
    icon: TrendingUp,
    title: 'Financial Time Series Forecasting',
    domain: 'AI / Quantitative Finance',
    highlights: [
      'LSTM and GRU-LSTM forecasting models',
      'Volatility & trend analysis + VaR/ES risk metrics',
      'ARIMA vs Deep Learning comparison',
    ],
    stack: ['Python', 'TensorFlow/Keras', 'Pandas', 'NumPy', 'scikit-learn', 'Matplotlib'],
    github: 'https://github.com',
  },
  {
    icon: Scale,
    title: 'InvestiCase',
    domain: 'Full-Stack + AI',
    highlights: [
      'AI-Enhanced Legal Case Management Platform',
      'Dockerized full-stack cloud deployment',
      'RAG chatbot for legal decision assistance',
    ],
    stack: ['Angular', 'Spring Boot', 'MySQL/PostgreSQL', 'Docker', 'Azure', 'LLM', 'RAG'],
    github: 'https://github.com/MahdiHammami1/InvestiCase',
  },
  {
    icon: Car,
    title: 'B2B Ride-Sharing Application',
    domain: 'Mobile + Machine Learning',
    highlights: [
      'User matching and travel time prediction',
      'Route optimization and analytics dashboard',
      'REST-based backend integration',
    ],
    stack: ['Python', 'Pandas', 'scikit-learn', 'Flutter/React Native', 'REST APIs'],
    github: 'https://github.com/AzizMoussi/Greenfleeeet',
  },
  {
    icon: GitBranch,
    title: 'GitLab Release Orchestration',
    domain: 'DevOps / Backend Engineering',
    highlights: [
      'Multi-repo & monorepo release orchestration',
      'Full CI/CD automation (tests, quality, build)',
      'OAuth2 SSO integration with Keycloak',
    ],
    stack: ['NestJS', 'Angular', 'MongoDB', 'Prisma', 'Jenkins', 'GitLab CI', 'Docker'],
    github: 'https://github.com/MahdiHammami1/Gitlab-release-automation',
  },
  {
    icon: Shield,
    title: 'Visitor Management System',
    domain: 'Secure Backend Systems',
    highlights: [
      'Visitor management platform with RBAC',
      'Automated tests and quality gates',
      'Enterprise-grade security implementation',
    ],
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'RBAC', 'JUnit', 'SonarQube'],
    github: 'https://github.com',
  },
  {
    icon: Bot,
    title: 'ERP Automation & LLM Agent',
    domain: 'Enterprise Automation + AI',
    highlights: [
      'LLM agent automating ERP workflows',
      'Natural language to validated actions',
      'Intelligent enterprise automation',
    ],
    stack: ['Python', 'LangChain', 'LangGraph', 'Ollama', 'Docker', 'Git'],
    github: 'https://github.com',
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass rounded-2xl p-6 glow-border group relative overflow-hidden transition-all duration-500"
      style={{
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <project.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground text-lg">{project.title}</h3>
              <span className="text-xs text-primary/80 font-medium">{project.domain}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
              >
                <ExternalLink size={18} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card/50 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2 mb-5">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-background/50 text-muted-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-card/30">
      {/* Diagonal Divider */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-background" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 100%)' }} />

      <div ref={ref} className="container mx-auto px-6 pt-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-primary tracking-wider uppercase"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl md:text-4xl font-bold mt-3"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>

      {/* Diagonal Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0%, 100% 100%, 0 100%)' }} />
    </section>
  );
};

export default ProjectsSection;
