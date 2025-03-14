import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const highlights = [
    {
      title: "Full Stack Development",
      description: "1.3 years of experience in designing and developing scalable web applications using Java, Spring Boot, React.js, and Node.js"
    },
    {
      title: "API & Security",
      description: "Expertise in RESTful APIs, JWT authentication, OAuth, and implementing OWASP security best practices"
    },
    {
      title: "Cloud & DevOps",
      description: "Proficient in AWS services, Docker, Kubernetes, and implementing CI/CD pipelines for automated deployments"
    },
    {
      title: "Performance Optimization",
      description: "Reduced API response times by 50% through Redis caching and query optimization techniques"
    }
  ];

  return (
    <section id="about" className="about-section">
      <motion.div 
        className="about-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>I am a Full Stack Developer at Incedo Technology Solutions, working with Verizon in the Telecom Domain. With 1.3 years of experience, I specialize in building robust and scalable web applications.</p>
            <p>My expertise spans across the entire development stack - from crafting intuitive user interfaces with React.js to designing secure and efficient backend systems using Spring Boot and Node.js.</p>
            <p>I'm passionate about implementing cloud solutions and maintaining high performance and security standards in all my projects.</p>
          </motion.div>

          <motion.div 
            className="about-highlights"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div 
                key={index}
                className="highlight-card"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
