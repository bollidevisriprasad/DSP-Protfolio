import React, { useState } from 'react';

const certifications = [
  {
    title: 'Full Stack Development Intern',
    issuer: 'Cognifyz Technologies',
    date: 'Feb 2026 – Mar 2026',
    type: 'INTERNSHIP',
    color: '#ff6b00',
    icon: '🚀',
    id: 'CTI/A1/C316206',
    description: 'Completed Full Stack Development internship, demonstrating exceptional coordination, communication, and attention to detail. Worked with real-world web applications.',
  },
  {
    title: 'Java Full Stack Development',
    issuer: 'Teks Academy',
    date: 'Nov 2023 – Dec 2023',
    type: 'TRAINING',
    color: '#ff8c00',
    icon: '☕',
    id: 'TEKS-JAVA-2023',
    description: 'Completed comprehensive Java Full Stack Development training covering Java, HTML, CSS, JavaScript, MySQL, OOP concepts, and database connectivity.',
  },
  {
    title: 'AI/ML Workshop',
    issuer: 'IIT Hyderabad',
    date: '2024',
    type: 'WORKSHOP',
    color: '#ff4500',
    icon: '🤖',
    id: 'IIT-HYD-AIML',
    description: 'Participated in Artificial Intelligence and Machine Learning workshop conducted by IIT Hyderabad, gaining insights into modern AI/ML concepts and applications.',
  },
  {
    title: 'Introduction to SQL',
    issuer: 'Simplilearn',
    date: '2023',
    type: 'CERTIFICATION',
    color: '#e67e00',
    icon: '🗄️',
    id: 'SIMPLILEARN-SQL',
    description: 'Completed SQL certification covering database design, queries, joins, stored procedures, and database management fundamentals.',
  },
];

export default function Certifications() {
  const [flipped, setFlipped] = useState(null);

  return (
    <section id="certifications" className="section" style={{ background: 'var(--black2)', position: 'relative', overflow: 'hidden' }}>
      <div className="court-lines"></div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-tag">// 04 — certifications & internships</div>
        <h2 className="section-title">VICTORY <span>CARDS</span></h2>
        <p style={{ color: 'var(--muted)', maxWidth: 500, marginBottom: 60 }}>
          Certificates earned through hard work, internships, and continuous learning.
          <span style={{ color: 'var(--orange)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', display: 'block', marginTop: 8 }}>// Hover cards to flip and see details</span>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24 }}>
          {certifications.map((cert, i) => (
            <div key={i}
              onClick={() => setFlipped(flipped === i ? null : i)}
              style={{
                perspective: '1000px',
                height: 240,
                cursor: 'none',
              }}
            >
              <div style={{
                width: '100%', height: '100%',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s ease',
                transform: flipped === i ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}>
                {/* Front */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backfaceVisibility: 'hidden',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '28px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = cert.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${cert.color}, transparent)` }}></div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                      <span style={{ fontSize: '2rem' }}>{cert.icon}</span>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        padding: '3px 10px',
                        borderRadius: '20px',
                        background: `${cert.color}20`,
                        color: cert.color,
                        border: `1px solid ${cert.color}40`,
                      }}>{cert.type}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', letterSpacing: '1px', color: 'var(--white)', marginBottom: 6, lineHeight: 1.2 }}>{cert.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--orange)', fontWeight: 600 }}>{cert.issuer}</p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)' }}>{cert.date}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--muted)' }}>TAP TO FLIP →</span>
                  </div>
                </div>

                {/* Back */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  background: `linear-gradient(135deg, ${cert.color}15, var(--black3))`,
                  border: `1px solid ${cert.color}60`,
                  borderRadius: '8px',
                  padding: '24px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  overflow: 'hidden',
                }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: cert.color }}></div>

                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: cert.color, letterSpacing: '0.1em', marginBottom: 10 }}>ID: {cert.id}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--white2)', lineHeight: 1.7 }}>{cert.description}</p>
                  </div>

                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#2dce6e',
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2dce6e', display: 'inline-block' }}></span>
                    VERIFIED ✓
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement banner */}
        <div style={{
          marginTop: 50,
          padding: '24px 32px',
          background: 'rgba(255,107,0,0.05)',
          border: '1px solid rgba(255,107,0,0.2)',
          borderRadius: '8px',
          display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: '2rem' }}>🏆</span>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '2px', color: 'var(--orange)', marginBottom: 4 }}>ACHIEVEMENTS</p>
            <p style={{ color: 'var(--white2)', fontSize: '0.9rem' }}>
              🏐 Participated in <strong>State Level Softball Championship</strong> (2 times) &nbsp;|&nbsp; 
              💡 Active participant in technical workshops and coding events
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
