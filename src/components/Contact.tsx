import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_f2198au', // Replace with your EmailJS service ID
        'template_g2f2aka', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'l2o6-cyY1LBlzCi9t' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          alert('✅ Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form after submission
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('❌ Failed to send message. Please try again.');
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-[#0a192f] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-2"
          >
            Contact <span className="text-[#00f2fe]">Me</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Work Together</h3>
              <p className="text-gray-400 text-lg mb-8">
                I am a passionate Full Stack Development student actively learning and building projects. I am eager to gain hands-on experience through internships or full-time opportunities, where I can contribute, learn, and grow. Let’s connect and collaborate! 
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-[#00f2fe] text-lg">
                <span className="mr-2">➜</span>
                <a href="mailto:mariyarajiv350@gmail.com" className="hover:text-white transition-colors">
                  mariyarajiv350@gmail.com
                </a>
              </div>
              <div className="flex items-center text-[#00f2fe] text-lg">
                <span className="mr-2">☎</span>
                <span>+916301125589</span>
              </div>
            </div>

            <div className="flex space-x-6 mb-8">
              {[
                { Icon: Github, link: "https://github.com/MariyRajiv" },
                { Icon: Instagram, link: "https://www.instagram.com/_rajiv_04" },
                { Icon: Linkedin, link: "https://www.linkedin.com/in/mariya-rajiv-reddy-chavva-9a117830b" }
              ].map(({ Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-[#112240]/50 text-gray-300 rounded-lg border border-[#00f2fe]/20 focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] transition-colors placeholder-gray-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-[#112240]/50 text-gray-300 rounded-lg border border-[#00f2fe]/20 focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] transition-colors placeholder-gray-500"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter Your Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-[#112240]/50 text-gray-300 rounded-lg border border-[#00f2fe]/20 focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] transition-colors placeholder-gray-500"
                required
              />
              <textarea
                name="message"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-6 py-4 bg-[#112240]/50 text-gray-300 rounded-lg border border-[#00f2fe]/20 focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] transition-colors placeholder-gray-500 resize-none"
                required
              ></textarea>
              <motion.button
                type="submit"
                className="btn-primary w-full animate-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
