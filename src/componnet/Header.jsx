import React, { useState } from "react";
import Menu from "./svg/bars-solid.svg";
import Cart from "./svg/cart-flatbed-solid.svg";
import Close from "./svg/circle-xmark-solid.svg";
import { Link } from "react-router-dom";
import './css/header.css'






const Header = () => {


const [toggle ,setToggle] = useState(false)

const menuToggle =()=>{
    setToggle({
        toggle:!toggle
    })
}

  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={Menu} alt="" width="20px" />
      </div>
      <div className="logo">
          <h1><Link to ='./'>Nike</Link></h1>
      </div>
      <nav>
          <ul className={toggle ? 'toggle' : ''}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/product'>Product</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/login'>login</Link></li>
              <li className="close"onClick={menuToggle} >
                  <img src={Close} alt='' width='20px'/>
              </li>
          </ul>
          <div className="nav-cart">
              <span>0</span>
              <Link to='./'>
              <img src={Cart} alt='' width='20px'/>
              </Link>

          </div>
      </nav>
    </header>
  );
};

export default Header;
