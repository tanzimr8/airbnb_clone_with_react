import { useState } from 'react'
import boxes from './BoxData'
import Box from './components/Box'

const Boxes = ()=>{
    const [squires,setSquires] = useState(boxes);
    const toggle = (id)=>{
        // console.log(id);
        setSquires(prevSquires => {
            const newSquires = [];
            for(let i=0;i<prevSquires.length;i++){
                const currentSquire = prevSquires[i];
                if(currentSquire.id===id){
                    const updatedSquire = {
                        ...currentSquire,
                        on:!currentSquire.on
                    }
                    newSquires.push(updatedSquire);
                }
                else{
                    newSquires.push(currentSquire);
                }
                
            }
            return newSquires;
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