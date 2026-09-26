import { ArrowLeft, Sparkles, Award, Heart, CheckCircle2 } from 'lucide-react';
import './Pages.css';
import '../components/TumuJourney.css';

const TIMELINE_STEPS = [
  {
    id: '01',
    title: 'THE HERITAGE',
    desc: 'Inspired by fine patisserie techniques and dessert traditions, TUMU was envisioned to bridge centuries-old baking methods with modern gourmet snack design.',
    accent: '#3897D3',
    year: 'BRAND ORIGINS'
  },
  {
    id: '02',
    title: 'THE CRISP & CREAM CRAFT',
    desc: 'We perfected the signature double-baked wafer shell to achieve a light, airy crunch, filled to the rim with slow-churned velvet cream that never leaks or soggies.',
    accent: '#E43D5B',
    year: 'CRAFT MASTERCLASS'
  },
  {
    id: '03',
    title: 'BRAND DESIGN & HARMONY',
    desc: 'Curated with our signature Pantone 7688 Blue, 198 Pink, and 7472 Teal colors. Styled with Titan One typography to evoke joy, beauty, and premium elegance.',
    accent: '#4CBFA6',
    year: 'VISUAL IDENTITY'
  },
  {
    id: '04',
    title: 'LOVED IN INDIA',
    desc: 'Bringing global dessert experience closer to home! We established boutique kiosks, flagship stores, and online delivery across top Indian metros.',
    accent: '#3897D3',
    year: 'INDIAN ROLLOUT'
  }
];

const CRAFT_PILLARS = [
  {
    title: '100% VEGETARIAN',
    desc: 'Crafted with zero egg, 100% pure vegetarian dairy cream and premium cocoa butter.',
    icon: <CheckCircle2 size={24} color="#4CBFA6" />
  },
  {
    title: 'AUTHENTIC INGREDIENTS',
    desc: 'Uji Matcha, Tochigi strawberries, and 70% dark Belgian cocoa.',
    icon: <Award size={24} color="#E43D5B" />
  },
  {
    title: 'DOUBLE-BAKED WAFER',
    desc: 'Engineered wafer shell that stays crispy for up to 9 months without preservatives.',
    icon: <Sparkles size={24} color="#3897D3" />
  },
  {
    title: 'CRAFTED WITH PASSION',
    desc: 'Every bite delivers the perfect ratio of crunchy crust to smooth cream.',
    icon: <Heart size={24} color="#E43D5B" />
  }
];

export function JourneyPage() {
  return (
    <div className="page-container">
      {/* ── Hero Banner ── */}
      <div className="page-banner">
        <span className="page-banner-eyebrow font-body">03 ── HERITAGE &amp; CRAFTSMANSHIP</span>
        <h1 className="page-banner-title">
          <span className="text-blue font-heading">All The Way</span> <span className="text-pink font-heading">From Japan.</span>
        </h1>
      </div>

      <div className="container page-content">
        <button className="back-link-btn font-body" onClick={() => window.location.hash = '#/'}>
          <ArrowLeft size={16} /> BACK TO HOME
        </button>

        {/* Narrative Intro */}
        <div className="journey-intro-card">
          <h2 className="journey-intro-heading font-heading text-black">
            FROM FINE PATISSERIES TO YOUR FAVORITE CITY
          </h2>
          <p className="journey-intro-p font-body">
            TUMU is more than a snack — it is a cultural connection. Inspired by culinary precision 
            and modern food art, we create double-texture treats that elevate simple snack breaks into moments of pure joy.
          </p>
        </div>

        {/* Timeline Journey */}
        <div className="journey-timeline-track">
          <div className="timeline-line-glow" />

          {TIMELINE_STEPS.map((step) => (
            <div key={step.id} className="journey-timeline-item">
              <div 
                className="timeline-badge-node font-heading"
                style={{ borderColor: step.accent, color: step.accent }}
              >
                {step.id}
              </div>

              <div className="timeline-card-box">
                <div className="timeline-card-header">
                  <span className="timeline-step-tag font-body" style={{ color: step.accent }}>{step.year}</span>
                </div>
                <h3 className="timeline-step-title font-heading" style={{ color: step.accent }}>
                  {step.title}
                </h3>
                <p className="timeline-step-desc font-body">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Craft Pillars Section */}
        <div className="craft-pillars-section">
          <div className="pillars-header text-center">
            <span className="pillars-eyebrow font-body">THE TUMU STANDARDS</span>
            <h2 className="pillars-title font-heading">Crafted with Uncompromising Quality.</h2>
          </div>

          <div className="pillars-grid">
            {CRAFT_PILLARS.map((pillar, i) => (
              <div key={i} className="pillar-card">
                <div className="pillar-icon-wrap">{pillar.icon}</div>
                <h4 className="pillar-card-title font-heading">{pillar.title}</h4>
                <p className="pillar-card-desc font-body">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
