"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiUsers, FiBriefcase, FiUser, FiFolder } from 'react-icons/fi';
import { SiTypescript, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('personal');
  
  const projects = {
    personal: [
      {
        title: "LLM-powered Backend System",
        description: "Architected a scalable backend integrating language models for intelligent automation",
        tech: ["TypeScript", "Node.js", "MongoDB"],
        link: "#",
        github: "#",
        role: "Solo Developer",
        status: "In Progress",
        date: "2024"
      },
      // Add more personal projects
    ],
    collaborative: [
      {
        title: "NexMentor Platform",
        description: "Led backend development for NEET mentorship platform handling 10k+ users",
        tech: ["React", "Node.js", "MongoDB"],
        link: "#",
        company: "EdTech Startup",
        role: "Backend Lead",
        team: "4 members",
        date: "2023"
      },
      // Add more collaborative projects
    ],
    freelancing: [
      {
        title: "ISKCON Official Website",
        description: "Full-stack development for global religious organization with CMS integration",
        tech: ["Next.js", "Tailwind", "MongoDB"],
        link: "#",
        client: "ISKCON",
        role: "Full Stack Developer",
        duration: "6 Months",
        date: "2023"
      },
      // Add more freelance projects
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
            className="flex justify-center gap-2 mb-12 bg-gray-800 rounded-xl p-2"
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
                className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                  activeTab === tab.id 
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
            {projects[activeTab].map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
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