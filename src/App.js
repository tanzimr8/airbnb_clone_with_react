// import logo from './logo.svg';
import './App.css';
import './styles.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import data from './data';
// import InfoCard from './components/Info-card/InfoCard';
import AirBnb from './components/Air-Bnb/AirbnbCard';
function App() {
  const airbnb_card = data.map(item=>{
    return( 
    <AirBnb
        key = {item.id}
        {...item} 
      />
    )
  })
  return (
    <>
    <Navbar/>
    <Main/>
    <div className='airbnd_card'>
      {airbnb_card}
    </div>
      </>
  )
}
export default App;
