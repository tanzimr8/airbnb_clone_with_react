// import logo from './logo.svg';
import './App.css';
import './styles.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Image from './images/movie_1.jpg';
import Data from './data';
import Employee from './Employee';
// import InfoCard from './components/Info-card/InfoCard';
// import AirBnb from './components/Air-Bnb/AirbnbCard';
import Movies from './components/Movies/Movies';
function App() {
  const employee_info = Data.map((info)=>{
    return <Employee name={info.name} role={info.role} dept={info.department}/>
  });
  return (
    <div>
      <Navbar/>
      <Main/>
      {employee_info}

      {/* <InfoCard/> */}
      {/* <AirBnb/> */}
      {/* <div className='movies_wrapper'>
      <Movies 
        img= 'movie_1.jpg'
        title = 'Everything Everywhere All at Once'
        rating = {7.9}
        link = '#evr'
        year = '2023'
      />
      <Movies
      img= 'movie_2.jpg'
      title = 'Another Movie'
      rating = '7.5'
      link = '#evr'
      year = '2013'/>
      <Movies
      img= 'movie_3.jpg'
      title = 'You'
      rating = '8.2'
      link = '#evr'
      year = '2021'/>
      </div> */}
    </div>
  );
}

export default App;
