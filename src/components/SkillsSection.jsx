import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Database,
  Cloud,
  Zap,
  Shield,
  BarChart3,
  GitBranch,
  Monitor,
  Cpu,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { skills } from '../data/mock';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

const skillIcons = {
  JavaScript: Code2,
  Python: Terminal,
  Java: Cpu,
  C: Code2,
  'HTML / CSS': Monitor,
  'Power BI': BarChart3,
  DAX: Database,
  'Git & GitHub': GitBranch,
  Linux: Terminal,
  MySQL: Database,
  'AWS EC2': Cloud,
  'AWS S3': Cloud,
  'AWS Lambda': Zap,
  'AWS IAM': Shield,
  CloudWatch: BarChart3,
};

const SkillCard = ({ skill, index, isDark }) => {
  const IconComponent = skillIcons[skill.name] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`group p-5 rounded-2xl transition-colors ${
        isDark
          ? 'bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-violet-500/20'
          : 'bg-white border border-gray-100 hover:bg-gray-50 hover:border-violet-200 shadow-sm'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`p-2 rounded-lg ${
            isDark
              ? 'bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20'
              : 'bg-violet-50 text-violet-600 group-hover:bg-violet-100'
          }`}
        >
          <IconComponent size={18} />
        </div>
        <span
          className={`text-sm font-inter font-medium ${
            isDark ? 'text-gray-300' : 'text-gray-800'
          }`}
        >
          {skill.name}
        </span>
        <span
          className={`ml-auto text-xs font-inter font-medium ${
            isDark ? 'text-gray-500' : 'text-gray-400'
          }`}
        >
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div
        className={`h-1.5 rounded-full overflow-hidden ${
          isDark ? 'bg-white/[0.06]' : 'bg-gray-100'
        }`}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const { isDark } = useTheme();

  const categories = [
    { key: 'languages', label: 'Languages', data: skills.languages },
    { key: 'tools', label: 'Tools', data: skills.tools },
    { key: 'cloud', label: 'Cloud', data: skills.cloud },
  ];

  return (
    <section
      id="skills"
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
            My Expertise
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
            Skills & Technologies
          </motion.h2>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="languages" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList
              className={`${
                isDark
                  ? 'bg-white/[0.04] border border-white/[0.06]'
                  : 'bg-gray-100 border border-gray-200'
              }`}
            >
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.key}
                  value={cat.key}
                  className={`font-inter text-sm data-[state=active]:bg-violet-600 data-[state=active]:text-white ${
                    isDark
                      ? 'text-gray-400 data-[state=active]:shadow-none'
                      : 'text-gray-600'
                  }`}
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat.key} value={cat.key}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.data.map((skill, i) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={i}
                    isDark={isDark}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
