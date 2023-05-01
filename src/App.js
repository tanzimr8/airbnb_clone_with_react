import { useState } from 'react';
import './App.css';
import './styles.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Travel from './components/Travel';
import Form from './components/Form';
import Meme from './components/Meme';
import Jokes from './components/Jokes';
// import data from './data';
// import AirBnb from './components/Air-Bnb/AirbnbCard';
import Boxes from './Boxes'
function App() {
  
  
  return (
    <>
    <Navbar/>
    <Main/>
    <Boxes/>
    <Jokes/>
    {/* <Travel/> */}
    <div className="from-wrapper">
    {/* <Form/> */}
    {/* <Meme/> */}

    </div>
    
    </>
  )
}
export default App;
