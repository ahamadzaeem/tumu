import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import './FlavorCarousel.css';

export interface FlavorItem {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  image: string;
  bgImage: string;
  textColor: string;
  accentColor: string;
  badgeColor: string;
}

const FLAVORS: FlavorItem[] = [
  {
    id: 'vanilla',
    name: 'Classic Vanilla',
    tagline: 'Pure & Creamy Signature',
    desc: 'Our original crispy shell filled with rich, smooth Madagascar vanilla bean cream.',
    image: '/images/flavors/vanila(og one).png',
    bgImage: '/images/flavors/bg_vanilla_custom.png',
    textColor: '#111111',
    accentColor: '#D4A359',
    badgeColor: '#D4A359',
  },
  {
    id: 'chocolate',
    name: 'Rich Chocolate',
    tagline: 'Decadent & Indulgent',
    desc: 'Golden roasted crunchy outer layer paired with intense Belgian dark chocolate cream.',
    image: '/images/flavors/chocolate.png',
    bgImage: '/images/flavors/bg_chocolate_custom.png',
    textColor: '#111111',
    accentColor: '#E25B45',
    badgeColor: '#E25B45',
  },
  {
    id: 'latte',
    name: 'Roasted Latte',
    tagline: 'Aromatic & Bold',
    desc: 'Freshly roasted espresso notes blended into silky cream for coffee lovers.',
    image: '/images/flavors/latte.png',
    bgImage: '/images/flavors/bg_latte_custom.png',
    textColor: '#111111',
    accentColor: '#C87B48',
    badgeColor: '#C87B48',
  },
  {
    id: 'matcha',
    name: 'Uji Matcha',
    tagline: 'Earthy & Smooth',
    desc: 'Authentic Japanese Uji matcha green tea infused into velvety chilled cream.',
    image: '/images/flavors/matcha.png',
    bgImage: '/images/flavors/bg_matcha_custom.png',
    textColor: '#111111',
    accentColor: '#2E7D32',
    badgeColor: '#4CAF50',
  },
  {
    id: 'strawberry',
    name: 'Fresh Strawberry',
    tagline: 'Fruity & Vibrant',
    desc: 'Sweet ripe strawberry cream wrapped inside a light, golden crunchy shell.',
    image: '/images/flavors/strawberry.png',
    bgImage: '/images/flavors/bg_strawberry_custom.png',
    textColor: '#111111',
    accentColor: '#FF3366',
    badgeColor: '#FF3366',
  },
];

export function FlavorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const currentFlavor = FLAVORS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? FLAVORS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === FLAVORS.length - 1 ? 0 : prev + 1));
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (isScrolling.current) return;
    if (Math.abs(e.deltaX) > 30 || Math.abs(e.deltaY) > 40) {
      isScrolling.current = true;
      if (e.deltaY > 0 || e.deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setTimeout(() => {
        isScrolling.current = false;
      }, 550);
    }
  };

  return (
    <section 
      className="flavor-showcase-section" 
      id="flavor-showcase"
      onWheel={handleWheel}
      ref={containerRef}
    >
      {/* ── Soft Frosted Glass Partition Divider at Top Boundary ── */}
      <div className="section-partition-divider top-partition" />

      {/* Background Image Layer */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentFlavor.id}
          className="flavor-bg-image-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            backgroundImage: `url(${currentFlavor.bgImage})`,
          }}
        />
      </AnimatePresence>

      {/* White Overlay Layer for TUMU Stick & Text Legibility */}
      <div className="flavor-white-overlay" />

      {/* ── Soft Frosted Glass Partition Divider at Bottom Boundary ── */}
      <div className="section-partition-divider bottom-partition" />

      <div className="flavor-showcase-container">
        
        {/* Header */}
        <div className="flavor-header">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flavor-header-inner"
          >
            <span 
              className="flavor-badge-pill"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                color: '#111111',
                borderColor: currentFlavor.badgeColor
              }}
            >
              <Sparkles size={14} style={{ color: currentFlavor.accentColor }} />
              TUMU FLAVOUR SHOWCASE
            </span>
            <h2 className="flavor-title font-heading">
              <span className="text-blue font-heading">Explore The</span> <span className="text-pink font-heading">Flavours.</span>
            </h2>
          </motion.div>
        </div>

        {/* 3D V-Shape Stage */}
        <div className="flavor-stage">
          
          {/* Controls */}
          <button 
            className="flavor-nav-btn prev-btn" 
            onClick={handlePrev}
            aria-label="Previous Flavor"
          >
            <ChevronLeft size={36} />
          </button>

          <button 
            className="flavor-nav-btn next-btn" 
            onClick={handleNext}
            aria-label="Next Flavor"
          >
            <ChevronRight size={36} />
          </button>

          {/* V-Shape Items Container */}
          <div className="flavor-v-container">
            {FLAVORS.map((item, index) => {
              let offset = index - activeIndex;

              if (offset < -2) offset += FLAVORS.length;
              if (offset > 2) offset -= FLAVORS.length;

              const isActive = index === activeIndex;
              const tiltAngle = -22 + (offset * 4);

              let xPos = offset * 280;
              let scale = isActive ? 1.25 : 0.72 - Math.abs(offset) * 0.12;
              let opacity = isActive ? 1 : Math.max(0.4, 0.75 - Math.abs(offset) * 0.25);
              let rotateY = offset * -18;
              let zIndex = 10 - Math.abs(offset);
              let yPos = Math.abs(offset) * -16;

              return (
                <motion.div
                  key={item.id}
                  className={`flavor-card-item ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  animate={{
                    x: xPos,
                    y: yPos,
                    scale: scale,
                    opacity: opacity,
                    rotateY: rotateY,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 240,
                    damping: 24,
                  }}
                  style={{
                    perspective: 1000,
                  }}
                >
                  <div className="flavor-img-wrapper">
                    
                    {/* The TUMU Stick - Large, bold floating POP */}
                    <motion.img 
                      src={item.image} 
                      alt={item.name} 
                      className="flavor-tumu-img" 
                      animate={{ rotateZ: tiltAngle }}
                      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
                    />

                    {/* Ground-aligned OG Floor Shadow */}
                    <div 
                      className="flavor-stick-shadow"
                      style={{
                        background: isActive 
                          ? `radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 45%, transparent 75%)` 
                          : 'radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 45%, transparent 75%)'
                      }} 
                    />

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Dynamic Flavor Details Panel */}
        <div className="flavor-details-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFlavor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flavor-info-box"
            >
              <div className="flavor-name-wrap">
                <h3 className="flavor-name font-heading" style={{ color: currentFlavor.accentColor }}>
                  {currentFlavor.name}
                </h3>
              </div>

              <p className="flavor-tagline font-body" style={{ color: currentFlavor.accentColor }}>
                {currentFlavor.tagline}
              </p>

              <p className="flavor-desc font-body">
                {currentFlavor.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* EXPLORE MORE FLAVOURS CTA Button */}
          <div className="flavor-cta-wrapper">
            <button 
              className="flavor-explore-btn"
              onClick={() => window.location.hash = '#/flavors'}
            >
              EXPLORE MORE FLAVOURS <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
