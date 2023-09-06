import { useEffect , useRef } from 'react';
import './intro.scss';
import { init } from 'ityped'
function Intro() {
  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current, {
      showCursor: false, 
      strings: ['Web Developer', 'Customer Service', "Front end dev" ] 
    })
  },[]);
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="img-container">
          <img src="images/tanzim.webp" alt="Tanzim rahman"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I am</h2>
          <h1>Tanzim Rahman</h1>
          <h3 ref={textRef}></h3>
          <p>Serving as Customer service Representative at Intact. Also training myself with frontend technology such as JavaScript, React JS and UX design</p>
          <a href="#portfolio">Portfolio</a>
        </div>
      </div>
    </div>
  )
}

export default Intro
