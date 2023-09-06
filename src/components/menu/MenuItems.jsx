import React from 'react'

function MenuItems({setMenuOpen,name,link}) {
  return (
    <>
      <li onClick={()=>{setMenuOpen(false)}}><a href={link}>{name}</a></li>
    </>
  )
}

export default MenuItems
