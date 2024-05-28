import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

// ================ IMPORT IMAGES ================= //

import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import ball from '../assets/ball.png';
import without from '../assets/without.png';
import withImg from '../assets/with.png';

// =================================================== //

const Home = () => {
return (
<div class="homeSection">

  <div class="heroBg">
    <div class="bgImg">

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
      <img src={ball} />
    </div>
  </div>

  <div class="igniteText">
    <p className="heading green">Ignite sales </p>
    <p className="heading">with your corner stores</p>
    <p className="description">Offer trade credit instantly to your buyers at checkout. We'll pay you the same day and
      own 100% of the risk.</p>
    <Link className="schedule" to="/contact">Schedule a demo✨</Link>
  </div>

  <div class="withWithout">
    <div class="column">
      <p class="heading">Without LNK</p>
      <img src={without} />
    </div>
    <div class="column">
      <p class="heading">With LNK</p>
      <img src={withImg} />
    </div>
  </div>

  <div class="about">
    <p className="sectionName">ABOUT US</p>
    <p className="heading">Goodbye small orders, 👋 supercharged sales</p>
    <div class="grid">

      <div class="card">
        <div class="title"><div class="circle"></div>GROW RETENTION</div>
        <div class="number">>85%</div>
        <div class="description">Offer customers flexible terms to grow their loyalty, ditch their competition, and keep coming back.</div>
      </div>

      <div class="card">
        <div class="title"><div class="circle"></div>INCREASE GMV</div>
        <div class="number">>37%</div>
        <div class="description">Experience a same-day uplift on your sales. With Propaga, you'll increase conversion at checkout and differentiate from the market.</div>
      </div>

      <div class="card">
        <div class="title"><div class="circle"></div>ELIMINATE RISK</div>
        <div class="number">100%</div>
        <div class="description">Forget NPL and managing risk or fraud. Propaga pays you digitally on behalf of the customer and always owns 100% of the risk.</div>
      </div>

      <div class="card">
        <div class="title"><div class="circle"></div>REDUCE COSTS</div>
        <div class="number">3-5%</div>
        <div class="description">Stop collecting, reconciling, and managing cash payments. It's the 21st century after all.</div>
      </div>

      <div class="card">
        <div class="title"><div class="circle"></div>OPTIMIZED FOR ADOPTION</div>
        <div class="number">>60%</div>
        <div class="description">Our proprietary model has industry leading acceptance rates and we built our product to be frictionless, integrate smoothly, and convert customers.
        </div>
      </div>

      <div class="card">
        <div class="title"><div class="circle"></div>AUGMENT AOV</div>
        <div class="number">>164%</div>
        <div class="description">Ease your customer of capital constraints. Ready for your average drop size to explode?</div>
      </div>

    </div>
  </div>

</div>
)
}

export default Home