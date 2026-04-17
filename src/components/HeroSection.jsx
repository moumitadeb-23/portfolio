import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Cloud,
  Code2,
  Database,
  Zap,
  BarChart3,
  Shield,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';
import ThreeOrb from './ThreeOrb';

const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];
    if (!isDeleting) {
      setText(currentWord.substring(0, text.length + 1));
      if (text.length + 1 === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setText(currentWord.substring(0, text.length - 1));
      if (text.length - 1 === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [text, isDeleting, wordIndex, words, pauseTime]);

  useEffect(() => {
    const timer = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return text;
};

const floatingIcons = [
  { Icon: Cloud, x: '10%', y: '20%', delay: 0 },
  { Icon: Code2, x: '85%', y: '15%', delay: 0.5 },
  { Icon: Database, x: '75%', y: '75%', delay: 1 },
  { Icon: Zap, x: '15%', y: '70%', delay: 1.5 },
  { Icon: BarChart3, x: '90%', y: '50%', delay: 2 },
  { Icon: Shield, x: '5%', y: '45%', delay: 2.5 },
];

const HeroSection = () => {
  const { isDark } = useTheme();
  const typedRole = useTypingEffect(personalInfo.roles);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        isDark ? 'bg-[#050507]' : 'bg-gray-50'
      }`}
    >
      {/* Three.js Orb Background */}
      <ThreeOrb isDark={isDark} />

      {/* Gradient overlay for readability */}
      <div
        className={`absolute inset-0 z-[1] ${
          isDark
            ? 'bg-gradient-to-r from-[#050507]/90 via-[#050507]/50 to-transparent'
            : 'bg-gradient-to-r from-gray-50/90 via-gray-50/50 to-transparent'
        }`}
      />
      <div
        className={`absolute inset-0 z-[1] ${
          isDark
            ? 'bg-gradient-to-b from-[#050507]/30 via-transparent to-[#050507]/90'
            : 'bg-gradient-to-b from-gray-50/30 via-transparent to-gray-50/90'
        }`}
      />

      {/* Floating tech icons */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden lg:block">
        {floatingIcons.map(({ Icon, x, y, delay }, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              isDark ? 'text-white/[0.07]' : 'text-gray-900/[0.06]'
            }`}
            style={{ left: x, top: y }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon size={32} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-sm font-inter font-medium tracking-wider uppercase mb-4 ${
                isDark ? 'text-violet-400' : 'text-violet-600'
              }`}
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4"
            >
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                {personalInfo.greeting}
              </span>
              <br />
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500"
              >
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <span
                className={`text-lg sm:text-xl font-inter ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                I'm a{' '}
              </span>
              <span className="text-lg sm:text-xl font-inter font-semibold text-violet-500">
                {typedRole}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="text-violet-500 text-xl font-light"
              >
                |
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-base font-inter leading-relaxed mb-8 max-w-lg ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                onClick={scrollToProjects}
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 font-inter gap-2"
                size="lg"
              >
                View Projects
                <ArrowDown size={16} />
              </Button>
              <a href={personalInfo.resumeUrl} download>
                <Button
                  variant="outline"
                  size="lg"
                  className={`px-6 py-3 font-inter gap-2 ${
                    isDark
                      ? 'border-white/[0.12] text-gray-300 hover:bg-white/[0.06]'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Download CV
                </Button>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              {[
                { Icon: Github, href: personalInfo.github, label: 'GitHub' },
                { Icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`p-2.5 rounded-xl transition-colors ${
                    isDark
                      ? 'text-gray-500 hover:text-violet-400 hover:bg-white/[0.06]'
                      : 'text-gray-500 hover:text-violet-600 hover:bg-gray-100'
                  }`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2 border-violet-500/30 shadow-2xl shadow-violet-500/20">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-violet-500/10 animate-pulse" />
              <div className="absolute -inset-6 rounded-full border border-cyan-500/[0.05]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3]"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown
          size={20}
          className={isDark ? 'text-gray-600' : 'text-gray-400'}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
