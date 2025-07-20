"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface Position {
    title: string;
    startDate: string;
    endDate: string;
    description: string;
    skills: string[];
}

interface Experience {
    company: string;
    image: string;
    positions: Position[];
    current: boolean;
}

export const ExperienceSection = () => {
    const [activeCompany, setActiveCompany] = useState(0);

    const experiences: Experience[] = [
        {
            company: "TruwixTech Solutions Pvt. Ltd.",
            image: "https://res.cloudinary.com/rishabh09/image/upload/v1752990797/truwixLogo-D2MuqVTI_jqp9o0.svg",
            positions: [
                {
                    title: "Software Developer",
                    startDate: "January 2025",
                    endDate: "July 2025",
                    description: "Developed responsive web applications using React and Node.js. Collaborated with senior developers to implement new features and fix bugs.",
                    skills: ["React", "Node.js", "MongoDB", "Express", "Next.js", "TailwindCSS", "Typescript", "AWS"]
                },
            ],
            current: false
        },
        {
            company: "Campaigning Source.",
            image: "https://res.cloudinary.com/rishabh09/image/upload/v1752990797/logo-white_yosjt4.webp",
            positions: [
                {
                    title: "Software Developer Trainee",
                    startDate: "December 2024",
                    endDate: "January 2025",
                    description: "Developed responsive web applications using React and Node.js. Collaborated with senior developers to implement new features and fix bugs.",
                    skills: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"]
                },
                {
                    title: "Software Developer Intern",
                    startDate: "November 2024",
                    endDate: "December 2024",
                    description: "Led development of company's flagship product. Improved performance by 40% and mentored junior developers. Implemented CI/CD pipeline.",
                    skills: ["React", "Next.js", "MongoDB", "Express"]
                }
            ],
            current: false
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Professional <span className="text-blue-400">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                        My journey through the tech industry, showcasing roles, responsibilities,
                        and the skills I've acquired along the way.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Company Selector */}
                    <div className="lg:w-1/3">
                        <div className="bg-gray-800/50 rounded-xl p-6 sticky top-6">
                            <h3 className="text-xl font-semibold text-white mb-4">Companies</h3>
                            <div className="space-y-3">
                                {experiences.map((exp, index) => (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setActiveCompany(index)}
                                        className={`w-full text-left p-4 rounded-lg transition-all ${activeCompany === index
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                                            : 'bg-gray-700/50 hover:bg-gray-700'
                                            }`}
                                    >
                                        <div className="flex items-center">
                                            <div className="flex-1">
                                                <h4 className="font-medium text-white">{exp.company}</h4>
                                                <p className={`text-sm ${activeCompany === index ? 'text-blue-100' : 'text-gray-400'}`}>
                                                    {exp.current ? 'Current' : 'Previous'}
                                                </p>
                                            </div>
                                            {exp.current && (
                                                <div className="flex items-center">
                                                    <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                                                </div>
                                            )}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>

                            {/* Experience Summary */}
                            <div className="mt-8 p-4 bg-gray-900/50 rounded-lg">
                                <h4 className="font-medium text-white mb-2">Total Experience</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Industry Experience</span>
                                        <span className="text-white font-medium">9+ Months</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Coding Experience</span>
                                        <span className="text-white font-medium">1.7+ Years</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Freelance Projects</span>
                                        <span className="text-white font-medium">2+ Completed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience Timeline */}
                    <div className="lg:w-2/3">
                        <div className="bg-gray-800/50 rounded-xl p-6 md:p-8">
                            <div className="flex items-center mb-8">
                                {/* <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" /> */}
                                <Image src={experiences[activeCompany].image} alt="Company Logo" width={100} height={100} className="w-20 ml-4" />
                                <div className="ml-4">
                                    <h3 className="text-2xl font-bold text-white">
                                        {experiences[activeCompany].company}
                                    </h3>
                                    <div className="flex items-center mt-1">
                                        <span className={`h-2 w-2 rounded-full mr-2 ${experiences[activeCompany].current ? 'bg-green-400 animate-pulse' : 'bg-gray-500'
                                            }`}></span>
                                        <span className="text-blue-400">
                                            {experiences[activeCompany].current ? 'Currently Working' : 'Previously Worked'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="relative pl-8 border-l-2 border-gray-700 space-y-10"
                            >
                                {experiences[activeCompany].positions.map((position, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="relative"
                                    >
                                        <div className="absolute -left-11 top-0 h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                                            <div className="h-2 w-2 bg-white rounded-full"></div>
                                        </div>

                                        <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900 transition-all duration-300">
                                            <div className="flex flex-wrap justify-between gap-4 mb-4">
                                                <h4 className="text-xl font-bold text-white">{position.title}</h4>
                                                <div className="bg-gray-800 px-3 py-1 rounded-full text-sm text-blue-400">
                                                    {position.startDate} - {position.endDate}
                                                </div>
                                            </div>

                                            <p className="text-gray-400 mb-5">{position.description}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {position.skills.map((skill, skillIdx) => (
                                                    <span
                                                        key={skillIdx}
                                                        className="px-3 py-1 bg-gray-800 rounded-full text-sm text-blue-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Current Status */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/20"
                        >
                            <h3 className="text-xl font-bold text-white mb-3">Current Status</h3>
                            <p className="text-gray-300 mb-4">
                                Open to new opportunities where I can leverage my MERN stack expertise to build
                                innovative web applications. Seeking roles that challenge me to grow both as a
                                developer and a team contributor.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300">Full-time Roles</span>
                                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">Contract Work</span>
                                <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm text-green-300">Freelance Projects</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};