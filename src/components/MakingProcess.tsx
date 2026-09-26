import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './MakingProcess.css';

export function MakingProcess() {
  return (
    <section className="making-craft-section" id="making-process">
      <div className="making-craft-container">
        
        {/* Top Partition Blend Overlay */}
        <div className="making-craft-top-blend" />

        {/* Unbroken High Resolution Background Canvas Image */}
        <img
          src="/images/making_ref_new.png"
          alt="TUMU Our Craft Process"
          className="making-craft-bg"
        />

        {/* HTML Text & Action Overlay Layer */}
        <div className="making-craft-overlay">
          <div className="making-craft-left-content">
            
            {/* Top Eyebrow */}
            <motion.div
              className="craft-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="craft-num font-body">02</span>
              <span className="craft-line" />
              <span className="craft-eyebrow-text font-body">OUR CRAFT</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              className="craft-headline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="craft-text-blue font-heading">Filled with</span>
              <br />
              <span className="craft-text-red font-heading">Real Indulgence.</span>
            </motion.h2>

            {/* Body Paragraph */}
            <motion.p
              className="craft-desc font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Each TUMU Kadimo is filled the way it should be — with smooth, 
              velvety cream, crafted to give you the perfect bite every time.
            </motion.p>

            {/* Action CTA Button */}
            <motion.div
              className="craft-action"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <button
                className="craft-btn font-body"
                onClick={() => (window.location.hash = '#/journey')}
              >
                <span>EXPLORE OUR CRAFT</span>
                <ArrowRight size={18} className="craft-arrow-icon" />
              </button>
            </motion.div>

            {/* Bottom Accent Label */}
            <motion.div
              className="craft-bottom-tag"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="craft-tag-line" />
              <span className="craft-tag-text font-body">CRISP &amp; CREAM</span>
            </motion.div>


          </div>
        </div>

      </div>
    </section>
  );
}
