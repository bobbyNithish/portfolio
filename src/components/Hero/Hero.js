import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="animated-bg"></div>
      </div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm Gandhivaram Nithish Kumar Reddy
        </motion.h1>
        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Developer at Incedo Technology Solutions
        </motion.h2>
        <motion.div
          className="typed-text"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Typewriter
            words={[
              'Java & Spring Boot Expert',
              'React.js Developer',
              'AWS Cloud Practitioner',
              'Microservices Architecture',
              'API Security Specialist',
              'DevOps & CI/CD Implementation'
            ]}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>
        <motion.p
          className="hero-description"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          1.3 years of experience in building scalable web applications
          <br />
          Specialized in Java, Spring Boot, React.js, Node.js, MongoDB, and AWS
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="/assets/resume.pdf" className="cta-button primary" download>
            <FaFileDownload /> Download Resume
          </a>
          <div className="hero-social-links">
            <a href="https://github.com/bobbyNithish" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nithish-kumar-reddy-g-987bb9253/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
