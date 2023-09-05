import { useState } from 'react';
import './App.css';
import './styles.css';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import './app.scss'
function App() {
  const [menuOpen,setMenuOpen] = useState(true);

  return (
    <div className='app'>
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className='section'>
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  )
}
export default App;
