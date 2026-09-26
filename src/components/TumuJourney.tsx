import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './TumuJourney.css';

export function TumuJourney() {
  return (
    <section className="story-section" id="journey">
      <div className="story-container">
        
        {/* Full Bleed Canvas Background Artwork */}
        <img
          src="/images/all-the-way-from-japan.png"
          alt="All The Way From Japan — TUMU Journey"
          className="story-bg-img"
        />

        {/* HTML Content Overlay Layer */}
        <div className="story-overlay">
          <div className="story-left-content">
            
            {/* Top Eyebrow */}
            <motion.div
              className="story-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="story-eyebrow-text font-body">OUR JOURNEY</span>
              <span className="story-line" />
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              className="story-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-blue font-heading">All The Way</span>
              <br />
              <span className="text-pink font-heading">Japan.</span>
            </motion.h2>

            {/* Body Paragraph */}
            <motion.p
              className="story-desc font-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Inspired by Japanese craftsmanship. Loved in India, TUMU brings a global dessert experience closer to home.
            </motion.p>

            {/* Action CTA Button */}
            <motion.div
              className="story-action"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <button
                className="btn btn-blue btn-with-icon story-cta font-body"
                onClick={() => (window.location.hash = '#/journey')}
              >
                EXPLORE OUR STORY <ArrowRight className="icon-arrow" size={18} />
              </button>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}




