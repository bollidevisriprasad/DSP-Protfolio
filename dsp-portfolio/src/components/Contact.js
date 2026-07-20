import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:bdevisriprasad2004@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`;
    window.open(mailtoLink, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputStyle = (name) => ({
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(255,255,255,0.04)',
    border: `1.5px solid ${focused === name ? 'var(--orange)' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '4px',
    color: 'var(--white)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxShadow: focused === name ? '0 0 0 3px rgba(255,107,0,0.1)' : 'none',
  });

  const labelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    color: 'var(--orange)',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: 6,
    display: 'block',
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
      <div className="court-lines"></div>

      {/* Big background text */}
      <div style={{
        position: 'absolute',
        bottom: -20, right: -20,
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(6rem, 15vw, 14rem)',
        color: 'rgba(255,107,0,0.03)',
        letterSpacing: '10px',
        pointerEvents: 'none',
        userSelect: 'none',
        lineHeight: 1,
      }}>CONNECT</div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-tag">// 05 — contact</div>
        <h2 className="section-title">LET'S <span>RALLY</span></h2>
        <p style={{ color: 'var(--muted)', maxWidth: 500, marginBottom: 60 }}>
          Open to full-time roles, internships, freelance projects, and collaborations. Let's build something great together.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'start' }}>

          {/* Left: Info */}
          <div>
            {/* Contact cards */}
            {[
              { icon: '📧', label: 'Email', value: 'bdevisriprasad2004@gmail.com', href: 'mailto:bdevisriprasad2004@gmail.com' },
              { icon: '📱', label: 'Phone', value: '+91 6360055081', href: 'tel:+916360055081' },
              { icon: '🔗', label: 'LinkedIn', value: 'devi-sri-prasad-3508702a0', href: 'https://www.linkedin.com/in/devi-sri-prasad-3508702a0' },
              { icon: '🐙', label: 'GitHub', value: 'bollidevisriprasad', href: 'https://github.com/bollidevisriprasad' },
              { icon: '📍', label: 'Location', value: 'Kismatpur, Rajendranagar, Hyderabad', href: null },
            ].map(item => (
              <a key={item.label}
                href={item.href || '#'}
                target={item.href && !item.href.startsWith('mailto') && !item.href.startsWith('tel') ? '_blank' : undefined}
                rel="noreferrer"
                onClick={!item.href ? (e) => e.preventDefault() : undefined}
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '16px 20px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  color: 'var(--white)',
                  marginBottom: 12,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.transform = 'translateX(6px)'; e.currentTarget.style.background = 'rgba(255,107,0,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.background = 'var(--card-bg)'; }}
              >
                <span style={{ fontSize: '1.3rem', width: 32, textAlign: 'center' }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: 2 }}>{item.label.toUpperCase()}</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--white2)' }}>{item.value}</div>
                </div>
                {item.href && <span style={{ marginLeft: 'auto', color: 'var(--orange)', fontSize: '0.9rem' }}>↗</span>}
              </a>
            ))}
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={labelStyle}>Your Name</label>
                <input
                  name="name" type="text" placeholder="Rajan Kumar"
                  value={form.name} onChange={handleChange}
                  required
                  style={inputStyle('name')}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  name="email" type="email" placeholder="you@email.com"
                  value={form.email} onChange={handleChange}
                  required
                  style={inputStyle('email')}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Subject</label>
              <input
                name="subject" type="text" placeholder="Job Opportunity / Collaboration / Project"
                value={form.subject} onChange={handleChange}
                style={inputStyle('subject')}
                onFocus={() => setFocused('subject')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message" rows={6} placeholder="Hi Devi Sri Prasad, I'd like to discuss..."
                value={form.message} onChange={handleChange}
                required
                style={{ ...inputStyle('message'), resize: 'vertical' }}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <button type="submit" style={{
              background: submitted ? '#2dce6e' : 'var(--orange)',
              color: 'var(--black)',
              border: 'none',
              padding: '16px',
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              letterSpacing: '3px',
              borderRadius: '4px',
              cursor: 'none',
              transition: 'all 0.3s',
              fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            }}
            onMouseEnter={e => !submitted && (e.target.style.background = 'var(--orange3)', e.target.style.transform = 'translateY(-2px)', e.target.style.boxShadow = '0 8px 24px rgba(255,107,0,0.4)')}
            onMouseLeave={e => !submitted && (e.target.style.background = 'var(--orange)', e.target.style.transform = 'translateY(0)', e.target.style.boxShadow = 'none')}
            >
              {submitted ? '✓ MESSAGE SENT!' : 'SEND MESSAGE ↗'}
            </button>

            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)', textAlign: 'center' }}>
              // This will open your email client with the message pre-filled
            </p>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .section > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        input::placeholder, textarea::placeholder { color: #444; }
      `}</style>
    </section>
  );
}
