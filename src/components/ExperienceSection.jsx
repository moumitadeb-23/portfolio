import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { certifications } from '../data/mock';

const CertCard = ({ cert, isDark }) => (
  <div
    className={`p-5 rounded-xl transition-colors ${
      isDark
        ? 'bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05]'
        : 'bg-white border border-gray-100 hover:bg-gray-50 shadow-sm'
    }`}
  >
    <div className="flex items-center gap-2 mb-2">
      <span
        className={`text-xs font-inter px-2 py-0.5 rounded-full ${
          cert.type === 'training'
            ? 'bg-cyan-500/15 text-cyan-400'
            : 'bg-violet-500/15 text-violet-400'
        }`}
      >
        {cert.type === 'training' ? 'Training' : 'Certification'}
      </span>
      <span
        className={`text-xs font-inter ${
          isDark ? 'text-gray-500' : 'text-gray-400'
        }`}
      >
        {cert.date}
      </span>
    </div>
    <h4
      className={`font-poppins font-semibold text-sm mb-1 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}
    >
      {cert.title}
    </h4>
    <p
      className={`text-xs font-inter mb-1 ${
        isDark ? 'text-violet-400' : 'text-violet-600'
      }`}
    >
      {cert.issuer}
    </p>
    <p
      className={`text-xs font-inter ${
        isDark ? 'text-gray-500' : 'text-gray-500'
      }`}
    >
      {cert.description}
    </p>
  </div>
);

const ExperienceSection = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="experience"
      className={`py-24 relative ${isDark ? 'bg-[#050507]' : 'bg-gray-50'}`}
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
            My Journey
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
            Experience & Certifications
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div
            className={`absolute left-[17px] md:left-1/2 md:ml-[-1px] top-0 bottom-0 w-[2px] ${
              isDark ? 'bg-white/[0.06]' : 'bg-gray-200'
            }`}
          />

          <div className="space-y-10">
            {certifications.map((cert, i) => {
              const isLeft = i % 2 === 0;
              const IconComponent =
                cert.type === 'training' ? Briefcase : Award;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Mobile layout */}
                  <div className="md:hidden flex items-start gap-6">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                        cert.type === 'training'
                          ? 'bg-cyan-600 shadow-lg shadow-cyan-500/20'
                          : 'bg-violet-600 shadow-lg shadow-violet-500/20'
                      }`}
                    >
                      <IconComponent size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CertCard cert={cert} isDark={isDark} />
                    </div>
                  </div>

                  {/* Desktop layout - alternating */}
                  <div className="hidden md:flex items-start">
                    {/* Left side (50%) */}
                    <div className="w-[calc(50%-18px)] pr-6">
                      {isLeft && <CertCard cert={cert} isDark={isDark} />}
                    </div>

                    {/* Center dot */}
                    <div className="flex-shrink-0 z-10">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center ${
                          cert.type === 'training'
                            ? 'bg-cyan-600 shadow-lg shadow-cyan-500/20'
                            : 'bg-violet-600 shadow-lg shadow-violet-500/20'
                        }`}
                      >
                        <IconComponent size={16} className="text-white" />
                      </div>
                    </div>

                    {/* Right side (50%) */}
                    <div className="w-[calc(50%-18px)] pl-6">
                      {!isLeft && <CertCard cert={cert} isDark={isDark} />}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
