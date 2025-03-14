import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDesktop, FaDatabase, FaTools } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      icon: <FaDesktop />,
      title: "Frontend Development",
      description: "Developed interactive Outage Map visualization with real-time updates using React.js. Implemented advanced filtering, warning systems, and intuitive UI components for network monitoring.",
      skills: ["React.js", "Axios", "Redux", "Material-UI"]
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Built robust REST APIs with Spring Boot for real-time outage management. Implemented warning message systems for LBM and Clusters Resolution, enhancing system monitoring capabilities.",
      skills: ["Spring Boot", "Node.js", "REST APIs"]
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Optimized MongoDB query filtering for improved performance. Successfully managed database migration from MongoDB to Cassandra while maintaining data integrity.",
      skills: ["MongoDB", "Cassandra", "Query Optimization"]
    },
    {
      icon: <FaCode />,
      title: "Full Stack Integration",
      description: "Integrated frontend-backend systems with real-time data flow. Developed start and end date filter functionality for comprehensive data analysis.",
      skills: ["System Integration", "API Development", "Data Flow"]
    },
    {
      icon: <FaTools />,
      title: "System Enhancement",
      description: "Improved UI/UX design for intuitive investigation processes. Implemented automated testing frameworks ensuring system reliability.",
      skills: ["UI/UX", "Selenium", "System Architecture"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <motion.div 
        className="experience-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Experience</h2>
        <div className="company-info">
          <h3>Software Engineer</h3>
          <h4>Incedo Inc.</h4>
          <div className="company-summary">
            <p>Full Stack Engineer with expertise in building and maintaining scalable web applications, focusing on the Outage Management System.</p>
          </div>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              className="timeline-item"
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-icon">
                {exp.icon}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>{exp.title}</h4>
                </div>
                <p>{exp.description}</p>
                <div className="skill-tags">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
