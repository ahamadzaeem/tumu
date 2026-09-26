import { motion } from 'framer-motion';
import './SensoryDelight.css';

export function SensoryDelight() {
  return (
    <section className="sensory-section" id="experience">

      {/* ── FULL BACKGROUND IMAGE ── */}
      <img
        src="/images/2nd-section.png"
        alt="Serendipity Inside — TUMU Crisp & Cream"
        className="sensory-bg-img"
      />

      {/* ── TEXT OVERLAY ON RIGHT ── */}
      <motion.div
        className="sensory-text-overlay"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
      >
        <h2 className="sensory-heading font-heading">
          <span className="sensory-word-dark">Serendipity</span>
          <span className="sensory-word-pink">
            Inside.<span className="sensory-dot">✦</span>
          </span>
        </h2>

        <p className="sensory-description font-body">
          A delicate Japanese-inspired shell with a smooth, indulgent cream centre in every bite.
        </p>
      </motion.div>

    </section>
  );
}
