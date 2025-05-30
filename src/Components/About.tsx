"use client";
import { motion } from "framer-motion";
import { FiCode, FiServer, FiZap, FiTool, FiBookOpen, FiBox } from "react-icons/fi";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Profile Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid lg:grid-cols-3 gap-12 mb-24"
                >
                    {/* Profile Card */}
                    <div className="relative group col-span-1">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all" />
                        <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                                Rishabh Rawat
                            </h1>
                            <p className="text-xl text-gray-300 mb-6">
                                Full Stack Developer (MERN Specialist)
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center text-blue-400">
                                    <FiZap className="mr-3" />
                                    <span>Currently @ Startup + Freelancing</span>
                                </div>
                                <div className="flex items-center text-purple-400">
                                    <FiCode className="mr-3" />
                                    <span>1.5+ Years Coding Experience</span>
                                </div>
                                <div className="flex items-center text-green-400">
                                    <FiServer className="mr-3" />
                                    <span>7+ Months Professional Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Intro Text */}
                    <div className="lg:col-span-2 space-y-6">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-300 leading-relaxed border-l-4 border-blue-500 pl-6"
                        >
                            I bridge ideas and reality through full-stack excellence, specializing in
                            performance optimization and robust architecture design. Currently crafting
                            a large-scale backend system integrating LLMs for smart functionality.
                        </motion.p>

                        {/* Current Focus */}
                        <div className="p-6 bg-gray-800/50 rounded-xl border border-blue-500/20">
                            <div className="flex items-center mb-4">
                                <div className="animate-pulse bg-blue-500 w-3 h-3 rounded-full mr-3" />
                                <h3 className="text-lg font-semibold text-blue-400">Current Focus</h3>
                            </div>
                            <p className="text-gray-300">
                                Diving deep into DevOps practices and advanced backend engineering patterns.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Experience Timeline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-24"
                >
                    <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center">
                        Notable Contributions
                    </h2>

                    <div className="relative max-w-3xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 w-1 h-full bg-gray-700 transform -translate-x-1/2" />

                        {/* Timeline Items */}
                        {[
                            {
                                title: "ISKCON Wavecity Official Website",
                                role: "Full Stack Developer",
                                tech: ["React.js", "MongoDB", "Tailwind", "Express.js", "Node.js"],
                                icon: <FiBookOpen />
                            },
                            {
                                title: "E-commerce Platform",
                                role: "Frontend Developer",
                                tech: ["React", "Node.js", "MongoDB"],
                                icon: <FiBox />
                            },
                            {
                                title: "LLM-powered Backend System",
                                role: "Backend",
                                tech: ["Node.js", "Express", "MongoDB", "OpenAI API"],
                                icon: <FiZap />
                            },
                            {
                                title: "NexMentor Platform",
                                role: "Full Stack Lead",
                                tech: ["Node.js", "Mongoose", "REST APIs", "Redux", "Render"],
                                icon: <FiTool />
                            },
                        ].map((item, index) => (
                            <div key={index} className={`mb-12 w-full ${index % 2 === 0 ? 'pr-8 lg:pr-24' : 'pl-8 lg:pl-24'}`}>
                                <motion.div
                                    whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                                    className={`relative bg-gray-800 p-6 rounded-xl border border-gray-700 
                            hover:border-blue-500 transition-all ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                                >
                                    <div className={`absolute top-6 ${index % 2 === 0 ? '-right-8' : '-left-8'}`}>
                                        <div className="p-3 bg-blue-500 rounded-full text-white">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-100 mb-2">{item.title}</h3>
                                    <p className="text-blue-400 mb-3">{item.role}</p>
                                    <div className={`flex flex-wrap ${index % 2 === 0 ? 'justify-end' : 'justify-start'} gap-2`}>
                                        {item.tech.map((tech, techIndex) => (
                                            <span key={techIndex} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Skills Matrix */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-24"
                >
                    <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center">
                        Technical Arsenal
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Frontend Skills */}
                        <SkillCategory
                            title="Frontend Mastery"
                            icon={<FiCode className="text-4xl" />}
                            skills={[
                                { name: "HTML5", level: 95 },
                                { name: "CSS3", level: 90 },
                                { name: "JavaScript", level: 85 },
                                { name: "React.js", level: 88 },
                                { name: "Next.js", level: 82 },
                                { name: "TypeScript", level: 80 },
                                { name: "Tailwind CSS", level: 92 },
                                { name: "Material UI", level: 85 },
                                { name: "Redux Toolkit", level: 83 },
                            ]}
                        />

                        {/* Backend Skills */}
                        <SkillCategory
                            title="Backend Expertise"
                            icon={<FiServer className="text-4xl" />}
                            skills={[
                                { name: "Node.js", level: 88 },
                                { name: "Express.js", level: 85 },
                                { name: "MongoDB", level: 87 },
                                { name: "Mongoose", level: 84 },
                                { name: "REST APIs", level: 89 },
                                { name: "JWT Auth", level: 83 },
                                { name: "WebSockets", level: 75 },
                            ]}
                        />

                        {/* Tools & DevOps */}
                        <SkillCategory
                            title="Tools & Deployment"
                            icon={<FiTool className="text-4xl" />}
                            skills={[
                                { name: "Git/GitHub", level: 90 },
                                { name: "Vercel", level: 88 },
                                { name: "Render", level: 82 },
                                { name: "Postman", level: 85 },
                            ]}
                        />
                    </div>
                </motion.div>

                {/* Philosophy Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-blue-400 mb-6">◆◆◆</div>
                    <h3 className="text-2xl font-semibold text-gray-100 mb-6">
                        Development Philosophy
                    </h3>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        "I believe in building solutions that stand the test of scale while maintaining
                        elegance in simplicity. Every line of code should serve a purpose, and every
                        architecture decision should balance performance with maintainability."
                    </p>
                </div>
            </div>
        </div>
    );
};

const SkillCategory = ({ title, icon, skills }: any) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
    >
        <div className="text-blue-500 mb-6 flex items-center gap-4">
            {icon}
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="space-y-4">
            {skills.map((skill : any, index : number) => (
                <div key={index} className="relative group">
                    <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                        <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

export default AboutPage;