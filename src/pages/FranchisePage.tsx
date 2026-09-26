import { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import './Pages.css';

export function FranchisePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // NOTE: Replace 'franchise@tumu.in' with your actual franchise team email address
      const response = await fetch("https://formsubmit.co/ajax/franchise@tumu.in", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert("There was a problem submitting your inquiry. Please try again later.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-banner">
        <span className="page-banner-eyebrow">Business Opportunities</span>
        <h1 className="page-banner-title font-heading">TUMU FRANCHISE</h1>
      </div>

      <div className="container page-content">
        <button className="back-link-btn" onClick={() => window.location.hash = '#/'}>
          <ArrowLeft size={16} /> BACK TO HOME
        </button>

        <div className="grid-two-col grid-franchise">
          
          {/* Left panel: Info & Benefits */}
          <div>
            <h2 className="font-heading text-black" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
              GROW WITH INDIA'S FASTEST GROWING DESSERT BRAND
            </h2>
            <p className="font-body" style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              TUMU brings authentic Japanese sweet indulgence to the modern Indian consumer. By partnering with us, 
              you gain access to a proven premium business model, optimized supply chain channels, and a highly popular brand identity.
            </p>

            <h3 className="font-display text-pink" style={{ fontSize: '1.1rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              FRANCHISE ADVANTAGES
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
              {[
                'Low overhead costs with small-footprint kiosk/booth formats.',
                'Premium ingredients and standardized pre-mixes with zero manual wastage.',
                'Centrally managed national marketing and localized grand launch campaigns.',
                'Comprehensive 14-day training covering operations, POS systems, and customer delight.'
              ].map((adv, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} className="text-blue" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.95rem', color: '#333' }}>{adv}</span>
                </div>
              ))}
            </div>

            <div 
              style={{ 
                background: 'var(--color-cream)', 
                border: '1px solid var(--color-border)', 
                borderRadius: '16px', 
                padding: '2rem',
                textAlign: 'center'
              }}
            >
              <img 
                src="/franchise_store.png" 
                alt="TUMU Kiosk Model" 
                style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem', objectFit: 'cover', height: '200px' }}
              />
              <span className="font-heading" style={{ fontSize: '1rem', color: 'var(--color-black)' }}>TUMU Kiosk Model Showcase</span>
            </div>
          </div>

          {/* Right panel: Inquiry Form */}
          <div>
            <div className="page-form-card" style={{ padding: '2.5rem' }}>
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle size={64} className="text-pink" style={{ margin: '0 auto 1.5rem' }} />
                  <h3 className="font-heading text-black" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>INQUIRY RECEIVED</h3>
                  <p className="font-body" style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Thank you for your interest in a TUMU partnership. Our franchise development coordinator will contact you via email or phone within the next 48 business hours.
                  </p>
                  <button 
                    className="btn btn-blue" 
                    style={{ marginTop: '1.5rem', borderRadius: '9999px' }}
                    onClick={() => setFormSubmitted(false)}
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p className="font-body" style={{ fontSize: '1.05rem', color: '#444', textAlign: 'center', marginBottom: '2rem', lineHeight: '1.5' }}>
                    Fill in the inquiry form and someone from our franchise department will get in touch with you.
                  </p>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="simple-form-label">Contact Person</label>
                    <input type="text" name="name" className="simple-form-input" required />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="simple-form-label">Company / Organization</label>
                    <input type="text" name="company" className="simple-form-input" />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="simple-form-label">Contact Number</label>
                    <input type="tel" name="phone" className="simple-form-input" required />
                  </div>

                  <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                    <label className="simple-form-label">Email address</label>
                    <input type="email" name="email" className="simple-form-input" required />
                  </div>

                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label className="simple-form-label">Comments</label>
                    <textarea name="comments" className="simple-form-textarea"></textarea>
                  </div>

                  <button type="submit" className="btn btn-pink form-submit-btn" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                    {isSubmitting ? 'SENDING INQUIRY...' : 'SUBMIT PARTNERSHIP FORM'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
