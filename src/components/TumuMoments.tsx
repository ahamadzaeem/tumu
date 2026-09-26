import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './TumuMoments.css';

export function TumuMoments() {
  return (
    <section className="making-section" id="outlets">

      {/* ── FULL BACKGROUND IMAGE ── */}
      <img
        src="/images/making-of-tumu.png"
        alt="Find Outlets Near You — TUMU"
        className="making-bg-img"
      />

      {/* ── LEFT GRADIENT OVERLAY ── */}
      <div className="making-gradient-overlay" />

      {/* ── TEXT OVERLAY ON LEFT ── */}
      <motion.div
        className="making-text-overlay"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="making-eyebrow font-body">04 ── STORES &amp; LOCATIONS</span>

        <h2 className="making-title">
          <span className="text-blue font-heading">Find Outlets</span>
          <br />
          <span className="text-pink font-heading">Near You.</span>
        </h2>

        <p className="making-desc font-body">
          Discover TUMU near you! Indulge in a little piece of Japan.
        </p>

        {/* CTA Direct Navigation to Locations Page */}
        <button
          className="btn btn-pink btn-with-icon outlet-cta"
          onClick={() => window.location.hash = '#/find-us'}
        >
          EXPLORE OUR OUTLETS <ArrowRight className="icon-arrow" size={18} />
        </button>
      </motion.div>

    </section>
  );
}


