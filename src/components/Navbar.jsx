import React from 'react';
import Logo from './../images/logo.webp'
const Navbar = ()=>{
    return (
    <div>
        <nav>
            <div className='logo'>
                <img src={Logo} alt="Logo" className='logo' />
            </div>
            <div className="navbar">
                <ul>
                    <li><a href=''>About</a></li>
                    <li><a href=''>Works</a></li>
                    <li><a href=''>Projects</a></li>
                    <li><a href=''>Contacts</a></li>
                </ul>
            </div>
        </nav>
    </div>
    );
}
export default Navbar;