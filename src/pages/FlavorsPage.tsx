import { useState } from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import './Pages.css';
import '../components/OurFlavors.css';

const ALL_FLAVORS = [
  { 
    id: '01', 
    name: 'BLACK SESAME', 
    kanji: '黒ごま', 
    bg: '#F2E8DC', 
    accent: '#222222', 
    emoji: '🖤', 
    img: '/flavours/flavour-1.png',
    bgImage: '/images/flavors/bg_chocolate.png',
    desc: 'Deep, nutty, and savory-sweet black sesame cream wrapped in a satisfyingly crisp shell.',
    ingredients: 'Roasted Black Sesame, Dairy Cream, Crisp Pastry Shell.'
  },
  { 
    id: '02', 
    name: 'CACAO', 
    kanji: 'カカオ', 
    bg: '#EAD1C2', 
    accent: '#5E3A26', 
    emoji: '🍫', 
    img: '/images/flavors/chocolate.png',
    bgImage: '/images/flavors/bg_chocolate_custom.png',
    desc: 'Rich, smooth Japanese-style chocolate cream filling for the ultimate cacao experience.',
    ingredients: 'Premium Cocoa, Smooth Dairy Cream, Baked Shell.'
  },
  { 
    id: '03', 
    name: 'MATCHA', 
    kanji: '抹茶', 
    bg: '#EAF7F5', 
    accent: '#2E7D32', 
    emoji: '🍵', 
    img: '/images/flavors/matcha.png',
    bgImage: '/images/flavors/bg_matcha_custom.png',
    desc: 'Crafted using authentic Uji green tea powder, delivering a perfect balance of earthy bitterness and rich sweet cream.',
    ingredients: 'Ceremonial Uji Matcha, Pure Milk Cream, Crisp Rice Shell.'
  },
  { 
    id: '04', 
    name: 'VANILLA', 
    kanji: 'バニラ', 
    bg: '#F9F5EC', 
    accent: '#C8A066', 
    emoji: '🤍', 
    img: '/images/flavors/vanila(og one).png',
    bgImage: '/images/flavors/bg_vanilla_custom.png',
    desc: 'Infused with premium Madagascar bourbon vanilla beans, offering a timelessly aromatic and comforting experience.',
    ingredients: 'Madagascar Vanilla Pods, Pure Cream, Traditional Crust.'
  },
  { 
    id: '05', 
    name: 'COCONUT', 
    kanji: 'ココナッツ', 
    bg: '#F4EEDB', 
    accent: '#6E7051', 
    emoji: '🥥', 
    img: '/images/flavors/latte.png',
    bgImage: '/images/flavors/bg_latte_custom.png',
    desc: 'Tropical, naturally sweet coconut cream with a light and refreshing nutty finish.',
    ingredients: 'Fresh Coconut Cream, Milk, Toasted Pastry Shell.'
  },
  { 
    id: '06', 
    name: 'BLUEBERRY', 
    kanji: 'ブルーベリー', 
    bg: '#E6E4EE', 
    accent: '#363E78', 
    emoji: '🫐', 
    img: '/flavours/flavour-6.png',
    bgImage: '/images/flavors/bg_strawberry_custom.png',
    desc: 'A fruity and vibrant cream infused with real blueberries, balancing tartness and creamy sweetness.',
    ingredients: 'Wild Blueberries, Sweet Cream, Golden Shell.'
  },
  { 
    id: '07', 
    name: 'RASPBERRY', 
    kanji: 'ラズベリー', 
    bg: '#F7DFE4', 
    accent: '#B42548', 
    emoji: '🍓', 
    img: '/images/flavors/strawberry.png',
    bgImage: '/images/flavors/bg_strawberry_custom.png',
    desc: 'Bold, tangy raspberry puree swirled into our signature smooth cream core.',
    ingredients: 'Raspberry Puree, Dairy Cream, Baked Shell.'
  },
  { 
    id: '08', 
    name: 'STRAWBERRY', 
    kanji: '苺', 
    bg: '#FCEBF0', 
    accent: '#E43D5B', 
    emoji: '🍓', 
    img: '/images/flavors/strawberry.png',
    bgImage: '/images/flavors/bg_strawberry_custom.png',
    desc: 'Bursting with real sun-ripened strawberry puree folded into our smooth dairy cream core for a refreshingly sweet delight.',
    ingredients: 'Tochigi Strawberries, Pure Velvet Cream, Baked Pastry Shell.'
  },
];

export function FlavorsPage() {
  const [searchQuery, setSearchQuery] = useState('');

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

        <div className="page-grid">
          {filteredFlavors.map((flavor) => (
            <div 
              key={flavor.id} 
              className="flavor-pod-page"
            >
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
                  <span className="flavor-id font-display" style={{ color: flavor.accent }}>{flavor.id}</span>
                  <span className="flavor-kanji" style={{ color: flavor.accent }}>{flavor.kanji}</span>
                </div>

                <div className="flavor-visual-page">
                  <img
                    className="flavor-pod-page-img"
                    src={flavor.img}
                    alt={flavor.name}
                    loading="lazy"
                  />
                </div>

                <div className="flavor-pod-page-bottom">
                  <h3 className="flavor-name font-heading" style={{ color: flavor.accent }}>{flavor.name}</h3>
                  <p className="flavor-desc">{flavor.desc}</p>
                  <div className="flavor-ingredients">
                    <strong>Ingredients: </strong>{flavor.ingredients}
                  </div>
                  <button 
                    className="btn btn-sm btn-with-icon" 
                    style={{ width: '100%', justifyContent: 'center', backgroundColor: flavor.accent, color: '#fff' }}
                  >
                    <ShoppingBag size={16} /> ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
