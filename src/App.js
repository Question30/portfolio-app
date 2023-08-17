import './App.css';
import Nav from './components/Nav';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import PokemonSection from './sections/PokemonSection';
import Contact from './sections/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-primary  text-dark-blueish">
      <Nav />
      <Home />
      <About />
      <Projects />
      <PokemonSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
