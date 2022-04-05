import React from "react";
import Menu from "./svg/bars-solid.svg";
import Cart from "./svg/cart-flatbed-solid.svg";
import Close from "./svg/circle-xmark-solid.svg";
import { Link } from "react-router-dom";
import './css/header.css'






const Header = () => {
  return (
    <header>
      <div>
        <img src={Menu} alt="" width="20px" />
      </div>
      <div className="logo">
          <h1><Link to ='./'>Nike</Link></h1>
      </div>
      <nav>
          <ul>
              <li><Link to=''>Home</Link></li>
              <li><Link to=''>Product</Link></li>
              <li><Link to=''>Contact</Link></li>
              <li><Link to=''>About</Link></li>
              <li className="close" >
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
