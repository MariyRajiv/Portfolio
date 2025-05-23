import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['Flutter','React','Javascript', 'HTML5/CSS3'] },
  { category: 'Backend', items: ['Node.js','Express.js','Python', 'Java','C++'] },
  { category: 'Database', items: ['MongoDB', 'SQL','MySql'] },
  { category: 'Tools', items: ['Git', 'AWS', 'VS Code', 'Power BI'] },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-[#0a192f] overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#00f2fe] to-[#4facfe] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#4facfe] to-[#00f2fe] opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#112240] p-6 rounded-lg border border-[#00f2fe]/20 hover:border-[#00f2fe]/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#00f2fe] mb-4">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <motion.li
                    key={skill}
                    className="flex items-center text-gray-300"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="w-2 h-2 bg-[#00f2fe] rounded-full mr-3"></span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;