import React from 'react';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--black2)', position: 'relative', overflow: 'hidden' }}>
      <div className="court-lines"></div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

        {/* Left: Visual card */}
        <div style={{ position: 'relative' }}>
          {/* Main card */}
          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Orange top accent */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--orange), var(--orange3))' }}></div>

            {/* Avatar with Haikyuu #10 jersey reference */}
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <div style={{
                width: 120, height: 120, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--orange), var(--orange3))',
                margin: '0 auto 16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '3rem',
                fontFamily: 'var(--font-display)',
                color: 'var(--black)',
                letterSpacing: '2px',
                boxShadow: '0 0 40px rgba(255,107,0,0.3)',
                position: 'relative',
              }}>
                DSP
                {/* Jersey number badge */}
                <div style={{
                  position: 'absolute', bottom: -4, right: -4,
                  width: 36, height: 36,
                  background: 'var(--black)',
                  border: '2px solid var(--orange)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--orange)',
                  fontWeight: 700,
                }}>
                  #1
                </div>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', letterSpacing: '2px', color: 'var(--white)' }}>BOLLI DEVI SRI PRASAD</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--orange)', marginTop: 4 }}>Full Stack Developer</p>
            </div>

            {/* Info rows */}
            {[
              { icon: '🎓', label: 'University', value: 'BEST Innovation University' },
              { icon: '📍', label: 'Location', value: 'Hyderabad, Telangana' },
              { icon: '📧', label: 'Email', value: 'bdevisriprasad2004@gmail.com' },
              { icon: '🔗', label: 'LinkedIn', value: 'devi-sri-prasad' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 0',
                borderBottom: '1px solid rgba(255,107,0,0.08)',
              }}>
                <span style={{ fontSize: '1rem', width: 24, textAlign: 'center' }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>{item.label.toUpperCase()}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--white2)', fontWeight: 500 }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating accent box */}
          <div style={{
            position: 'absolute', bottom: -20, right: -20,
            width: 80, height: 80,
            border: '2px solid var(--orange)',
            borderRadius: '8px',
            background: 'transparent',
            zIndex: -1,
          }}></div>
          <div style={{
            position: 'absolute', top: -20, left: -20,
            width: 50, height: 50,
            background: 'var(--orange)',
            borderRadius: '4px',
            opacity: 0.3,
            zIndex: -1,
          }}></div>
        </div>

        {/* Right: Text */}
        <div>
          <div className="section-tag">// 00 — about me</div>
          <h2 className="section-title">THE <span>PLAYER</span><br/>BEHIND<br/>THE CODE</h2>

          <p style={{ color: 'var(--white2)', fontSize: '1.02rem', lineHeight: 1.9, marginBottom: 20 }}>
            I'm a Final Year Computer Science Engineering student at BEST Innovation University, driven by a passion for building real-world applications that solve actual problems.
          </p>
          <p style={{ color: 'var(--white2)', fontSize: '1.02rem', lineHeight: 1.9, marginBottom: 32 }}>
            Like a volleyball ace who never gives up a point, I approach every project with dedication, precision, and enthusiasm. From Spring Boot backends to React frontends — I build end-to-end.
          </p>

          {/* Traits */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 32 }}>
            {['Quick Learner', 'Team Player', 'Detail-Oriented', 'Problem Solver'].map(trait => (
              <div key={trait} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 16px',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                background: 'var(--card-bg)',
              }}>
                <span style={{ color: 'var(--orange)', fontSize: '1rem' }}>▶</span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem' }}>{trait}</span>
              </div>
            ))}
          </div>

          <a
            href="https://www.linkedin.com/in/devi-sri-prasad-3508702a0"
            target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--orange)',
              color: 'var(--black)',
              padding: '12px 28px',
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              letterSpacing: '2px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 700,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = 'var(--orange3)'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background = 'var(--orange)'; e.target.style.transform = 'translateY(0)'; }}
          >
            VIEW LINKEDIN ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .section > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
