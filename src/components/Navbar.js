import React from 'react'
import { MenuItems } from './Menuitems'
import { useState } from 'react'
import { Button } from './Button'
const Navbar = () => {
  const [click, handleClick] = useState(false);

  return (
    <nav className='navbarItems'>
        <h1 className='navbar-logo'>React <i class="fa-brands fa-react"></i></h1>
        <div className='navbar-icon' onClick={() => handleClick(!click)}>
            <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
                return (
                <li key={index}>
                    <a className={item.cName} href={item.url}>
                        {item.title}
                    </a>
                </li>
                )
                })}
        </ul>
        <Button>Sign Up</Button>
    </nav>
  )
}

export default Navbar
