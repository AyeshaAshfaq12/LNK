import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import '../App.css';
import Scroll from '../components/Scroll'


// ================ IMPORT IMAGES ================= //

import logo from '../assets/logo.png';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import ball from '../assets/ball.png';
import without from '../assets/without.png';
import withImg from '../assets/with.png';
import customer1 from '../assets/customer1.jpg';
import customer2 from '../assets/customer2.jpg';
import cUser from '../assets/cUser.jpg';
import fast from '../assets/fast.png';
import frictionless from '../assets/frictionless.png';
import honest from '../assets/honest.png';
import pago from '../assets/pago.png';
import graph from '../assets/graph.png';

// =================================================== //

const Home = () => {

  return (

    <div className="homeSection">

      <Fade triggerOnce damping={0.2}>
        
        <div className="heroBg">
          <div className="bgImg">

            <div className="bg1">
              <img src={bg1} />
            </div>
            <div className="bg2">
              <img src={bg2} />
            </div>
            <div className="bg3">
              <img src={bg3} />
            </div>
            <div className="ball1">
              <img src={ball} />
            </div>
            <div className="ball2">
              <img src={ball} />
            </div>
          </div>

          <div className="ball3">
            <img src={ball
            } />
          </div>
        </div>

        <div className="igniteText">
          <p className="heading green">Revolutionizing Pharma</p>
          <p className="heading"> Compliance and Networking</p>
          <p className="description">AI-driven solutions for fair market valuation and professional connectivity.</p>
          <Link className="schedule" to="/contact">Get Started✨</Link>
        </div>

        <div className="withWithout">
          <div className="column">
            <p className="heading">Without LNK</p>
            <img src={without
            } />
          </div>
          <div className="column">
            <p className="heading">With LNK</p>
            <img src={withImg
            } />
          </div>
        </div>

        <div className="about">
          <p className="sectionName">ABOUT US</p>
          <p className="heading">Goodbye small orders, 👋 supercharged sales</p>
          <div className="grid">

            <div className="card">
              <div className="title">
                <div className="circle"></div>GROW RETENTION
              </div>
              <div className="number">&gt;85%</div>
              <div className="description">Offer customers flexible terms to grow their loyalty, ditch their competition, and
                keep coming back.</div>
            </div>

            <div className="card">
              <div className="title">
                <div className="circle"></div>INCREASE GMV
              </div>
              <div className="number">&gt;37%</div>
              <div className="description">Experience a same-day uplift on your sales. With Propaga, you'll increase
                conversion at checkout and differentiate from the market.</div>
            </div>

            <div className="card">
              <div className="title">
                <div className="circle"></div>ELIMINATE RISK
              </div>
              <div className="number">100%</div>
              <div className="description">Forget NPL and managing risk or fraud. Propaga pays you digitally on behalf of the
                customer and always owns 100% of the risk.</div>
            </div>

            <div className="card">
              <div className="title">
                <div className="circle"></div>REDUCE COSTS
              </div>
              <div className="number">3-5%</div>
              <div className="description">Stop collecting, reconciling, and managing cash payments. It's the 21st century
                after all.</div>
            </div>

            <div className="card">
              <div className="title">
                <div className="circle"></div>OPTIMIZED FOR ADOPTION
              </div>
              <div className="number">&gt;60%</div>
              <div className="description">Our proprietary model has industry leading acceptance rates and we built our
                product to be frictionless, integrate smoothly, and convert customers.
              </div>
            </div>

            <div className="card">
              <div className="title">
                <div className="circle"></div>AUGMENT AOV
              </div>
              <div className="number">&gt;164%</div>
              <div className="description">Ease your customer of capital constraints. Ready for your average drop size to
                explode?</div>
            </div>

          </div>
        </div>

        <Scroll />

        <div className="customers">
          <p className="heading">Thousands of corner stores love propaga</p>
          <div className="grid">

            <div className="reviewCol">

              <div className="review">
                <img className="cImg" src={customer1
                } />
                <p className="title">Inventory not cash</p>
                <p className="description">With access to capital in the form of product, I can grow my business while
                  delighting my customers.</p>
                <div className="user">
                  <div className="img">
                    <img src={cUser
                    } />
                  </div>
                  <div className="details">
                    <p className="name">Don Pablo</p>
                    <p className="shop">Corner Store Owner <span>Monterrey</span></p>
                  </div>
                </div>
              </div>

              <div className="review">
                <p className="title">Grow income</p>
                <p className="description">Propaga changed my business. I'm generating an additional $35,
                  000 pesos each month.
                </p>
                <div className="user">
                  <div className="img">
                    <img src={cUser
                    } />
                  </div>
                  <div className="details">
                    <p className="name">Doña Lupita</p>
                    <p className="shop">Local Store Owner<span> Mexico City</span></p>
                  </div>
                </div>
              </div>

              <div className="review">
                <p className="title">Growth in categories</p>
                <p className="description">We inherited our business from our grandfather. When we started, we were only
                  selling beer. With Propaga, we've added several categories: soft drinks, candies, and grocery goods. We're
                  now the neighborhood favorite.</p>
                <div className="user">
                  <div className="img">
                    <img src={cUser
                    } />
                  </div>
                  <div className="details">
                    <p className="name">Jesus brothers</p>
                    <p className="shop">Hermanos Jesus<span>Saltillo</span></p>
                  </div>
                </div>
              </div>


            </div>

            <div className="reviewCol">

              <div className="review">
                <p className="title">Help and speed</p>
                <p className="description">It would have taken me a lot longer to get to where I am without the help of
                  Propaga.</p>
                <div className="user">
                  <div className="img">
                    <img src={cUser
                    } />
                  </div>
                  <div className="details">
                    <p className="name">Doña Maria</p>
                    <p className="shop">Misc. Maria <span>Mexico City </span></p>
                  </div>
                </div>
              </div>

              <div className="review">
                <p className="title">Multiple transactions</p>
                <p className="description">This is not a joke, I was able to purchase product for $30,
                  000 pesos with Propaga
                  and I'm already on my ninth transaction... I hope to remain a customer for a very long time.</p>
                <div className="user">
                  <div className="img">
                    <img src={cUser
                    } />
                  </div>
                  <div className="details">
                    <p className="name">Doña Alicia</p>
                    <p className="shop">Abts. Pepe <span>Mexico City</span></p>
                  </div>
                </div>
              </div>

              <div className="review">
                <p className="title">Fast and whatsapp-first</p>
                <p className="description">Highly recommended!! Fast to sign up and everything is on Whatsapp which makes it
                  easy.</p>
                <div className="user">
                  <div className="img">
                    <img src={cUser
                    } />
                  </div>
                  <div className="details">
                    <p className="name">Karen Gomez</p>
                    <p className="shop">Abarrotes y licores<span>Mexico State</span></p>
                  </div>
                </div>
              </div>

            </div>

            <div className="reviewCol">

              <div className="review">
                <p className="title">Increase purchasing power</p>
                <p className="description">With Propaga I have won on promotions and maintained my store fully stocked. I used
                  to lose business to competition because I didn't have the merchandise I needed to have my store with all the
                  products that my customers wanted. Propaga has solved that problem.</p>
                <div className="user">
                  <div className="img">
                    <img src={cUser
                    } />
                  </div>
                  <div className="details">
                    <p className="name">Gustavo "el chino" Cruz</p>
                    <p className="shop">Abts. El Chino <span>Saltillo</span></p>
                  </div>
                </div>
              </div>

              <div className="review">
                <img className="cImg" src={customer2
                } />
                <p className="title">Honest & simple</p>
                <p className="description">I was afraid of using credit before Propaga. However, I've been able to grow my
                  business by paying for inventory after I sell it.</p>
                <div className="user">
                  <div className="img">
                    <img src={cUser
                    } />
                  </div>
                  <div className="details">
                    <p className="name">Juan Mendez</p>
                    <p className="shop">El callejon <span>Mexico City</span></p>
                  </div>
                </div>
              </div>

              <div className="review">
                <p className="title">Great pricing</p>
                <p className="description">The offer originally sounded too good to be true. This was the best deal I had
                  heard of.</p>
                <div className="user">
                  <div className="img">
                    <img src={cUser
                    } />
                  </div>
                  <div className="details">
                    <p className="name">Don Alfonso</p>
                    <p className="shop">Local store owner<span>Monterrey</span></p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="faq">

          <div className="faq-header">FAQ</div>

          <div className="faq-content">

            <div className="faq-question">
              <input id="q1" type="checkbox" className="panel" />
              <div className="plus">+</div>
              <label htmlFor="q1" className="panel-title">What is Propaga?</label>
              <div className="panel-content">
                <p>Propaga is a Mexico City-based fintech company that enables B2B marketplaces and distributors to offer Buy Now, Pay Later payment methods to their micro- business customers.</p>
                <p>We're 100% focused on the traditional channel in LatAm and are obsessed with delivering a frictionless capital product to micro-businesses and distributors alike.</p>
              </div>
            </div>

            <div className="faq-question">
              <input id="q2" type="checkbox" className="panel" />
              <div className="plus">+</div>
              <label htmlFor="q2" className="panel-title">What is BNPL - Buy Now, Pay Later?</label>
              <div className="panel-content">
                <p>BNPL stands for Buy Now, Pay Later; a modern way of saying short- term financing.</p>
                <p>Propaga gives micro-businesses the option to extend payment terms, while paying out their distributors on the same day.</p>
              </div>
            </div>

            <div className="faq-question">
              <input id="q3" type="checkbox" className="panel" />
              <div className="plus">+</div>
              <label htmlFor="q3" className="panel-title">How can I integrate Propaga?</label>
              <div className="panel-content">
                <p>Its quick and easy, built with your developers in mind.</p>
                <p>Reach out to sales@propaga.mx to schedule a demo. We're excited to learn more about your business!</p>
              </div>
            </div>

            <div className="faq-question">
              <input id="q4" type="checkbox" className="panel" />
              <div className="plus">+</div>
              <label htmlFor="q4" className="panel-title">Where does Propaga operate?</label>
              <div className="panel-content">
                <p>We're based out of Mexico City with offices in Colombia, Miami, and New York.</p>
                <p>Currently, we offer national coverage in Mexico with plans to expand to other countries in LatAm very soon.</p>
              </div>
            </div>

          </div>

        </div>

        <div className="costs">
          <p className="heading">Reduce costs, supercharge sales, and increase customer loyalty</p>
          <p className="description">What are you waiting for?</p>
          <Link className="schedule" to="/contact">Schedule a demo✨</Link>
        </div>

        <footer>
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="info">
            <p className="copyright">Copyright © 2024 MICHASAN SAPI DE CV. All rights reserved</p>
            <Link to="/">Terms & Conditions</Link>
            <Link to="/">Privacy Notice</Link>
          </div>

        </footer>

      </Fade>
    </div>
  )
}

export default Home