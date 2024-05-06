// import * as
//  React from 'react'
//  import { FaBars } from 'react-icons/fa';
// //  import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom'
// import './index.css'

// const Navbar = () => 
  
  

// <div className="Navbar">
//   <img className="img" src="./logo.jpg" alt=""/>
//   <div className="nav">
// <Link className="link" to="/">Home</Link>
// <Link className="link" to='/careers'>Careers</Link>
// <Link className="link" to="/products">Products</Link>
// <Link className="link" to='/feedback'>Feedback</Link>
// <Link className="link" to='/services'>Services</Link>
// <Link className="link" to='/about'>About Us</Link>
// <Link className="link" to="/trustedpartners">Partners</Link>
// <Link className="button" to="/contact">ContactUs</Link>
// </div>

// </div>



  

// export default Navbar

import {useState} from 'react';

import { Link, useLocation } from 'react-router-dom';
import { FaBars,FaTimes } from 'react-icons/fa';
import './index.css';

const Navbar = () => {
  const location = useLocation();
  const [bar,setBars]=useState(false)
const bars = () => {
  setBars(!bar)
  
};

  return (
    <div className="Navbar">
     <div className="logo"><div className="mark"><Link to="/"><img className="img" src="./logo-2.png" alt="" /></Link><span>&#174;</span></div>
    {bar? <FaTimes className="bars" onClick={bars} color="white" size={26}/>: <FaBars onClick={bars} className="bars" size={26} color="white" />}</div>
      <div className={`${bar?"nav":"display"}`}>
        <Link onClick={bars} className={`link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
        <Link onClick={bars} className={`link ${location.pathname === '/services' ? 'active' : ''}`} to='/services'>Services</Link>
        <Link onClick={bars} className={`link ${location.pathname === '/products' ? 'active' : ''}`} to="/products">Products</Link>
        <Link onClick={bars} className={`link ${location.pathname === '/clients' ? 'active' : ''}`} to='/clients'>Clients</Link>
        {/* <Link onClick={bars} className={`link ${location.pathname === '/services' ? 'active' : ''}`} to='/services'></Link> */}
        <Link onClick={bars} className={`link ${location.pathname === '/about' ? 'active' : ''}`} to='/about'>About Us</Link>
        <Link onClick={bars} className={`link ${location.pathname === '/careers' ? 'active' : ''}`} to="/careers">Careers</Link>
        <Link onClick={bars} className={`button ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default Navbar;

