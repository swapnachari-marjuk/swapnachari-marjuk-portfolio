import { useState } from 'react';
import './App.css'
import LoadingWelcome from './components/LoadingWelcome/LoadingWelcome';
import AnimatedSection from './components/AnimatedSection/AnimatedSection';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects./Projects';
import Contact from './components/Contact/Contac';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <div className="App">
      {isLoading && <LoadingWelcome onLoadingComplete={handleLoadingComplete} />}

      <div className={`main-content ${isLoading ? 'hidden' : 'visible'}`}>
        {/* <AnimatedSection animation="fade-in" duration={0.6}> */}
        <Navbar />
        {/* </AnimatedSection> */}

        <main>
          <AnimatedSection animation="fade-up" delay={0.3}>
            <Hero />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <About />
          </AnimatedSection>

          <AnimatedSection animation="fade-up-scale" delay={0.1}>
            <Skills />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <Projects />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <Contact />
          </AnimatedSection>
        </main>

        <SocialLinks />

        <AnimatedSection animation="fade-in">
          <Footer />
        </AnimatedSection>
      </div>
    </div>
  )
}

export default App