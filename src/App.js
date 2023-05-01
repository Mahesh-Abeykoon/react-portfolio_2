
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials'
import Works from './components/works/Works';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import Skills from './components/techskills/Skills';
import './app.scss';
import { useState } from 'react';
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Skills/>
        <Portfolio/>
        <Works/>
        <Experience/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
