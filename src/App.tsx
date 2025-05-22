
import { motion } from 'framer-motion';
import {FileText } from 'lucide-react';  // Import the FileText icon
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f]">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0a192f]/80 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <span className="text-3xl font-bold text-white">
              Portfolio<span className="text-[#00f2fe]">.</span>
            </span>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#00f2fe] font-medium transition-all duration-300 text-lg"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Resume Link */}
      <motion.a
        href="/Resume_overleaf.pdf" // Replace with your actual resume URL
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 bg-gradient-to-b from-[#00f2fe] to-[#4facfe] text-[#0a192f] py-6 px-2 rounded-r-lg font-medium shadow-lg hover:shadow-[0_0_30px_#00f2fe] transition-all duration-300 group"
        whileHover={{ x: 5 }}
        whileTap={{ x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FileText className="w-5 h-5 group-hover:animate-bounce rotate-180" />
        <span className="vertical-text [writing-mode:vertical-rl] tracking-wider">Resume</span>
      </motion.a>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
