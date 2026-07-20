import React, { useEffect, useRef, useState } from 'react';

const roles = [
  'Full Stack Developer',
  'Java Spring Boot Dev',
  'React.js Enthusiast',
  'Problem Solver',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        }, 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [typing, charIdx, roleIdx]);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 80px',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)',
    }}>
      {/* Background volleyball court SVG art */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
        <svg viewBox="0 0 1200 800" style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', width: '65%', opacity: 0.07 }} xmlns="http://www.w3.org/2000/svg">
          {/* Court outline */}
          <rect x="100" y="100" width="1000" height="600" fill="none" stroke="#ff6b00" strokeWidth="3"/>
          {/* Center line */}
          <line x1="600" y1="100" x2="600" y2="700" stroke="#ff6b00" strokeWidth="3"/>
          {/* Net */}
          <line x1="600" y1="100" x2="600" y2="700" stroke="#ff8c00" strokeWidth="6"/>
          {/* Attack lines */}
          <line x1="100" y1="300" x2="600" y2="300" stroke="#ff6b00" strokeWidth="2"/>
          <line x1="600" y1="300" x2="1100" y2="300" stroke="#ff6b00" strokeWidth="2"/>
          <line x1="100" y1="500" x2="600" y2="500" stroke="#ff6b00" strokeWidth="2"/>
          <line x1="600" y1="500" x2="1100" y2="500" stroke="#ff6b00" strokeWidth="2"/>
          {/* Volleyball */}
          <circle cx="300" cy="250" r="60" fill="none" stroke="#ff6b00" strokeWidth="3"/>
          <path d="M300 190 Q360 220 360 250 Q360 280 300 310" fill="none" stroke="#ff6b00" strokeWidth="2"/>
          <path d="M300 190 Q240 220 240 250 Q240 280 300 310" fill="none" stroke="#ff6b00" strokeWidth="2"/>
          <line x1="240" y1="210" x2="360" y2="210" stroke="#ff6b00" strokeWidth="2"/>
          <line x1="240" y1="290" x2="360" y2="290" stroke="#ff6b00" strokeWidth="2"/>
          {/* Player silhouettes */}
          {/* Player jumping (spike) */}
          <circle cx="850" cy="200" r="22" fill="#ff6b00" opacity="0.6"/>
          <line x1="850" y1="222" x2="850" y2="330" stroke="#ff6b00" strokeWidth="8" strokeLinecap="round"/>
          <line x1="850" y1="270" x2="800" y2="240" stroke="#ff6b00" strokeWidth="6" strokeLinecap="round"/>
          <line x1="850" y1="270" x2="910" y2="230" stroke="#ff6b00" strokeWidth="6" strokeLinecap="round"/>
          <line x1="850" y1="330" x2="820" y2="390" stroke="#ff6b00" strokeWidth="6" strokeLinecap="round"/>
          <line x1="850" y1="330" x2="880" y2="390" stroke="#ff6b00" strokeWidth="6" strokeLinecap="round"/>
          {/* Libero digging */}
          <circle cx="200" cy="550" r="18" fill="#ff6b00" opacity="0.4"/>
          <line x1="200" y1="568" x2="200" y2="640" stroke="#ff6b00" strokeWidth="6" strokeLinecap="round"/>
          <line x1="200" y1="600" x2="150" y2="620" stroke="#ff6b00" strokeWidth="5" strokeLinecap="round"/>
          <line x1="200" y1="600" x2="250" y2="580" stroke="#ff6b00" strokeWidth="5" strokeLinecap="round"/>
          {/* Diagonal speed lines (Haikyuu style) */}
          <line x1="0" y1="0" x2="400" y2="800" stroke="#ff6b00" strokeWidth="1.5" opacity="0.5"/>
          <line x1="100" y1="0" x2="500" y2="800" stroke="#ff6b00" strokeWidth="1" opacity="0.3"/>
          <line x1="1200" y1="0" x2="800" y2="800" stroke="#ff6b00" strokeWidth="1.5" opacity="0.4"/>
        </svg>

        {/* Orange glow orb */}
        <div style={{
          position: 'absolute', right: '15%', top: '30%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(255,107,0,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
        }}></div>

        {/* Grid pattern */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03 }}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ff6b00" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, animation: 'fadeUp 0.8s ease forwards' }}>
        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(255,107,0,0.1)',
          border: '1px solid rgba(255,107,0,0.3)',
          borderRadius: '4px',
          padding: '6px 16px',
          marginBottom: 28,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--orange)',
          letterSpacing: '0.1em',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#2dce6e', animation: 'pulse-orange 2s infinite' }}></span>
          OPEN TO OPPORTUNITIES
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 8vw, 7rem)',
          letterSpacing: '4px',
          lineHeight: 1,
          marginBottom: 12,
          color: 'var(--white)',
        }}>
          BOLLI<br />
          <span style={{ color: 'var(--orange)', WebkitTextStroke: '0px' }}>DEVI SRI</span><br />
          PRASAD
        </h1>

        {/* Typing role */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '1.2rem',
          color: 'var(--orange2)',
          marginBottom: 20,
          minHeight: '2rem',
          display: 'flex', alignItems: 'center', gap: 4,
        }}>
          <span style={{ color: 'var(--muted)' }}>&gt;</span>
          <span>{displayed}</span>
          <span style={{
            display: 'inline-block', width: 2, height: '1.2rem',
            background: 'var(--orange)',
            animation: 'borderBlink 0.8s infinite',
            marginLeft: 2,
          }}></span>
        </div>

        {/* Bio */}
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--white2)',
          maxWidth: 540,
          marginBottom: 36,
          lineHeight: 1.8,
          fontWeight: 400,
        }}>
          Final Year CSE student at BEST Innovation University. Full Stack Developer with hands-on internship experience building real-world apps. Passionate about crafting scalable, efficient web solutions.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
          <button onClick={() => scrollToSection('#projects')} style={{
            background: 'var(--orange)',
            color: 'var(--black)',
            border: 'none',
            padding: '14px 36px',
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            letterSpacing: '2px',
            borderRadius: '4px',
            cursor: 'none',
            transition: 'all 0.2s',
            fontWeight: 700,
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--orange3)'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 8px 24px rgba(255,107,0,0.4)'; }}
          onMouseLeave={e => { e.target.style.background = 'var(--orange)'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}
          >
            VIEW PROJECTS
          </button>

          <button onClick={() => scrollToSection('#contact')} style={{
            background: 'transparent',
            color: 'var(--orange)',
            border: '2px solid var(--orange)',
            padding: '14px 36px',
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            letterSpacing: '2px',
            borderRadius: '4px',
            cursor: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.background = 'rgba(255,107,0,0.1)'; e.target.style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.transform = 'translateY(0)'; }}
          >
            HIRE ME
          </button>

          <a href="https://github.com/bollidevisriprasad" target="_blank" rel="noreferrer" style={{
            background: 'transparent',
            color: 'var(--white2)',
            border: '2px solid rgba(255,255,255,0.15)',
            padding: '14px 36px',
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            letterSpacing: '2px',
            borderRadius: '4px',
            cursor: 'none',
            transition: 'all 0.2s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--orange)'; e.target.style.color = 'var(--orange)'; }}
          onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.color = 'var(--white2)'; }}
          >
            GITHUB ↗
          </a>
        </div>

        {/* Quick stats */}
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          {[
            { num: '7.8', label: 'CGPA' },
            { num: '2+', label: 'Internships' },
            { num: '3+', label: 'Projects' },
            { num: '10+', label: 'Skills' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--orange)', letterSpacing: '2px' }}>{s.num}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        animation: 'float 2s ease-in-out infinite',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>SCROLL</span>
        <div style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, var(--orange), transparent)' }}></div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #home { padding: 100px 20px 60px !important; }
        }
      `}</style>
    </section>
  );
}
