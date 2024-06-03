// eslint-disable-next-line no-console
console.log('responsive.sk from _common.js')

// import.meta.glob([
//     '/src/images/**',
//     '/src/fonts/**',
// ]);


import './app.css'

import 'animate.css'
//import 'odometer/themes/odometer-theme-train-station.css'
import './assets/css/odometer.css'
//import './assets/css/animate.css'

/* xtendui */

//import 'xtendui'
//import 'xtendui/src/toggle'
//import './assets/js/odometer.js'
import 'odometer'
//import './assets/js/wow.112.js'
//import 'wow.js/dist/wow.js'
//import { WOW } from 'wow.js'
//const { WOW } = require('wow.js'); // CommonJS
//import { WOW } from 'wow.js'; //ES6
import WOW from 'wow.js'
//import './assets/js/lenis.js'
//const WOW = require('wow.js')
import Lenis from 'lenis'

//import 'odometer'

// const wow = new WOW()
// wow.init()

const wow = new WOW()
wow.init()
const lenis = new Lenis();
const stats = document.querySelector('.stats');
let odometerStarted = false;

function raf(time) {
    lenis.raf(time);
    const statsPosition = stats.getBoundingClientRect();
    if (!odometerStarted && statsPosition.top <= window.innerHeight && statsPosition.bottom >= 0) {
        const odometers = document.querySelectorAll('.odometer');
        odometers.forEach(odometer => {
            odometer.innerHTML = odometer.getAttribute('data-value');
        });
        odometerStarted = true;
    }
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const menu = document.querySelector(".menu");
const menuContainer = document.querySelector(".menu_container");
let menuToggle = false;
menu.addEventListener("click", ()=>{
    if(!menuToggle){
        menuContainer.style.transform = "translateX(0)";
        lenis.stop();
    }
    else{
        menuContainer.style.transform = "translateX(100%)";
        lenis.start();
    }

    menuToggle = !menuToggle
})
