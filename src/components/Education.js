import React from 'react';

const education = [
  {
    year: '2022 – 2026',
    degree: 'B.Tech — Computer Science Engineering',
    school: 'BEST Innovation University, Gorantla',
    grade: 'CGPA: 7.8 / 10',
    gradeColor: '#2dce6e',
    icon: '🎓',
    courses: ['Data Structures', 'Algorithms', 'DBMS', 'OS', 'Java', 'Web Dev'],
    current: true,
  },
  {
    year: '2020 – 2022',
    degree: 'Intermediate (XII) — MPC',
    school: 'A.P.S.W.R.S Junior College, Pedavegi',
    grade: '62%',
    gradeColor: 'var(--orange)',
    icon: '📚',
    courses: ['Mathematics', 'Physics', 'Chemistry'],
    current: false,
  },
  {
    year: '2020',
    degree: 'SSC (X)',
    school: 'ZP High School, Kamavarapukota',
    grade: '9.2 / 10 GPA',
    gradeColor: '#2dce6e',
    icon: '🏫',
    courses: ['Mathematics', 'Science', 'Social Studies'],
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
      <div className="court-lines"></div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto' }}>
        <div className="section-tag">// 03 — education</div>
        <h2 className="section-title">THE <span>TRAINING</span><br/>GROUND</h2>
        <p style={{ color: 'var(--muted)', maxWidth: 500, marginBottom: 60 }}>
          Where the foundation was laid — every class, every test, every milestone.
        </p>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 60 }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 20, top: 12, bottom: 12,
            width: 2,
            background: 'linear-gradient(to bottom, var(--orange), rgba(255,107,0,0.1))',
          }}></div>

          {education.map((item, i) => (
            <div key={i} style={{
              position: 'relative',
              marginBottom: i < education.length - 1 ? 48 : 0,
              animation: `fadeUp 0.6s ease forwards ${i * 0.15}s`,
              opacity: 0,
            }}>
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: -48, top: 16,
                width: 40, height: 40,
                borderRadius: '50%',
                background: item.current ? 'var(--orange)' : 'var(--black3)',
                border: `2px solid ${item.current ? 'var(--orange)' : 'rgba(255,107,0,0.3)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
                boxShadow: item.current ? '0 0 20px rgba(255,107,0,0.4)' : 'none',
                animation: item.current ? 'pulse-orange 2s infinite' : 'none',
              }}>
                {item.icon}
              </div>

              {/* Card */}
              <div style={{
                background: 'var(--card-bg)',
                border: `1px solid ${item.current ? 'var(--orange)' : 'var(--border)'}`,
                borderRadius: '8px',
                padding: '28px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = item.current ? 'var(--orange)' : 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                {item.current && (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--orange), var(--orange3))' }}></div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--orange)', letterSpacing: '0.1em', marginBottom: 6 }}>{item.year}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '1px', color: 'var(--white)', marginBottom: 4 }}>{item.degree}</h3>
                    <p style={{ color: 'var(--white2)', fontSize: '0.9rem' }}>{item.school}</p>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    color: item.gradeColor,
                    fontWeight: 700,
                    background: 'rgba(255,255,255,0.04)',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    border: `1px solid ${item.gradeColor}33`,
                    whiteSpace: 'nowrap',
                  }}>{item.grade}</div>
                </div>

                {/* Courses */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
                  {item.courses.map(c => (
                    <span key={c} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--muted)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      padding: '3px 10px',
                      borderRadius: '20px',
                    }}>{c}</span>
                  ))}
                </div>

                {item.current && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    marginTop: 14,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#2dce6e',
                    background: 'rgba(45,206,110,0.08)',
                    border: '1px solid rgba(45,206,110,0.2)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2dce6e', display: 'inline-block', animation: 'pulse-orange 1.5s infinite' }}></span>
                    CURRENTLY ENROLLED — GRADUATING 2026
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
