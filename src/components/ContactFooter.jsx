import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  ChevronUp,
  ArrowUpRight,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

const ContactFooter = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }
    setSending(true);
    // MOCK: Save to localStorage
    setTimeout(() => {
      const messages = JSON.parse(
        localStorage.getItem('contactMessages') || '[]'
      );
      messages.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('contactMessages', JSON.stringify(messages));
      toast.success('Message sent successfully! (MOCKED)');
      setFormData({ name: '', email: '', message: '' });
      setSending(false);
    }, 800);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      Icon: Github,
      href: personalInfo.github,
      label: 'GitHub',
    },
    {
      Icon: Linkedin,
      href: personalInfo.linkedin,
      label: 'LinkedIn',
    },
    {
      Icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
    },
  ];

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
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
              Get In Touch
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
              Let's Connect
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label
                  className={`block text-sm font-inter font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`font-inter ${
                    isDark
                      ? 'bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-600 focus:border-violet-500'
                      : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-violet-500'
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-inter font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`font-inter ${
                    isDark
                      ? 'bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-600 focus:border-violet-500'
                      : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-violet-500'
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-inter font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={`font-inter resize-none ${
                    isDark
                      ? 'bg-white/[0.04] border-white/[0.08] text-white placeholder:text-gray-600 focus:border-violet-500'
                      : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-violet-500'
                  }`}
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-inter gap-2 py-3"
                size="lg"
              >
                {sending ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </Button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3
                  className={`text-lg font-poppins font-semibold mb-6 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {[
                    { Icon: Mail, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                    { Icon: Phone, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                    { Icon: MapPin, text: personalInfo.location, href: null },
                  ].map(({ Icon, text, href }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl ${
                          isDark
                            ? 'bg-white/[0.04] text-violet-400'
                            : 'bg-violet-50 text-violet-600'
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className={`text-sm font-inter transition-colors ${
                            isDark
                              ? 'text-gray-400 hover:text-violet-400'
                              : 'text-gray-600 hover:text-violet-600'
                          }`}
                        >
                          {text}
                        </a>
                      ) : (
                        <span
                          className={`text-sm font-inter ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4
                  className={`text-sm font-inter font-medium mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Follow me on
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={label !== 'Email' ? '_blank' : undefined}
                      rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-inter transition-colors ${
                        isDark
                          ? 'bg-white/[0.04] text-gray-400 hover:text-violet-400 hover:bg-white/[0.08] border border-white/[0.06]'
                          : 'bg-gray-50 text-gray-600 hover:text-violet-600 hover:bg-gray-100 border border-gray-100'
                      }`}
                      aria-label={label}
                    >
                      <Icon size={16} />
                      {label}
                      <ArrowUpRight size={12} className="opacity-50" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 border-t ${
          isDark
            ? 'bg-[#050507] border-white/[0.06]'
            : 'bg-gray-50 border-gray-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-1 text-sm font-inter">
              <span className={isDark ? 'text-gray-500' : 'text-gray-500'}>
                Built with
              </span>
              <Heart size={14} className="text-rose-500 fill-rose-500" />
              <span className={isDark ? 'text-gray-500' : 'text-gray-500'}>
                by
              </span>
              <span
                className={`font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {personalInfo.name}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`transition-colors ${
                    isDark
                      ? 'text-gray-600 hover:text-gray-400'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <p
              className={`text-xs font-inter ${
                isDark ? 'text-gray-600' : 'text-gray-400'
              }`}
            >
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-20 right-5 z-40 p-3 rounded-full shadow-lg transition-colors ${
          isDark
            ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-500/20'
            : 'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-300/30'
        }`}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ChevronUp size={20} />
      </motion.button>
    </>
  );
};

export default ContactFooter;
