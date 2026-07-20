import React from 'react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      background: 'var(--black2)',
      borderTop: '1px solid rgba(255,107,0,0.15)',
      padding: '40px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background court net */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', opacity: 0.04,
      }}>
        <svg viewBox="0 0 1200 150" style={{ width: '100%', height: '100%' }} xmlns="http://www.w3.org/2000/svg">
          {/* Net pattern */}
          {[...Array(20)].map((_, i) => (
            <line key={i} x1={i * 60} y1="0" x2={i * 60} y2="150" stroke="#ff6b00" strokeWidth="1"/>
          ))}
          {[...Array(8)].map((_, i) => (
            <line key={i} x1="0" y1={i * 20} x2="1200" y2={i * 20} stroke="#ff6b00" strokeWidth="1"/>
          ))}
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>

        {/* Left */}
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '3px', color: 'var(--white)', marginBottom: 6 }}>
            <span style={{ color: 'var(--orange)' }}>DSP</span> PORTFOLIO
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)' }}>
            Bolli Devi Sri Prasad · Full Stack Developer · Hyderabad
          </div>
        </div>

        {/* Center links */}
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/bollidevisriprasad' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/devi-sri-prasad-3508702a0' },
            { label: 'Email', href: 'mailto:bdevisriprasad2004@gmail.com' },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--muted)',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--orange)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{link.label}</a>
          ))}
        </div>

        {/* Scroll to top */}
        <button onClick={scrollToTop} style={{
          background: 'transparent',
          border: '1.5px solid var(--orange)',
          color: 'var(--orange)',
          width: 44, height: 44,
          borderRadius: '4px',
          fontSize: '1.2rem',
          cursor: 'none',
          transition: 'all 0.2s',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        onMouseEnter={e => { e.target.style.background = 'var(--orange)'; e.target.style.color = 'var(--black)'; }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--orange)'; }}
        >↑</button>
      </div>

      <div style={{
        marginTop: 24,
        paddingTop: 20,
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10,
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        color: 'var(--muted)',
      }}>
        <span>© 2026 Bolli Devi Sri Prasad. All rights reserved.</span>
        <span style={{ color: 'var(--orange)' }}>Built with React ⚛️ · Deployed on GitHub Pages 🚀</span>
      </div>

      <style>{`@media (max-width: 768px) { footer { padding: 30px 20px !important; } footer > div > div:nth-child(2) { display: none; } }`}</style>
    </footer>
  );
}
