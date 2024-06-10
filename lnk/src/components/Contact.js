import React from 'react'
import { Fade } from "react-awesome-reveal";

// ================ IMPORT IMAGES ================= //

import logo from '../assets/logo.png';
import bg1 from '../assets/bg1.png';
import withBg from '../assets/withBg.png';
import contactBg from '../assets/contactBg.png';

const Contact = () => {
  return (
    <div className="contactSection">
      <Fade triggerOnce damping={0.2}>
        <div className="contactForm">
          <p className="sectionName">CONTACT US</p>
          <div className="formText">
            <div className="form">
              <p className="heading">Reach out, we'd love to hear from you</p>
              <p className="description">We'll respond as soon as possible</p>
              <form action="">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
            <div className="text">
              <img src={contactBg} />
              <div className="contactAddress">
                <div className="contactDetails detailCard">
                  <div className="details">
                    <p className="heading">Sales</p>
                    <p className="description">Sales@propaga.mx</p>
                    <p className="description">Hello@propaga.mx</p>
                  </div>
                  <div className="details">
                    <p className="heading">Careers</p>
                    <p className="description">Careers@propaga.mx</p>
                    <p className="description">Santiago@propaga.mx</p>
                  </div>
                  <div className="details">
                    <p className="heading">Whatsapp</p>
                    <p className="description">+52 55 3105 7447</p>
                  </div>
                </div>
                <div className="addressDetails detailCard">
                  <div className="details">
                    <p className="heading">Mexico City Office</p>
                    <p className="description">Ámsterdam 255, Hipódromo Condesa, Cuauhtémoc, 06100 Ciudad de México, CDMX, México</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <img src={logo} />
          <span></span>
          <p className="copyright">Copyright © 2024 MICHASAN SAPI DE CV. All rights reserved</p>
        </footer>
      </Fade>
    </div>
  )
}

export default Contact
