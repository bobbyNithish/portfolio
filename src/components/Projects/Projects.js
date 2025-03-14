import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "KUBARENA - Startup Platform",
      date: "2024",
      description: "A full-stack platform connecting entrepreneurs and investors, streamlining startup funding processes.",
      detailedFeatures: [
        "Engineered a Spring Boot and MongoDB backend for optimal data flow and scalability",
        "Integrated real-time notifications via Redis Pub/Sub for seamless communication",
        "Implemented secure authentication with JWT and OAuth",
        "Built AI-powered search and recommendation system for investor-startup matchmaking"
      ],
      techStack: ["Spring Boot", "MongoDB", "Redis", "React.js", "JWT", "OAuth"],
      github: "#",
      demo: "#"
    },
    {
      title: "Code Vulnerability Scanner",
      date: "May 2024 – Jun 2024",
      description: "Real-time code vulnerability detection system integrated with CI/CD pipelines.",
      detailedFeatures: [
        "Developed real-time scanner for detecting security threats in repositories",
        "Built RESTful API-based security engine reducing breaches by 70%",
        "Implemented automated threat intelligence based on OWASP guidelines",
        "Designed React.js security dashboard for real-time monitoring"
      ],
      techStack: ["React.js", "Spring Boot", "OWASP", "CI/CD", "REST APIs"],
      github: "#",
      demo: "#"
    },
    {
      title: "Hackathon Registration Portal",
      date: "Feb 2024 – Apr 2024",
      description: "Scalable platform for hackathon management with automated evaluation system.",
      detailedFeatures: [
        "Built OTP-based authentication with two-factor security verification",
        "Developed interactive judges panel for automated project evaluation",
        "Implemented event-driven architecture with message queues",
        "Created automated report generation system"
      ],
      techStack: ["React.js", "Spring Boot", "PostgreSQL", "Message Queues"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.div 
        className="projects-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card"
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-date">{project.date}</p>
                <p className="project-description">{project.description}</p>
                <ul className="feature-list">
                  {project.detailedFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="tech-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
