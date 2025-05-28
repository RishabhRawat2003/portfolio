"use client";
import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              Full Stack Developer
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-2">
                MERN Specialist
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              Hi, I'm Rishabh Rawat, a Full Stack Developer with 7+ months of industry experience 
              and 1.5+ years of coding expertise in the MERN stack. I excel in both frontend and 
              backend development, complemented by 1 year of successful freelancing experience.
            </p>

            <div className="flex space-x-6 mb-12">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Let's Connect
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://res.cloudinary.com/rishabh09/image/upload/f_auto,q_auto/Rishabh_Rawat_sapuia"
                target='_blank'
                className="border border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500/10"
              >
                Download CV
              </motion.a>
            </div>

            {/* Tech Stack */}
            <div className="flex space-x-8 text-4xl text-gray-400">
              <SiMongodb className="hover:text-green-500 transition-colors" />
              <SiExpress className="hover:text-yellow-500 transition-colors" />
              <SiReact className="hover:text-blue-400 transition-colors" />
              <SiNodedotjs className="hover:text-green-600 transition-colors" />
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-all" />
            <div className="relative h-96 bg-gray-800 rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-8xl opacity-10"
              >
                {"</>"}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Experience Cards */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-3 gap-8 mt-24"
        >
          {[
            { title: "Industry Experience", value: "7+ Months" },
            { title: "Coding Experience", value: "1.5+ Years" },
            { title: "Freelance Projects", value: "2+ Completed" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-colors">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">{item.value}</h3>
              <p className="text-gray-400">{item.title}</p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};