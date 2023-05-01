import { useState } from "react";
const Form = ()=>{
    const [meme,setMeme] = useState({
        topText:'',
        bottomText:'',
        randomImage:''
    });
    return(
        <>
            <h2>Meme Generator</h2>
        <form>
            <input type="text" placeholder="top sentence" />
            <input type="text" placeholder="bottom sentence" />
            <button>Generate New Meme...</button>
            {/* <h3>Count:{counter}</h3> */}
        </form>
        </>
    )
}
export default Form;