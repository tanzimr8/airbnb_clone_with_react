const Form = ()=>{
    const handleClick = ()=>{
        console.log("clicked");
    }
    return(
        <>
        <img src="./images/travel-1.jpeg" />
        <button onClick = {handleClick}>Click to change</button>
        </>
    )
}
export default Form;