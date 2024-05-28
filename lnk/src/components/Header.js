import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import usFlag from '../assets/usFlag.png';
import mexicoFlag from '../assets/mexicoFlag.png';
import franceFlag from '../assets/franceFlag.png';

const Header = () => {
return (
<div className="navBar">
  <div className="navMenu">
    <ul>
      <li>
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </li>
      <li>
        <div class="dot"></div>
        <Link className="contactLink" to="/contact">Contact us</Link>
      </li>
    </ul>
  </div>
  <div className="languageToggle">
    <div class="toggle">
      <div className="flag" id = "mexico">
        <img src={mexicoFlag} alt="Mexican" />
      </div>
      <div className="flag" id = "france">
        <img src={franceFlag} alt="French" />
      </div>
      <div className="flag" id = "us">
        <img src={usFlag} alt="English" />
      </div>
    </div>
  </div>

</div>
)
}

export default Header