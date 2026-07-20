import React, { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    category: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    category: 'Frontend',
    icon: '⚛️',
    skills: [
      { name: 'React.js', level: 75 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'JSP / Servlets', level: 70 },
    ],
  },
  {
    category: 'Backend & DB',
    icon: '🔧',
    skills: [
      { name: 'Spring Boot', level: 72 },
      { name: 'JDBC', level: 78 },
      { name: 'MySQL', level: 80 },
      { name: 'REST APIs', level: 72 },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 82 },
      { name: 'VS Code', level: 90 },
      { name: 'Eclipse IDE', level: 78 },
      { name: 'Microsoft Excel', level: 70 },
    ],
  },
];

function SkillBar({ name, level, animate }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--white2)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--orange)' }}>{level}%</span>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.06)', height: 6, borderRadius: 3, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: animate ? `${level}%` : '0%',
          background: 'linear-gradient(90deg, var(--orange3), var(--orange2))',
          borderRadius: 3,
          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 0 8px rgba(255,107,0,0.4)',
        }}></div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setAnimate(true);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={ref} style={{ background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
      <div className="court-lines"></div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-tag">// 01 — skills</div>
        <h2 className="section-title">MY <span>ARSENAL</span></h2>
        <p style={{ color: 'var(--muted)', maxWidth: 500, marginBottom: 60, fontSize: '1rem' }}>
          Built through coursework, internships, and countless late-night debugging sessions.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
          {skillGroups.map(group => (
            <div key={group.category} style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '28px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,107,0,0.15)'; e.currentTarget.style.borderColor = 'var(--orange)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              {/* Top accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '40%', height: 2, background: 'var(--orange)' }}></div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <span style={{ fontSize: '1.4rem' }}>{group.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '2px', color: 'var(--white)' }}>{group.category.toUpperCase()}</h3>
              </div>

              {group.skills.map(skill => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} animate={animate} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div style={{ marginTop: 50 }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', marginBottom: 16, letterSpacing: '0.1em' }}>// QUICK TECH TAGS</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['Java', 'Spring Boot', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'MySQL', 'JDBC', 'JSP', 'Servlets', 'Bootstrap', 'Tailwind CSS', 'Git', 'GitHub', 'VS Code', 'Eclipse', 'REST API', 'OOP'].map(tech => (
              <span key={tech} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--orange)',
                background: 'rgba(255,107,0,0.08)',
                border: '1px solid rgba(255,107,0,0.25)',
                padding: '5px 14px',
                borderRadius: '20px',
                transition: 'all 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.target.style.background = 'var(--orange)'; e.target.style.color = 'var(--black)'; }}
              onMouseLeave={e => { e.target.style.background = 'rgba(255,107,0,0.08)'; e.target.style.color = 'var(--orange)'; }}
              >{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media (max-width:768px) { #skills .section > div > div { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
