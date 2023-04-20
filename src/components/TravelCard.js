
const TravelCard = ({id,title,location,gmap,startDate,endDate,description,imgUrl})=>{
    return(
        <div className="travel_card">
                    <div className="travel_image">
                        <img src={`./Images/${imgUrl}`} alt="travel"/>
                    </div>
                    <div className="travel_info">
                        <p className="location">{title} <a href={gmap}>View on google maps</a></p>
                        <h3 className="destination">{location}</h3>
                        <p className="duration">{startDate} - {endDate}</p>
                        <p className="description">{description} </p>
                    </div>
                </div>
    );
}
export default TravelCard;