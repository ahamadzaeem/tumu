import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './OurFlavors.css';

const FLAVORS = [
  { id: '01', name: 'BLACK SESAME', kanji: '黒ごま', bg: '#F2E8DC', accent: '#222222', img: '/flavours/flavour-1.png' },
  { id: '02', name: 'CACAO',        kanji: 'カカオ', bg: '#EAD1C2', accent: '#5E3A26', img: '/flavours/flavour-2.png' },
  { id: '03', name: 'MATCHA',       kanji: '抹茶',   bg: '#EAF7F5', accent: '#4CBFA6', img: '/flavours/flavour-3.png' },
  { id: '04', name: 'VANILLA',      kanji: 'バニラ', bg: '#F9F5EC', accent: '#C8A066', img: '/flavours/flavour-4.png' },
  { id: '05', name: 'COCONUT',      kanji: 'ココナッツ', bg: '#F4EEDB', accent: '#6E7051', img: '/flavours/flavour-5.png' },
  { id: '06', name: 'BLUEBERRY',    kanji: 'ブルーベリー', bg: '#E6E4EE', accent: '#363E78', img: '/flavours/flavour-6.png' },
  { id: '07', name: 'RASPBERRY',    kanji: 'ラズベリー', bg: '#F7DFE4', accent: '#B42548', img: '/flavours/flavour-7.png' },
  { id: '08', name: 'STRAWBERRY',   kanji: '苺',     bg: '#FCEBF0', accent: '#E43D5B', img: '/flavours/flavour-8.png' },
];

export function OurFlavors() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: scrollLeft + (dir === 'right' ? clientWidth * 0.6 : -clientWidth * 0.6),
      behavior: 'smooth',
    });
  };

  return (
    <section className="flavors-section section" id="flavors">
      <div className="container">
        <div className="flavors-header">
          <div>
            <motion.p
              className="flavors-eyebrow font-display"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              ✦ DISCOVER
            </motion.p>
            <motion.h2
              className="font-heading text-blue"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              OUR FLAVOURS
            </motion.h2>
          </div>
          <div className="flavors-nav">
            <button className="flavor-nav-btn" onClick={() => scroll('left')} aria-label="Previous">
              <ArrowLeft size={20} />
            </button>
            <button className="flavor-nav-btn flavor-nav-btn--filled" onClick={() => scroll('right')} aria-label="Next">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flavors-scroll-container" ref={scrollRef}>
        <div className="flavors-track">
          {FLAVORS.map((flavor, i) => (
            <motion.div
              className="flavor-pod"
              key={flavor.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              {/* Organic blob background */}
              <div className="flavor-pod-bg" style={{ backgroundColor: flavor.bg }} />

              {/* Floating Image */}
              <motion.img
                className="flavor-pod-img"
                src={flavor.img}
                alt={flavor.name}
                loading="lazy"
                whileHover={{ y: -15, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              {/* Text overlays */}
              <div className="flavor-pod-content">
                <div className="flavor-pod-top">
                  <span className="flavor-id font-display" style={{ color: flavor.accent }}>{flavor.id}</span>
                  <span className="flavor-kanji" style={{ color: flavor.accent }}>{flavor.kanji}</span>
                </div>
                
                <div className="flavor-pod-bottom">
                  <h3 className="flavor-name font-heading" style={{ color: flavor.accent }}>{flavor.name}</h3>
                  <button className="flavor-cta" style={{ color: flavor.accent }}>
                    Explore <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          {/* End spacer */}
          <div style={{ width: '2rem', flexShrink: 0 }} />
        </div>
      </div>
    </section>
  );
}
