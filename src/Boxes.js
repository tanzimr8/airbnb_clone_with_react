import { useState } from 'react'
import boxes from './BoxData'
import Box from './components/Box'

const Boxes = ()=>{
    const [squires,setSquires] = useState(boxes);
    const toggle = (id)=>{
        // console.log(id);
        setSquires(prevSquires => {
            return prevSquires.map((squire)=>{
                return squire.id === id ? {...squire, on:!squire.on} : squire;
            })
        });
    }
    const squireElement = squires.map((squire)=>{
        return <Box 
        key={squire.id}
        toggle={toggle}
        on = {squire.on}
        id = {squire.id}
        />
    })
    return(
        <>
        {squireElement}
        </>
    );
}

export default Boxes;