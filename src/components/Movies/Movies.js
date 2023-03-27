const Movies = ({img,title, rating,link,year})=>{
        return(
            <div className="movies">
                {/* <img className='movie_thumb' src={img}/> */}
                <h2 className="movie_title">{title} 
                <span className="movie_year"> ({year}) </span>
                </h2>
                <p className="movie_rating">{rating}</p>
                <a href={link}>Watch Now</a>
                <hr/>
            </div>
    );
}
export default Movies;