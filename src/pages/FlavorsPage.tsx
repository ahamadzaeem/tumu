import { useState } from 'react';
import { ArrowLeft, ShoppingBag, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Pages.css';
import '../components/OurFlavors.css';

export interface FlavorData {
  id: string;
  name: string;
  kanji: string;
  bg: string;
  accent: string;
  img: string;
  bgImage: string;
  desc: string;
  ingredients: string;
}

const ALL_FLAVORS: FlavorData[] = [
  { 
    id: 'vanilla', 
    name: 'VANILLA', 
    kanji: 'バニラ', 
    bg: '#F9F5EC', 
    accent: '#C8A066', 
    img: '/images/flavors/vanila(og one).png',
    bgImage: '/images/flavors/bg_vanilla_custom.png',
    desc: 'Infused with premium Madagascar bourbon vanilla beans, offering a timelessly aromatic and comforting experience.',
    ingredients: 'Madagascar Vanilla Pods, Pure Cream, Traditional Crust.'
  },
  { 
    id: 'cacao', 
    name: 'CACAO', 
    kanji: 'カカオ', 
    bg: '#EAD1C2', 
    accent: '#5E3A26', 
    img: '/images/flavors/chocolate.png',
    bgImage: '/images/flavors/bg_chocolate_custom.png',
    desc: 'Rich, smooth Japanese-style chocolate cream filling for the ultimate cacao experience.',
    ingredients: 'Premium Cocoa, Smooth Dairy Cream, Baked Shell.'
  },
  { 
    id: 'latte', 
    name: 'ROASTED LATTE', 
    kanji: 'ラテ', 
    bg: '#F4EEDB', 
    accent: '#8B5A2B', 
    img: '/images/flavors/latte.png',
    bgImage: '/images/flavors/bg_latte_custom.png',
    desc: 'Freshly roasted espresso notes blended into silky cream for coffee lovers.',
    ingredients: 'Roasted Espresso, Pure Milk Cream, Golden Crust.'
  },
  { 
    id: 'matcha', 
    name: 'MATCHA', 
    kanji: '抹茶', 
    bg: '#EAF7F5', 
    accent: '#2E7D32', 
    img: '/images/flavors/matcha.png',
    bgImage: '/images/flavors/bg_matcha_custom.png',
    desc: 'Crafted using authentic Uji green tea powder, delivering a perfect balance of earthy bitterness and rich sweet cream.',
    ingredients: 'Ceremonial Uji Matcha, Pure Milk Cream, Crisp Rice Shell.'
  },
  { 
    id: 'strawberry', 
    name: 'STRAWBERRY', 
    kanji: '苺', 
    bg: '#FCEBF0', 
    accent: '#E43D5B', 
    img: '/images/flavors/strawberry.png',
    bgImage: '/images/flavors/bg_strawberry_custom.png',
    desc: 'Bursting with real sun-ripened strawberry puree folded into our smooth dairy cream core for a refreshingly sweet delight.',
    ingredients: 'Tochigi Strawberries, Pure Velvet Cream, Baked Pastry Shell.'
  },
];

export function FlavorsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorData | null>(null);

  const filteredFlavors = ALL_FLAVORS.filter(flavor => 
    flavor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="page-banner">
        <span className="page-banner-eyebrow">Discover the Collection</span>
        <h1 className="page-banner-title font-heading">OUR FLAVOURS</h1>
      </div>

      <div className="container page-content">
        <button className="back-link-btn" onClick={() => window.location.hash = '#/'}>
          <ArrowLeft size={16} /> BACK TO HOME
        </button>

        {/* Search bar */}
        <div style={{ maxWidth: '400px', margin: '0 auto 3rem' }}>
          <input
            type="text"
            className="form-input"
            placeholder="Search flavours..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Page Grid - Clean, Non-Card Layout with BIG product sticks */}
        <div className="page-grid">
          {filteredFlavors.map((flavor) => (
            <div 
              key={flavor.id} 
              className="flavor-pod-page"
              onClick={() => setSelectedFlavor(flavor)}
            >
              {/* Organic shape background with ambient flavor image inside */}
              <div className="flavor-pod-page-bg" style={{ backgroundColor: flavor.bg }}>
                {flavor.bgImage && (
                  <div 
                    className="flavor-pod-page-bg-img"
                    style={{ backgroundImage: `url(${flavor.bgImage})` }}
                  />
                )}
              </div>

              <div className="flavor-pod-page-inner">
                <div className="flavor-top">
                  <span className="flavor-kanji" style={{ color: flavor.accent }}>{flavor.kanji}</span>
                </div>

                {/* BIG TUMU stick centerpiece */}
                <div className="flavor-visual-page">
                  <img
                    className="flavor-pod-page-img"
                    src={flavor.img}
                    alt={flavor.name}
                    loading="lazy"
                  />
                </div>

                {/* Clean Pod Info & Action Button (No heavy card box) */}
                <div className="flavor-pod-page-info">
                  <h3 className="flavor-pod-page-title font-heading" style={{ color: flavor.accent }}>
                    {flavor.name}
                  </h3>
                  <button className="flavor-view-btn" style={{ color: flavor.accent }}>
                    EXPLORE FLAVOUR <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flavor Details Modal Popup */}
      <AnimatePresence>
        {selectedFlavor && (
          <div className="flavor-modal-overlay" onClick={() => setSelectedFlavor(null)}>
            <motion.div 
              className="flavor-modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <button className="flavor-modal-close" onClick={() => setSelectedFlavor(null)}>
                <X size={22} />
              </button>

              <div className="flavor-modal-left" style={{ backgroundColor: selectedFlavor.bg }}>
                {selectedFlavor.bgImage && (
                  <div 
                    className="flavor-modal-bg-img"
                    style={{ backgroundImage: `url(${selectedFlavor.bgImage})` }}
                  />
                )}
                <img
                  className="flavor-modal-img"
                  src={selectedFlavor.img}
                  alt={selectedFlavor.name}
                />
              </div>

              <div className="flavor-modal-right">
                <span className="flavor-modal-kanji">{selectedFlavor.kanji}</span>
                
                <h2 className="flavor-modal-title font-heading" style={{ color: selectedFlavor.accent }}>
                  {selectedFlavor.name}
                </h2>
                
                <p className="flavor-modal-desc font-body">
                  {selectedFlavor.desc}
                </p>

                <div className="flavor-modal-ingredients">
                  <h4>Ingredients</h4>
                  <p>{selectedFlavor.ingredients}</p>
                </div>

                <button 
                  className="flavor-modal-order-btn"
                  style={{ backgroundColor: selectedFlavor.accent }}
                  onClick={() => {
                    setSelectedFlavor(null);
                    window.location.hash = '#/find';
                  }}
                >
                  <ShoppingBag size={18} /> FIND OUTLETS & ORDER NOW
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
