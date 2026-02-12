"use client";
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export const Header = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700"
        >
            <nav className=" mx-auto px-3 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleNavClick('home')}
                        className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    >
                        Rishabh Portfolio
                    </motion.button>

                    <div className="hidden lg:flex items-center lg:space-x-8">
                        {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
                            <motion.button
                                key={section}
                                onClick={() => handleNavClick(section)}
                                className={`relative capitalize px-3 py-2 ${activeSection === section
                                    ? 'text-blue-400'
                                    : 'text-gray-300 hover:text-blue-300'
                                    } transition-colors`}
                                whileHover={{ scale: 1.05 }}
                            >
                                {section}
                                {activeSection === section && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                                        layoutId="header-underline"
                                        transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="hidden md:flex items-center space-x-4">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://github.com/RishabhRawat2003"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-400"
                            >
                                <FiGithub className="text-xl" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="https://www.linkedin.com/in/rishabh-rawat-371453228/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-400"
                            >
                                <FiLinkedin className="text-xl" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                onClick={() => handleNavClick('contact')}
                                className="text-gray-300 hover:text-blue-400"
                            >
                                <FiMail className="text-xl" />
                            </motion.a>
                        </div>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            href="https://res.cloudinary.com/rishabh09/image/upload/f_auto,q_auto/Rishabh_Rawat_kskr0z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 border border-blue-500/30"
                        >
                            <FiFileText className="mr-2" />
                            Resume
                        </motion.a>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
};