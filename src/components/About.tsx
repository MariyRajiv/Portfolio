
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-20 bg-[#0a192f] overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#00f2fe] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#4facfe] opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
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

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-[#00f2fe]">Me</span>
            </h2>
            <h3 className="text-2xl sm:text-3xl text-white mb-6">Full Stack Developer!</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
            I am a passionate student currently learning full-stack development, with a strong interest in web design and front-end development. I enjoy creating visually appealing and user-friendly websites while continuously exploring new technologies to enhance my skills.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
            As I dive deeper into full-stack development, I focus on understanding user experience (UX) and user interface (UI) principles to build intuitive and seamless web applications. By putting myself in the user's perspective, I aim to create designs that not only look great but also provide smooth and enjoyable interactions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
            I am always eager to learn and apply modern development practices, working on projects that challenge me to grow. With every new project, I research and analyze the target audience and requirements to create functional and aesthetically pleasing digital experiences that align with user needs.
            </p>
            <br></br>
            <br></br>
            <motion.a
              href="#projects"
              className="btn-primary animate-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More About Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;