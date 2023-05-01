import { useState } from 'react'
import boxes from './BoxData'
import Box from './components/Box'

const Boxes = ()=>{
    const [squires,setSquires] = useState(boxes);
    
    const squireElement = squires.map((squire)=>{
        return <Box 
        key={squire.id}
        on = {squire.on}
        />
    })
    return(
        <>
        {squireElement}
        </>
    );
}

export default Boxes;