import './App.css';
import './styles.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Travel from './components/Travel';
import Form from './components/Form';
import Meme from './components/Meme';
// import data from './data';
// import AirBnb from './components/Air-Bnb/AirbnbCard';
function App() {
  
  // const airbnb_card = data.map(item=>{
  //   return( 
  //   <AirBnb
  //       key = {item.id}
  //       {...item} 
  //     />
  //   )
  // })
  return (
    <>
    <Navbar/>
    <Main/>
    {/* <Travel/> */}
    <div className="from-wrapper">
    <Form/>
    <Meme/>
    </div>
    </>
  )
}
export default App;
