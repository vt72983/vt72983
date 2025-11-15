import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedEl = useRef<HTMLSpanElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const options = {
      strings: [
        'Web Security Expert',
        'IoT Security Specialist',
        'Reverse Engineer',
        'Penetration Tester',
        'Cybersecurity Professional'
      ],
      typeSpeed: 30,
      backSpeed: 20,
      backDelay: 700,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    };
    
    if (typedEl.current) {
      const typed = new Typed(typedEl.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className={`page-section hero-section first-section ${isScrolled ? 'scrolled' : ''}`}>
      <div className="section-content text-center" data-aos="fade-up" data-aos-duration="1000">
        <h1><i className="fas fa-shield-alt"></i> vt729830</h1>
        <div className="hero-text-wrapper">
          <span ref={typedEl}></span>
        </div>
        <div className="scroll-indicator">
          <a href="#about-htb" className="scroll-down">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;