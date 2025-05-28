"use client";
import { motion } from "framer-motion";
import { useState, ChangeEvent, FormEvent } from "react";
import { FiMail, FiLinkedin, FiGithub, FiFileText, FiBriefcase, FiUser, FiSend } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

type SubjectOption = '' | 'hire' | 'freelance' | 'collab' | 'other';

interface FormData {
  name: string;
  email: string;
  subject: SubjectOption;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Add your submission logic here
      console.log('Form data:', formData);
      // Reset form after submission
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'subject' ? value as SubjectOption : value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300">
            Let's discuss how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Channels */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
                <FiBriefcase className="text-blue-400" />
                Career Opportunities
              </h3>
              <p className="text-gray-300 mb-6">
                Looking for a dedicated full-stack developer to join your team?
              </p>
              <a
                href="mailto:hi@rishabhrawat.com?subject=Career Opportunity"
                className="inline-flex items-center px-6 py-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
              >
                <FiFileText className="mr-2" />
                Schedule Discussion
              </a>
            </div>

            <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
                <FiUser className="text-purple-400" />
                Project Collaboration
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/RishabhRawat2003"
                  target="_blank"
                  className="flex items-center px-6 py-3 bg-gray-700/30 text-gray-300 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                >
                  <FiGithub className="mr-2" />
                  GitHub Profile
                </a>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-100 mb-6">Direct Connect</h3>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/rishabh-rawat-371453228/"
                  target="_blank"
                  className="p-3 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin className="text-2xl" />
                </a>
                <a
                  href="mailto:rajputrishabh359@gmail.com"
                  className="p-3 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors"
                  aria-label="Send Email"
                >
                  <FiMail className="text-2xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields with proper TypeScript types */}
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-3 bg-gray-700/30 rounded-lg text-gray-100 focus:outline-none ${errors.name ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-blue-500'
                    }`}
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                />
                {errors.name && (
                  <p id="name-error" className="text-red-400 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email input */}
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-700/30 rounded-lg text-gray-100 focus:outline-none ${errors.email ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-blue-500'
                    }`}
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p id="email-error" className="text-red-400 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject select */}
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-gray-700 rounded-lg text-gray-100 focus:outline-none ${errors.subject ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-blue-500'
                    }`}
                  aria-invalid={!!errors.subject}
                  aria-describedby="subject-error"
                >
                  <option value="">Select a subject</option>
                  <option value="hire">Full-time Position</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="collab">Collaboration</option>
                  <option value="other">Other Inquiry</option>
                </select>
                {errors.subject && (
                  <p id="subject-error" className="text-red-400 text-sm mt-1">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message textarea */}
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Enter your message"
                  onChange={handleInputChange}
                  rows={5}
                  style={{ resize: 'none' }}
                  className={`w-full px-4 py-3 bg-gray-700/30 rounded-lg text-gray-100 focus:outline-none ${errors.message ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-blue-500'
                    }`}
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error"
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
              >
                <FiSend className="text-lg" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-24"
        >
          <div className="text-gray-300 mb-4">Want to see my full qualifications?</div>
          <a
            href="https://res.cloudinary.com/rishabh09/image/upload/f_auto,q_auto/Rishabh_Rawat_sapuia"
            target="_blank"
            className="inline-flex items-center px-8 py-4 bg-blue-500/20 text-blue-400 rounded-xl hover:bg-blue-500/30 transition-colors"
          >
            <FiFileText className="mr-2" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;