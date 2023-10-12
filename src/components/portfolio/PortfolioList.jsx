import React from 'react'

function PortfolioList({id,title,active,setSelected}) {
  return (
    <div className='portfolioList'>
        <li 
        className={ active ? 'active' : '' } 
        onClick={
            ()=>{setSelected(id)}}>{title}</li>
    </div>
  )
}

export default PortfolioList
