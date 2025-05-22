import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Full-Stack  Developer', 'Android App Developer', 'UI/UX Designer'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <div id="home" className="relative min-h-screen bg-[#0a192f] flex items-center">
      {/* Gradient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl text-gray-200 mb-4">Hello, It's Me</h2>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Chavva Mariya Rajiv Reddy</span>{' '}
            <span className="text-[#00f2fe]">....</span>
            </h1>

            <h2 className="text-2xl text-gray-200 mb-6">
              And I'm a <span ref={typedRef} className="text-[#00f2fe]"></span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg text-lg">
              I am passionate about full-stack development and crafting responsive, interactive user interfaces. 
              I enjoy bringing creative ideas to life through innovative design and development. Constantly eager to learn and explore 
              new technologies, I am dedicated to building aesthetically pleasing and highly functional web experiences. 
              I am eager to enhance my skills in modern web technologies and contribute to innovative projects.
            </p>

            {/* Social Icons */}
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

            <motion.a
              href="#about"
              className="btn-primary animate-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More About Me
            </motion.a>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-[450px] h-[450px] mx-auto">
              {/* Multi-layered glowing border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#00f2fe] opacity-75 blur-md animate-spin-slow"></div>
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#4facfe] opacity-75 blur-sm animate-spin-slow"></div>
              
              {/* Image container */}
              <div className="absolute inset-[6px] rounded-full bg-[#0a192f] p-4">
                <img
                  src="/Hero.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </div>

              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_40px_#00f2fe] animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
