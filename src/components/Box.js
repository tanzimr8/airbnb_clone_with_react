import { useState } from "react";
const Box = (props)=>{
    const [on,setOn] = useState(props.on); //derived state 
    const toggle = ()=>{
        setOn(prevState => !prevState);
    }
    const styles = {
        backgroundColor: on ? 'red' : '#fff'
    }
    return <div onClick={toggle} style={styles} className='box'></div>
}

export default Box;