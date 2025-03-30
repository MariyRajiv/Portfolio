import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: "Intern - Google Virtual Android Developer ",
    company: "EduSkills",
    period: "Oct 2024 - Dec 2024",
    description: [
      "Kotlin Programming – Learn Kotlin syntax and object-oriented concepts for Android development.",
      "App Development & UI Design – Build interactive Android apps using Jetpack Compose and XML layouts.",
      " API & Database Management – Integrate REST APIs and manage data with Room Database & Firebase.",
    ],
  },
  {
    title: "Intern - AWS Academy Cloud Foundations",
    company: "Eduskills",
    period: "Jul 2024 - Sep 2024",
    description: [
      "Cloud Computing Fundamentals – Understand AWS architecture, services, and deployment models.",
      "AWS Services & Management – Learn to use EC2, S3, RDS, and IAM for scalable cloud solutions.",
      "Security & Cost Optimization – Implement best practices for cloud security, monitoring, and cost efficiency."
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-slate-800/50">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            <div className="bg-slate-800 rounded-xl p-8 border border-white/10 hover:border-primary-500/50 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <Building2 className="text-primary-400" />
                    {exp.title}
                  </h3>
                  <p className="text-primary-400 font-medium text-lg">{exp.company}</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0 flex items-center gap-2">
                  <Calendar className="text-primary-400" />
                  {exp.period}
                </p>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;