import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [sticky, setStiky] = useState(false);
  useEffect (()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ?setStiky(true):setStiky(false);
    })
  },[]);
  const [mobileMenu,setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    mobileMenu? setMobileMenu(false): setMobileMenu(true);
  }
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <nav className={`container ${sticky ? `dark-nav` : ""}`}>
      <img src={logo} className="logo" alt="" onClick={reloadPage} />
      <ul className={ mobileMenu?'': 'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} duration={500} offset={0}>Home</Link></li>
        <li><Link to="program" smooth={true} duration={500} offset={-260}>Program </Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-120}>About us </Link></li>
        <li><Link to="campus" smooth={true} duration={500} offset={-260}>Campus </Link></li>
        <li><Link to="testimonial" smooth={true} duration={500} offset={-260}>Testimonial </Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-260}>
          <button className="btn">Contact Us</button>
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
