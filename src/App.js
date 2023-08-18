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
    <div className="bg-primary  text-dark-blueish  bg-[url('https://images.unsplash.com/photo-1511881830150-850572962174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80')] ">
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
