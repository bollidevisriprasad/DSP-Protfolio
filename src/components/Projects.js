import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Online Doctor Appointment Booking System',
    status: 'ONGOING',
    description: 'A full-featured web application for booking and managing doctor appointments efficiently. Patients can search doctors, book time slots, and manage their appointments. Doctors can manage their schedules and patient records.',
    tech: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    github: 'https://github.com/bollidevisriprasad',
    demo: null,
    icon: '🏥',
    color: '#1a3a5c',
    highlights: [
      'Patient registration & doctor search',
      'Appointment booking & management',
      'Spring Boot REST API backend',
      'MySQL database integration',
    ],
  },
  {
    id: 2,
    title: 'Full Stack Web Apps',
    status: 'COMPLETED',
    description: 'Built and tested multiple web applications during Full Stack Development internship at Cognifyz Technologies. Implemented frontend-backend integration with Java, HTML, CSS, JavaScript, and MySQL.',
    tech: ['Java', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'OOP'],
    github: 'https://github.com/bollidevisriprasad',
    demo: null,
    icon: '💼',
    color: '#1a4a2a',
    highlights: [
      'Frontend & backend integration',
      'OOP principles applied',
      'Database connectivity via JDBC',
      'Debugging & QA testing',
    ],
  },
  {
    id: 3,
    title: 'Java Full Stack Training Projects',
    status: 'COMPLETED',
    description: 'Series of web development projects completed during Java Full Stack Development training at Teks Academy. Applied Java, HTML, CSS, JavaScript, and MySQL to build complete web applications.',
    tech: ['Java', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'JDBC'],
    github: 'https://github.com/bollidevisriprasad',
    demo: null,
    icon: '⚙️',
    color: '#3a1a1a',
    highlights: [
      'Java-based web applications',
      'JDBC database connectivity',
      'Responsive frontend design',
      'Problem-solving & debugging',
    ],
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="section" style={{ background: 'var(--black2)', position: 'relative', overflow: 'hidden' }}>
      <div className="court-lines"></div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-tag">// 02 — projects</div>
        <h2 className="section-title">MATCH <span>PLAYS</span></h2>
        <p style={{ color: 'var(--muted)', maxWidth: 500, marginBottom: 60 }}>
          Every project is a game — here's how I played each match.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
          {projects.map(project => (
            <div key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === project.id ? 'rgba(255,107,0,0.05)' : 'var(--card-bg)',
                border: `1px solid ${hovered === project.id ? 'var(--orange)' : 'var(--border)'}`,
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                transform: hovered === project.id ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered === project.id ? '0 20px 60px rgba(255,107,0,0.12)' : 'none',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Card header */}
              <div style={{
                padding: '28px 28px 0',
                position: 'relative',
              }}>
                {/* Top accent line */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--orange), transparent)' }}></div>

                {/* Icon + status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <span style={{ fontSize: '2.5rem' }}>{project.icon}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.1em',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    background: project.status === 'ONGOING' ? 'rgba(45,206,110,0.1)' : 'rgba(255,107,0,0.1)',
                    color: project.status === 'ONGOING' ? '#2dce6e' : 'var(--orange)',
                    border: `1px solid ${project.status === 'ONGOING' ? 'rgba(45,206,110,0.3)' : 'rgba(255,107,0,0.3)'}`,
                  }}>
                    {project.status === 'ONGOING' && <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#2dce6e', marginRight: 5, verticalAlign: 'middle', animation: 'pulse-orange 1.5s infinite' }}></span>}
                    {project.status}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  letterSpacing: '1px',
                  color: 'var(--white)',
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}>{project.title}</h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>{project.description}</p>

                {/* Highlights */}
                <ul style={{ listStyle: 'none', marginBottom: 20 }}>
                  {project.highlights.map(h => (
                    <li key={h} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 8,
                      fontSize: '0.85rem', color: 'var(--white2)',
                      marginBottom: 6,
                    }}>
                      <span style={{ color: 'var(--orange)', marginTop: 2, fontSize: '0.7rem' }}>▶</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card footer */}
              <div style={{ padding: '0 28px 28px', marginTop: 'auto' }}>
                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {project.tech.map(t => (
                    <span key={t} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--orange)',
                      background: 'rgba(255,107,0,0.08)',
                      border: '1px solid rgba(255,107,0,0.2)',
                      padding: '3px 10px',
                      borderRadius: '3px',
                    }}>{t}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: 10 }}>
                  <a href={project.github} target="_blank" rel="noreferrer" style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '10px',
                    background: 'transparent',
                    border: '1.5px solid var(--orange)',
                    color: 'var(--orange)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    letterSpacing: '1px',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.target.style.background = 'var(--orange)'; e.target.style.color = 'var(--black)'; }}
                  onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--orange)'; }}
                  >
                    GITHUB ↗
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" style={{
                      flex: 1, textAlign: 'center',
                      padding: '10px',
                      background: 'var(--orange)',
                      color: 'var(--black)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9rem',
                      letterSpacing: '1px',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}>LIVE DEMO ↗</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{
          marginTop: 50,
          padding: '32px',
          border: '1px dashed rgba(255,107,0,0.3)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20,
        }}>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', letterSpacing: '2px', color: 'var(--white)' }}>MORE ON GITHUB</p>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Check out all my repositories and contributions</p>
          </div>
          <a href="https://github.com/bollidevisriprasad" target="_blank" rel="noreferrer" style={{
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
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { e.target.style.background = 'var(--orange3)'; e.target.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.target.style.background = 'var(--orange)'; e.target.style.transform = 'translateY(0)'; }}
          >
            @bollidevisriprasad ↗
          </a>
        </div>
      </div>
    </section>
  );
}
