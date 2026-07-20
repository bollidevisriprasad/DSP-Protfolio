import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '14px 60px' : '22px 60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,107,0,0.15)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.8rem',
          color: 'var(--white)',
          textDecoration: 'none',
          letterSpacing: '3px',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <span style={{
            display: 'inline-block',
            width: 32, height: 32,
            background: 'var(--orange)',
            borderRadius: '4px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1rem', color: 'var(--black)',
          }}>D</span>
          <span>DSP</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '36px' }} className="nav-desktop">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: active === link.href ? 'var(--orange)' : 'var(--white2)',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              position: 'relative',
              padding: '4px 0',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--orange)'}
            onMouseLeave={e => e.target.style.color = active === link.href ? 'var(--orange)' : 'var(--white2)'}
            >
              {link.label}
              <span style={{
                position: 'absolute', bottom: 0, left: 0,
                width: active === link.href ? '100%' : '0',
                height: '2px',
                background: 'var(--orange)',
                transition: 'width 0.3s ease',
              }}></span>
            </a>
          ))}
          <a
            href="https://github.com/bollidevisriprasad"
            target="_blank" rel="noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--black)',
              background: 'var(--orange)',
              padding: '8px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 700,
              letterSpacing: '0.05em',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = 'var(--orange3)'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background = 'var(--orange)'; e.target.style.transform = 'translateY(0)'; }}
          >
            GitHub ↗
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none',
          flexDirection: 'column', gap: '5px',
          background: 'none', border: 'none',
          padding: '8px',
        }} className="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '24px', height: '2px',
              background: 'var(--orange)',
              transition: 'all 0.3s',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)' :
                          menuOpen && i === 1 ? 'scaleX(0)' :
                          menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
            }}></span>
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '70px', left: 0, right: 0, zIndex: 999,
          background: 'rgba(10,10,10,0.98)',
          borderBottom: '1px solid var(--border)',
          padding: '20px',
          display: 'flex', flexDirection: 'column', gap: '16px',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} style={{
              color: 'var(--white)',
              textDecoration: 'none',
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              letterSpacing: '2px',
              borderBottom: '1px solid var(--border)',
              paddingBottom: '12px',
            }}>
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
          nav { padding: 14px 20px !important; }
        }
      `}</style>
    </>
  );
}
