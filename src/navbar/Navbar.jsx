import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurant} from 'react-icons/md';


import './Navbar.css'

function Navbar() {

const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={"/src/assets/gericht.png"} alt="app logo"/>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensabs'><a href="#home">Home</a></li>
        <li className='p__opensabs'><a href="#about">About</a></li>
        <li className='p__opensabs'><a href="#menu">Menu</a></li>
        <li className='p__opensabs'><a href="#award">Award</a></li>
        <li className='p__opensabs'><a href="#contact">Contact</a></li>
       
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Login / Regiter</a>
        <div/>
        <a href='/' className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=> setToggleMenu(true)}/>
        {toggleMenu && (
        <div className='app__navbar-smallscreen_overlay flex_center slide_bottom'>
        <MdOutlineRestaurant fontSize={27} className='overlay__close' onClick={()=> setToggleMenu(false)}/>
        <ul className='app__navbar-smallscreen-links'>
        <li className='p__opensabs'><a href="#home">Home</a></li>
        <li className='p__opensabs'><a href="#about">About</a></li>
        <li className='p__opensabs'><a href="#menu">Menu</a></li>
        <li className='p__opensabs'><a href="#award">Award</a></li>
        <li className='p__opensabs'><a href="#contact">Contact</a></li>
       
      </ul>
      </div>
      )}
      </div>


    </nav>
  )
}

export default Navbar