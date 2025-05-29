"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiUsers, FiBriefcase, FiUser, FiFolder, FiClock } from 'react-icons/fi';
import { SiTypescript, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const projects = {
    personal: [
      // Add more personal projects
    ],
    collaborative: [
      {
        title: "ISKCON Official Website",
        description: "Full-stack development for a global religious organization. Built an admin dashboard to manage dynamic content, integrated YouTube V2 API for automatic livestream/video updates, and implemented a secure payment gateway with a CSR donations system. Included CMS functionality for easy page and section management.",
        tech: ["React.js", "Tailwind", "MongoDB", "Node.js"],
        link: "https://www.iskconwavecity.com",
        role: "Full Stack Developer",
        duration: "5 Months",
        date: "2025"
      },
      {
        title: "LLM-powered Backend System",
        description: "Architected a scalable backend integrating language models for intelligent automation. Implemented advanced email parsing to extract structured data, performed contextual analysis using LLMs, and generated intelligent reports based on extracted content.",
        tech: ["TypeScript", "Node.js", "MongoDB"],
        link: "#",
        role: "Backend Developer",
        status: "In Progress",
        date: "2025"
      },
      {
        title: "TaxRishi – Tax Solutions Platform",
        description: "Developed a feature-rich website offering a range of tax-related services and smart calculators built with complex business logic for accurate tax computation.",
        tech: ["React.js", "TailwindCSS"],
        link: "https://taxrishi.in",
        role: "Frontend Developer",
        status: "Completed",
        date: "2024"
      },
      // Add more collaborative projects
    ],
    freelancing: [
      {
        title: "NexMentor Platform",
        description: "Led Full Stack development for NEET mentorship platform handling 10k+ users",
        tech: ["React", "Node.js", "MongoDB"],
        link: "https://www.nexmentor.com",
        company: "EdTech Startup",
        role: "Full Stack Lead",
        team: "1 member",
        date: "2025"
      },
      {
        title: "MyCampus Safari",
        description: "Developed campus tour platform with itinerary creation and mail notification system",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        link: "https://mycampussafari.com/",
        client: "Tour and Travel Company",
        role: "Full Stack Developer",
        team: "3 members",
        date: "2025"
      },
    ]
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4"
          >
            Project Portfolio
          </motion.h2>
          <p className="text-xl text-gray-300 mb-8">
            Showcase of technical solutions across different engagement models
          </p>

          {/* Tabs Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-800 rounded-xl p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[
              { id: 'personal', icon: <FiUser />, label: 'Personal' },
              { id: 'collaborative', icon: <FiUsers />, label: 'Team' },
              { id: 'freelancing', icon: <FiBriefcase />, label: 'Freelance' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg transition-all ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700/30'
                  }`}
              >
                {tab.icon}
                <span className="ml-2 font-medium">{tab.label}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='wait'>
            {projects[activeTab].length > 0 ? (
              projects[activeTab].map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))
            ) : (
              <motion.div
                className="col-span-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="relative flex flex-col bg-gradient-to-br from-gray-800/70 via-gray-800/50 to-gray-900/70 backdrop-blur-xl rounded-2xl border border-gray-700 overflow-hidden min-h-[400px]">
                  {/* Geometric background pattern */}
                  <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 20%),
            linear-gradient(to bottom right, transparent 60%, rgba(31, 41, 55, 0.3) 100%)
          `,
                      }}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-10 flex flex-col items-center justify-center h-full text-center">
                    {/* Animated icon */}
                    <motion.div
                      className="mb-8"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse blur-lg"></div>
                        <div className="p-5 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-full relative">
                          <svg className="w-16 h-16 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>

                    {/* Text content */}
                    <div className="mb-8">
                      <motion.h3
                        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        Projects in Progress
                      </motion.h3>
                      <motion.p
                        className="text-lg text-gray-300 max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        I'm currently crafting innovative solutions that showcase cutting-edge technologies and elegant design patterns. Stay tuned for exciting updates!
                      </motion.p>
                    </div>

                    {/* Animated progress indicator */}
                    <motion.div
                      className="relative w-64 h-1.5 bg-gray-700 rounded-full overflow-hidden mb-10"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "100%" }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: ["0%", "65%", "75%", "65%"] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                    {/* Animated dots */}
                    <motion.div
                      className="flex space-x-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"
                          animate={{
                            scale: [1, 1.2, 1],
                            y: [0, -8, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-400/30 rounded-tl-2xl"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-400/30 rounded-tr-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-400/30 rounded-bl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-400/30 rounded-br-2xl"></div>

                  {/* Floating particles */}
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
                        background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#60a5fa',
                        opacity: 0.4
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 5,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="group relative h-full flex flex-col bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all"
  >
    <div className="p-6 flex flex-col flex-1">
      {/* Card Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
            <FiFolder className="text-2xl" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
            <span className="text-sm text-blue-400">{project.date}</span>
          </div>
        </div>
        {project.link && (
          <a
            href={project.link}
            className="text-gray-300 hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink className="text-xl" />
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6 flex-1">{project.description}</p>

      {/* Metadata */}
      <div className="flex flex-wrap gap-3 mb-6">
        {project.status && (
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
            {project.status}
          </span>
        )}
        {project.team && (
          <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
            Team: {project.team}
          </span>
        )}
        {project.duration && (
          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
            {project.duration}
          </span>
        )}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mb-6">
        {project.tech.map((tech, index) => (
          <div
            key={index}
            className="px-3 py-1.5 bg-gray-700/30 rounded-full text-sm text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
          >
            {tech}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="mr-1.5" />
              Source
            </a>
          )}
          {project.client && (
            <span className="text-sm font-medium text-purple-400">{project.client}</span>
          )}
          {project.company && (
            <span className="text-sm font-medium text-green-400">{project.company}</span>
          )}
        </div>
        <span className="text-sm text-gray-400">{project.role}</span>
      </div>
    </div>

    {/* Hover Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity -z-10 pointer-events-none" />
  </motion.div>
);

export default ProjectsSection;