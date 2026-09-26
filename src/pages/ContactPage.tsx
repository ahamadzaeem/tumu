import { useState } from 'react';
import { ArrowLeft, CheckCircle, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import './Pages.css';

const FAQS = [
  {
    q: 'Is TUMU 100% Vegetarian?',
    a: 'Yes! All TUMU crisp shells and cream fillings are 100% vegetarian, eggless, and made with pure dairy cream and natural flavors.'
  },
  {
    q: 'What is the shelf life of a TUMU crisp stick?',
    a: 'Our baked wafer shells maintain maximum crunch for up to 9 months. Once freshly filled with cream at our stores, we recommend enjoying it within 30 minutes for peak crispy-creamy texture.'
  },
  {
    q: 'Where can I order TUMU online for delivery?',
    a: 'You can order TUMU online through Swiggy, Zomato, and Instamart in all cities with active TUMU outlets.'
  },
  {
    q: 'Do you offer bulk catering for events or corporate gifts?',
    a: 'Yes! We provide custom TUMU gift boxes and live snack counters for weddings, corporate events, and birthday parties. Contact us using the form below!'
  }
];

export function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="page-container">
      {/* ── Banner ── */}
      <div className="page-banner">
        <span className="page-banner-eyebrow font-body">06 ── REACH OUT TO US</span>
        <h1 className="page-banner-title">
          <span className="text-blue font-heading">Contact</span> <span className="text-pink font-heading">TUMU.</span>
        </h1>
      </div>

      <div className="container page-content">
        <button className="back-link-btn font-body" onClick={() => window.location.hash = '#/'}>
          <ArrowLeft size={16} /> BACK TO HOME
        </button>

        <div className="grid-two-col grid-contact">
          
          {/* Left Column: Contact Cards & FAQs */}
          <div className="contact-info-left">
            <h2 className="font-heading text-black" style={{ fontSize: '1.8rem', marginBottom: '1.2rem' }}>
              WE'D LOVE TO HEAR FROM YOU!
            </h2>
            <p className="font-body" style={{ fontSize: '1.05rem', color: '#555', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Have questions about our crisp treats? Feedback on a store visit? Or want to discuss bulk event orders? 
              Reach out to our customer care crew!
            </p>

            {/* Info Cards */}
            <div className="contact-cards-stack">
              <div className="contact-info-card">
                <div className="contact-icon-box bg-pink-tint">
                  <Phone size={22} className="text-pink" />
                </div>
                <div>
                  <h4 className="font-heading text-black" style={{ fontSize: '1.05rem', margin: '0 0 0.25rem' }}>Customer Care</h4>
                  <p className="font-body" style={{ margin: 0, fontSize: '0.92rem', color: '#555' }}>+91 22 8899 7766 (Mon-Sat, 10 AM - 7 PM)</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-box bg-blue-tint">
                  <Mail size={22} className="text-blue" />
                </div>
                <div>
                  <h4 className="font-heading text-black" style={{ fontSize: '1.05rem', margin: '0 0 0.25rem' }}>Support Email</h4>
                  <p className="font-body" style={{ margin: 0, fontSize: '0.92rem', color: '#555' }}>hello@tumucream.com / support@tumucream.com</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-box bg-cream-tint">
                  <MapPin size={22} className="text-black" />
                </div>
                <div>
                  <h4 className="font-heading text-black" style={{ fontSize: '1.05rem', margin: '0 0 0.25rem' }}>Corporate HQ</h4>
                  <p className="font-body" style={{ margin: 0, fontSize: '0.92rem', color: '#555' }}>
                    TUMU Indulgence Pvt. Ltd., Level 5, Capital Tower, BKC G Block, Bandra East, Mumbai - 400051
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Accordion Section */}
            <div className="faq-section-wrap" style={{ marginTop: '3.5rem' }}>
              <span className="find-eyebrow font-body">FREQUENTLY ASKED QUESTIONS</span>
              <h3 className="font-heading text-black" style={{ fontSize: '1.5rem', marginBottom: '1.2rem' }}>
                HAVE A QUESTION?
              </h3>

              <div className="faq-accordion-stack">
                {FAQS.map((faq, idx) => {
                  const isOpen = expandedFaq === idx;
                  return (
                    <div key={idx} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                      <button 
                        className="faq-question-btn font-heading"
                        onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown size={18} className={`faq-arrow ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isOpen && (
                        <div className="faq-answer-box font-body">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-side">
            <div className="page-form-card">
              {formSubmitted ? (
                <div className="form-success-box text-center">
                  <CheckCircle size={60} className="text-pink" style={{ margin: '0 auto 1rem' }} />
                  <h3 className="font-heading text-black" style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>MESSAGE SENT!</h3>
                  <p className="font-body" style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Thank you <strong>{formData.name}</strong>! We have received your query and will reply to <strong>{formData.email}</strong> within 24 business hours.
                  </p>
                  <button 
                    className="btn btn-blue"
                    style={{ marginTop: '1.5rem', borderRadius: '9999px' }}
                    onClick={() => setFormSubmitted(false)}
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="form-heading-title font-heading">
                    SEND A MESSAGE
                  </h3>

                  <div className="form-group">
                    <label className="form-label font-body">Your Name</label>
                    <input 
                      type="text" 
                      className="form-input font-body" 
                      required 
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label font-body">Email Address</label>
                    <input 
                      type="email" 
                      className="form-input font-body" 
                      required 
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label font-body">Subject Category</label>
                    <select 
                      className="form-select font-body"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="general">General Feedback</option>
                      <option value="order">Order &amp; Delivery Support</option>
                      <option value="events">Bulk Orders &amp; Event Catering</option>
                      <option value="press">Press &amp; Media Inquiries</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label font-body">Message Details</label>
                    <textarea 
                      className="form-textarea font-body" 
                      required 
                      placeholder="Type your message or query here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-pink form-submit-btn font-body">
                    SEND MESSAGE
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
