import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assests/logo1.png'
import menu_icon from '../../assests/menu-icon.png'
import { Link } from 'react-scroll'
const Navbar = () => {
  const [sticky, setsticky] =useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    })
  },[]);

  const [mobileMenu, setmobileMenu ] = useState(false);
  const togglemenu = ()=>{
    mobileMenu ? setmobileMenu(false) : setmobileMenu(true)
  }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
     <img src={logo} alt="logo" className='logo' />
     <ul className={mobileMenu? '':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={700}>HOME</Link></li>
        <li><Link to='product' smooth={true} offset={-260} duration={700}>PRODUCT</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={700}>ABOUT</Link></li>
        <li><Link to='gallery' smooth={true} offset={-260} duration={700}>GALLERY</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={700}>TESTIMONIALS</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={700} className='btn'>CONTACT</Link></li>
     </ul>
     <img src={menu_icon} alt="" className='menu-icon' onClick={togglemenu} />
    </nav>
  )
}

export default Navbar
