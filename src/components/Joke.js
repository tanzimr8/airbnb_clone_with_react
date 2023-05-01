import { useState } from "react";
const Joke = (props)=>{
    const [visible,setVisible] = useState(true);
    const toggle  = ()=>{
        setVisible(prevVisible => !prevVisible)
    }
    return(
        <>
            <h3>Setup: {props.setup}</h3>
            <p>Punchline: {visible && props.punchline}</p>
            <button onClick={toggle}>Show/Hide Punchline</button>
        </>
    );   
}
export default Joke;