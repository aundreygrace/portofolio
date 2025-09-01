import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact/>
      <Footer />
    </div>
  );
};

export default Index;
