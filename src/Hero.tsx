import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Web Developer', 'Frontend Developer', 'UI/UX Designer'],
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] opacity-20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl text-gray-200 mb-4">Hello, It's Me</h2>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="text-white">Your</span>{' '}
              <span className="text-[#4facfe]">Name</span>
            </h1>
            <h2 className="text-2xl text-gray-200 mb-6">
              And I'm a <span ref={typedRef} className="text-[#4facfe]"></span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              I'm a web Designer with extensive experience for over 3 years, 
              expertise is to create and website design, Frontend design, and 
              many more....
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mb-8">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-full border-2 border-[#4facfe] flex items-center justify-center text-[#4facfe] hover:bg-[#4facfe] hover:text-white transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <motion.button
              className="px-8 py-3 bg-[#4facfe] text-white rounded-full font-medium hover:shadow-[0_0_20px_#4facfe] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More About Me
            </motion.button>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-[400px] h-[400px] mx-auto">
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] animate-spin-slow"></div>
              
              {/* Glowing circle */}
              <div className="absolute inset-2 rounded-full bg-[#0a192f] flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover p-4"
                />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_40px_#4facfe] animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;