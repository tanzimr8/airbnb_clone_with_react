import React from 'react'

const Work = ({id,title,role,desc,location,duration}) => {
  return (
    <>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  {/* <img src="https://picsum.photos/200" alt="" /> */}
                </div>
                <h2>{id}. {role} @ {title}</h2>
                <i>{duration}</i>
                <p>{desc}</p><span>Details</span>
              </div>
            </div>
            <div className="right">
              <img src="https://picsum.photos/300" alt="" />
            </div>
          </div>
        </div>
    </>
  )
}

export default Work
