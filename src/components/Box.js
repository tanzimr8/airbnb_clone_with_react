import { useState } from "react";
const Box = (props)=>{
    const styles = {
        backgroundColor: props.on ? 'red' : '#fff'
    }
    return <div onClick={()=>{props.toggle(props.id)}} style={styles} className='box'></div>
}

export default Box;