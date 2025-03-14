import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaPython, FaDatabase, FaReact, FaNodeJs, FaAws, FaDocker, FaGit, FaJenkins, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiApachecassandra, SiSelenium } from 'react-icons/si';

import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <FaDatabase /> }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Cassandra", icon: <SiApachecassandra /> },

        { name: "SQL", icon: <FaDatabase /> }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Git", icon: <FaGit /> },
        { name: "Jenkins", icon: <FaJenkins /> },
        { name: "Selenium", icon: <SiSelenium /> }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3 /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.div 
        className="skills-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              className="skill-category"
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    className="skill-item"
                    key={skillIndex}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
