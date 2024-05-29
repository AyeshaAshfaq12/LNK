import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import usFlag from '../assets/usFlag.png';
import mexicoFlag from '../assets/mexicoFlag.png';
import franceFlag from '../assets/franceFlag.png';

const Header = () => {

  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: 'transparent',
    opacity: 1,
    backdropFilter: 'none'
  });

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      if (scroll > 50) {
        setNavbarStyle({
          backgroundColor: 'rgb(255, 255, 255)',
          opacity: 0.7,
          backdropFilter: 'none'
        });
      } else {
        setNavbarStyle({
          backgroundColor: 'transparent',
          opacity: 1,
          backdropFilter: 'none'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <div className="navBar" style={navbarStyle}>
    <div className="navBar">
      <div className="navMenu">
        <ul>
          <li>
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </li>
          <li>
            <div className="dot"></div>
            <Link className="contactLink" to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="languageToggle">
        <div className="toggle">
          <div className="flag" id="mexico">
            <img src={mexicoFlag} alt="Mexican" />
          </div>
          <div className="flag" id="france">
            <img src={franceFlag} alt="French" />
          </div>
          <div className="flag" id="us">
            <img src={usFlag} alt="English" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;


