import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      delay: 100,
    });
  }, []);

  return (
    <>
      <ParticleBackground />
      <Header />
      <main className="container-fluid p-0">
        <Hero />
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
