import './works.scss';
import workData from './workData'; 
import Work from './Work';
import { useState } from 'react';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Works() {
  let[currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (pos)=>{
    pos === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) : setCurrentSlide(currentSlide < workData.length-1 ? currentSlide +1 : 0);
  }
  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform:`translateX(${currentSlide * 100})`}}>
      {workData.map((data)=>{
        return <Work
          id={data.id}
          title = {data.title}
          role = {data.role}
          desc = {data.desc}
          location = {data.location}
          duration = {data.duration}
        />
      })}
      </div>
      <img onClick={()=>{handleClick('left')}} src="/images/right.png" alt="left arrorw" className='arrow left' />
      <img onClick={()=>{handleClick()}} src="/images/right.png" alt="right arrow" className='arrow right' />
  </div> 
  )
}

export default Works
