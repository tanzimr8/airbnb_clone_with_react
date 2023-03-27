import Airbnb from './../../images/airbnb-image.webp';
const AirbnbCard = ()=>{
    return(
            <div className='air-bnb'>
                <img src="" className="img-aribnb-card"/>
                <div className="airbnb-rating">
                    <img src={Airbnb} className="img-star"/>
                    <p className="airbnb-rate">5.0</p> 
                    <h4 className="airbnb-title">AirBnb Delux</h4>   
                    <p className="airbnb-price"><span>$120</span> per night</p>
                </div>
            </div>
    );
}

export default AirbnbCard;