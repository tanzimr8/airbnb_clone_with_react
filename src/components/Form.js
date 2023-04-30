import { useState } from "react";
const Form = ()=>{
    const [movie,setMovie] = useState(
        {
            id:1,
            title:'Life lessons with Tanzim',
            description: "This hands down, by far the best course  found. It the combination of the brief and insightful instructions with constant challenges.",
            prie: 80,
            image:'movie_1.jpg',
            status:{
                rating:5.0,
                reviewCount:6
            },
            location: 'online',
            isOpen: false
        }
    );
    // const [destination,setDestination] = useState(true);
    const addSeat = ()=>{
        setMovie((prevMovie)=>{
            return {
                ...prevMovie,
                isOpen: !prevMovie.isOpen
            }
        })
    
    }
    return(
        <>
            <h2>Meme Generator</h2>
        <form>
            <input type="text" placeholder="top sentence" />
            <input type="text" placeholder="bottom sentence" />
            <button>Generate New Meme...</button>
            {/* <h3>Count:{counter}</h3> */}
        </form>
        <h2> Title: {movie.title} </h2> 
        <p> Description: {movie.description} </p>
        <h3>Do you have open spot?<br></br> 
            <span>{movie.isOpen ? 'Yes' : 'No Seats available'}</span>
        </h3>
        <button onClick={addSeat}>{movie.isOpen ? 'Filup seat' : 'Add a seat'}</button>

        {/* <h3>Wanna go to sea? <br/>{destination ? 'Yes ,Sea' : 'No Mountain please'}</h3> */}
        {/* <button onClick={()=> setDestination(prevDestination => !prevDestination)}>Change Mind</button> */}
        </>
    )
}
export default Form;