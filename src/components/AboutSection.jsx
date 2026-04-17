import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, education, stats } from '../data/mock';

const AboutSection = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
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
            About Me
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
            Get To Know Me
          </motion.h2>
        </div>

        {/* Bio + Stats */}
        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p
              className={`text-base font-inter leading-relaxed mb-6 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {personalInfo.bio}
            </p>
            <div
              className={`flex items-center gap-2 text-sm font-inter ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}
            >
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-5 rounded-2xl text-center transition-colors ${
                  isDark
                    ? 'bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06]'
                    : 'bg-gray-50 border border-gray-100 hover:bg-gray-100'
                }`}
              >
                <p className="text-2xl font-poppins font-bold text-violet-500">
                  {stat.value}
                </p>
                <p
                  className={`text-xs font-inter mt-1 ${
                    isDark ? 'text-gray-500' : 'text-gray-500'
                  }`}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Timeline */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-xl font-poppins font-semibold mb-8 flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            <GraduationCap size={22} className="text-violet-500" />
            Education
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div
              className={`absolute left-[17px] top-2 bottom-2 w-[2px] ${
                isDark ? 'bg-white/[0.06]' : 'bg-gray-200'
              }`}
            />

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex gap-6 relative"
                >
                  {/* Dot */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                      edu.current
                        ? 'bg-violet-600 shadow-lg shadow-violet-500/30'
                        : isDark
                        ? 'bg-white/[0.08] border border-white/[0.1]'
                        : 'bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {edu.current ? (
                      <Award size={16} className="text-white" />
                    ) : (
                      <Calendar size={14} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 p-5 rounded-xl transition-colors ${
                      isDark
                        ? 'bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05]'
                        : 'bg-gray-50 border border-gray-100 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4
                        className={`font-poppins font-semibold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {edu.institution}
                      </h4>
                      {edu.current && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-inter bg-violet-500/20 text-violet-400">
                          Current
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-sm font-inter ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {edu.degree}
                      {edu.university && ` — ${edu.university}`}
                      {edu.board && ` — ${edu.board}`}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <span
                        className={`text-xs font-inter ${
                          isDark ? 'text-gray-500' : 'text-gray-500'
                        }`}
                      >
                        {edu.years}
                      </span>
                      <span className="text-xs font-inter font-medium text-violet-500">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
