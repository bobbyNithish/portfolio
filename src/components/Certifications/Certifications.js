import React from 'react';
import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <motion.div 
        className="certifications-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Certifications</h2>
        <motion.div 
          className="certification-card"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="certification-icon">
            <FaAws />
          </div>
          <div className="certification-content">
            <h3>AWS Cloud Practitioner</h3>
            <p>Valid till Jun 2026</p>
            <div className="certification-badge">
              Verified ✓
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;