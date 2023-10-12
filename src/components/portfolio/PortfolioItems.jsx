import React from 'react'

const PortfolioItems = ({title}) => {
  return (
    <div>
      <div className="item">
          <img src="https://picsum.photos/200/300?random=1" alt="random_img" />
          <h3>{title}</h3>
        </div>
    </div>
  )
}

export default PortfolioItems
