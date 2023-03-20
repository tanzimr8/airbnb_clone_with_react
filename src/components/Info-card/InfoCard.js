import Info from './Info';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';
const InfoCard = ()=>{
    return (
        <div className='Info-card'>
            <div className='info'>
                <Info/>
                <About/>
                <Interests/>
                <Footer/>
            </div>
        </div>
    );
}
export default InfoCard;