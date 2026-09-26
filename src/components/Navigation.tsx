import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import './Navigation.css';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Auto-close mobile menu when navigating
    const handleHashChange = () => setMenuOpen(false);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <nav className={`navbar-pill-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-pill">
          {/* TUMU logo */}
          <a href="#/" className="navbar-logo-wrap" onClick={() => setMenuOpen(false)}>
            <img src="/logo-new.png" alt="TUMU Crisp & Cream" className="navbar-logo-img" />
          </a>

          {/* Desktop links */}
          <div className="navbar-links">
            <a href="#/flavors">FLAVOURS</a>
            <a href="#/journey">JOURNEY</a>
            <a href="#/find-us">FIND US</a>
            <a href="#/franchise">FRANCHISE</a>
            <a href="#/contact">CONTACT</a>
          </div>

          {/* Desktop CTA */}
          <div className="navbar-cta">
            <button className="btn btn-pink navbar-order-btn" onClick={() => window.location.hash = '#/find-us'}>
              FIND OUTLETS →
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`navbar-hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      {menuOpen && (
        <div className="navbar-drawer-backdrop" onClick={() => setMenuOpen(false)} />
      )}

      {/* Mobile Drawer */}
      <div className={`navbar-drawer ${menuOpen ? 'is-open' : ''}`}>
        <div className="navbar-drawer-header">
          <img src="/logo-new.png" alt="TUMU" className="drawer-logo-img" />
          <button className="drawer-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <div className="navbar-drawer-links">
          <a href="#/flavors" onClick={() => setMenuOpen(false)}>FLAVOURS</a>
          <a href="#/journey" onClick={() => setMenuOpen(false)}>JOURNEY</a>
          <a href="#/find-us" onClick={() => setMenuOpen(false)}>FIND US</a>
          <a href="#/franchise" onClick={() => setMenuOpen(false)}>FRANCHISE</a>
          <a href="#/contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
        </div>

        <button 
          className="btn btn-pink navbar-order-btn" 
          style={{ marginTop: 'auto', width: '100%', padding: '0.9rem' }} 
          onClick={() => { setMenuOpen(false); window.location.hash = '#/find-us'; }}
        >
          FIND OUTLETS →
        </button>
      </div>
    </>
  );
}

