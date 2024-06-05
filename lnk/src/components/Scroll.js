import React, { useEffect, useState } from 'react';
import '../App.css';

// ================ IMPORT IMAGES ================= //

import fast from '../assets/fast.png';
import frictionless from '../assets/frictionless.png';
import honest from '../assets/honest.png';
import pago from '../assets/pago.png';
import graph from '../assets/graph.png';

const Scroll = () => {
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const root = document.querySelector('.scroller');
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionImg = document.querySelector('.sectionImg');

                    // Determine scroll direction
                    const currentScrollY = window.scrollY;
                    const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
                    setLastScrollY(currentScrollY);

                    sectionImg.innerHTML = '';

                    const img = document.createElement('img');

                    if (entry.target.id === 'fast') {
                        img.src = fast;
                        img.alt = "Fast";
                    } else if (entry.target.id === 'honest') {
                        img.src = honest;
                        img.alt = "Honest";
                    } else if (entry.target.id === 'frictionless') {
                        img.src = frictionless;
                        img.alt = "Frictionless";
                    }

                    if (scrollDirection === 'down') {
                        img.classList.add('slideDown');
                    } else {
                        img.classList.add('slideUp');
                    }

                    sectionImg.appendChild(img);
                }
            });
        }, { threshold: 0.5, root: root });

        const targets = document.querySelectorAll('.info');
        targets.forEach(target => observer.observe(target));

        return () => {
            targets.forEach(target => observer.unobserve(target));
        };
    }, [lastScrollY]);

    return (
        <div>
            <div className="scroller">
                <div className="content">
                    <div className="section">
                        <div className="dynamicImg">
                            <div className="sectionImg">
                                <img src={fast} alt="Fast" />
                            </div>
                            <div className="static">
                                <img className="pago" src={pago} alt="Pago" />
                                <img className="graph" src={graph} alt="Graph" />
                            </div>
                        </div>
                        <div className="infoBlock">
                            <div id="fast" className="info">
                                <p className="number">01</p>
                                <p className="title">Fast</p>
                                <p className="description">Frictionless capital in just a few clicks. Powered by Propaga’s in-house lightning quick KYB built specifically for underserved business.</p>
                            </div>
                            <div id="honest" className="info">
                                <p className="number">02</p>
                                <p className="title">Honest</p>
                                <p className="description">Forget fine print, surprises, and compounding interest. Formal capital built with your business' and your customers' growth in mind.</p>
                            </div>
                            <div id="frictionless" className="info">
                                <p className="number">03</p>
                                <p className="title">Frictionless & Digital</p>
                                <p className="description">We’re natively integrated with over 50,000 cash-in locations so that your customers can keep paying like they are used to. And you get paid the same day, digitally.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scroll;






