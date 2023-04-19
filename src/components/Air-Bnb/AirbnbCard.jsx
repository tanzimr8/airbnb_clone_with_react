const AirbnbCard = ({rating,title,description,price,image,showing_now})=>{
    const status = showing_now === 0 ? 'Sold Out' : 'Available';
    return(
            <div className='air-bnb'>
                <div className="airbnb-rating">
                    <img src={`./images/${image}`} alt="airbnb image" className="img-aribnb-card"/>
                    <p className="airbnb-rate">{rating}</p> 
                    <h4 className="airbnb-title">{title}</h4>   
                    <p className="airbnb-description">{description}</p>
                    <p className="airbnb-price"><span>{price}</span> per night</p>                    
                    {status && <h5 className={status === 'Available' ? 'available' : 'sold'}>{status}</h5>}
                </div>
            </div>
    );
}

export default AirbnbCard;