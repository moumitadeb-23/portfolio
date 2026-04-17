import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Star,
  GitFork,
  ArrowUpRight,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { projects, githubRepos } from '../data/mock';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const TiltCard = ({ children, isDark }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 8, y: -x * 8 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className={`rounded-2xl overflow-hidden transition-shadow duration-300 ${
        isDark
          ? 'bg-white/[0.03] border border-white/[0.06]'
          : 'bg-white border border-gray-100 shadow-sm'
      } ${isHovered ? (isDark ? 'shadow-xl shadow-violet-500/10' : 'shadow-xl shadow-violet-200/40') : ''}`}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project, index, isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
    >
      <TiltCard isDark={isDark}>
        {/* Image */}
        <div className="relative overflow-hidden h-48">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-[#050507]' : 'from-white'} via-transparent to-transparent`} />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className={`text-lg font-poppins font-semibold mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`text-sm font-inter leading-relaxed mb-4 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className={`text-xs font-inter ${
                  isDark
                    ? 'bg-white/[0.06] text-gray-400 border-white/[0.08]'
                    : 'bg-gray-100 text-gray-600 border-gray-200'
                }`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className={`gap-2 text-xs font-inter ${
                    isDark
                      ? 'border-white/[0.1] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                      : 'border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Github size={14} />
                  Code
                </Button>
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  className="bg-violet-600 hover:bg-violet-700 text-white gap-2 text-xs font-inter"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="projects"
      className={`py-24 relative ${isDark ? 'bg-[#080810]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-sm font-inter font-medium tracking-wider uppercase ${
              isDark ? 'text-violet-400' : 'text-violet-600'
            }`}
          >
            My Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-4xl font-poppins font-bold mt-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isDark={isDark}
            />
          ))}
        </div>

        {/* GitHub Repos */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xl font-poppins font-semibold mb-2 flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            <Github size={22} className="text-violet-500" />
            From My GitHub
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-sm font-inter mb-8 ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}
          >
            Repositories fetched dynamically (MOCKED for now)
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {githubRepos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`block p-5 rounded-xl transition-colors group ${
                  isDark
                    ? 'bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-violet-500/20'
                    : 'bg-gray-50 border border-gray-100 hover:bg-gray-100 hover:border-violet-200'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4
                    className={`text-sm font-inter font-semibold truncate pr-2 ${
                      isDark
                        ? 'text-gray-300 group-hover:text-violet-400'
                        : 'text-gray-800 group-hover:text-violet-600'
                    }`}
                  >
                    {repo.name}
                  </h4>
                  <ArrowUpRight
                    size={14}
                    className={`flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isDark ? 'text-gray-600' : 'text-gray-400'
                    }`}
                  />
                </div>
                <p
                  className={`text-xs font-inter mb-4 line-clamp-2 ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}
                >
                  {repo.description}
                </p>
                <div className="flex items-center gap-4">
                  <span
                    className={`flex items-center gap-1 text-xs font-inter ${
                      isDark ? 'text-gray-500' : 'text-gray-500'
                    }`}
                  >
                    <Star size={12} />
                    {repo.stars}
                  </span>
                  <span
                    className={`flex items-center gap-1 text-xs font-inter ${
                      isDark ? 'text-gray-500' : 'text-gray-500'
                    }`}
                  >
                    <GitFork size={12} />
                    {repo.forks}
                  </span>
                  <Badge
                    variant="secondary"
                    className={`text-[10px] ml-auto ${
                      isDark
                        ? 'bg-white/[0.06] text-gray-400 border-0'
                        : 'bg-gray-200/60 text-gray-500 border-0'
                    }`}
                  >
                    {repo.language}
                  </Badge>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
