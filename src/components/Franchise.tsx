import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Franchise.css';

export function Franchise() {
  return (
    <section className="franchise-section" id="franchise">

      {/* ── FULL BACKGROUND IMAGE ── */}
      <img
        src="/images/franchise.png"
        alt="Bring TUMU to Your City — Franchise Store Front"
        className="franchise-bg-img"
      />

      {/* ── LEFT GRADIENT OVERLAY ── */}
      <div className="franchise-gradient" />

      {/* ── TEXT OVERLAY ON LEFT ── */}
      <motion.div
        className="franchise-text-overlay"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="franchise-title font-heading">
          <span className="text-blue">Bring TUMU</span>
          <br />
          <span className="text-pink">to Your City.</span>
        </h2>

        <p className="franchise-desc font-body">
          Let more people experience the joy of TUMU. Partner with us and be part of our growing journey.
        </p>

        <button
          className="btn btn-pink btn-with-icon franchise-cta-btn"
          onClick={() => window.location.hash = '#/franchise'}
        >
          PARTNER WITH US <ArrowRight className="icon-arrow" size={18} />
        </button>
      </motion.div>

    </section>
  );
}
