import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX - 18) * 0.12;
      ringY += (mouseY - ringY - 18) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(animateRing);
    };

    const onHover = () => {
      cursor.style.transform += ' scale(1.5)';
      ring.style.width = '50px';
      ring.style.height = '50px';
    };

    const onLeave = () => {
      ring.style.width = '36px';
      ring.style.height = '36px';
    };

    window.addEventListener('mousemove', moveCursor);
    animateRing();

    document.querySelectorAll('a, button, .hoverable').forEach(el => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="App">
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={cursorRingRef}></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
