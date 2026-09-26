import { ArrowRight } from 'lucide-react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer-new">
      <div className="container footer-main-row">

        {/* ── LEFT: LOGO & STATEMENT ── */}
        <div className="footer-left-col">
          <img 
            src="/logo-new.png" 
            alt="TUMU Crisp & Cream" 
            className="footer-logo-new" 
          />
          <p className="footer-tagline-new font-body">
            A crisp &amp; cream dessert,<br />
            for your everyday moments.
          </p>
        </div>

        {/* ── CENTER: NAVIGATION LINKS ── */}
        <div className="footer-center-nav font-body">
          <a href="#/">Home</a>
          <a href="#/journey">Our Story</a>
          <a href="#/flavors">Flavours</a>
          <a href="#/find-us">Locations</a>
          <a href="#/franchise">Franchise</a>
          <a href="#/contact">Contact</a>
        </div>

        {/* ── RIGHT: SOCIALS & FIND NEAR YOU CTA ── */}
        <div className="footer-right-col">
          <div className="footer-social-icons">
            <a href="#" className="footer-social-circle" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="footer-social-circle" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
            </a>
          </div>

          <button 
            className="btn btn-pink btn-sm btn-with-icon footer-find-btn"
            onClick={() => window.location.hash = '#/find-us'}
          >
            FIND NEAR YOU <ArrowRight className="icon-arrow" size={16} />
          </button>
        </div>

      </div>

      {/* ── BOTTOM LEGAL & COPYRIGHT BAR ── */}
      <div className="container footer-bottom-legal font-body">
        <div className="footer-legal-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#/contact">Careers</a>
        </div>

        <div className="footer-copyright">
          © 2024 TUMU. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
