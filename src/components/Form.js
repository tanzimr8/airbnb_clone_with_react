import { useState } from "react";
const Form = ()=>{
    const [data,setData] = useState('500');
    const [counter,setCounter] = useState(0);
    // console.log(data);
    // const addCount = ()=>{
    //     setCounter(counter+1);
    // }
    return(
        <>
            <h2>Meme Generator</h2>
        <form>
            <input type="text" placeholder="top sentence" />
            <input type="text" placeholder="bottom sentence" />
            <button>Generate New Meme...</button>
            <h3>Count:{counter}</h3>
        </form>
        <button onClick={()=>{setCounter(prevCount=> prevCount+1)}}>Add Count</button>
        <button onClick={()=>{setCounter(counter-1)}}>Reduce Count</button>
        </>
    )
}
export default Form;