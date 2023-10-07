import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Enormous Insidious Starling</title>
        <meta property="og:title" content="Enormous Insidious Starling" />
      </Helmet>
      <img alt="image" src="/macabretimbre-1500w.png" className="home-image" />
      <span className="home-text">məˈkɑːb ˈtæmbər</span>
      <h1 className="home-text01">
        <span className="home-text02">Current Offerings:</span>
        <br></br>
      </h1>
      <div className="home-container01">
        <div className="home-container02">
          <img
            alt="image"
            src="/pxl_20230831_211807335~2-300w.jpg"
            className="home-image1"
          />
        </div>
      </div>
      <div className="home-container03">
        <div className="home-container04">
          <div className="home-container05">
            <span className="home-text04">Fun Razor</span>
            <span className="home-text05">One-Knob Fuzz</span>
          </div>
        </div>
        <div className="home-container06">
          <span className="home-text06">90</span>
        </div>
      </div>
      <a
        href="https://reverb.com/item/73056731-macabre-timbre-fun-razor-2023-chrome"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link"
      >
        Buy on Reverb
      </a>
      <h1 className="home-text07">
        <br className="home-text08"></br>
        <span className="home-text09">Coming Soon:</span>
        <br></br>
      </h1>
      <div className="home-container07">
        <div className="home-container08">
          <div className="home-container09">
            <span className="home-text11">Pluton</span>
            <span className="home-text12">Synth Fuzz</span>
          </div>
        </div>
        <div className="home-container10"></div>
        <span className="home-text13">110</span>
      </div>
      <div className="home-container11">
        <div className="home-container12">
          <div className="home-container13">
            <span className="home-text14">Aries</span>
            <span className="home-text15">Analog Octave-Booster</span>
          </div>
        </div>
        <div className="home-container14"></div>
        <span className="home-text16">160</span>
      </div>
      <div className="home-container15">
        <div className="home-container16">
          <div className="home-container17">
            <span className="home-text17">Tri-Fold</span>
            <span className="home-text18">Triple Wavefolder</span>
          </div>
        </div>
        <div className="home-container18"></div>
        <span className="home-text19">210</span>
      </div>
      <h1 className="home-text20">
        <br className="home-text21"></br>
        <span className="home-text22">Contact Me!</span>
        <br></br>
      </h1>
      <a
        href="https://www.instagram.com/macabretimbre/"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link1"
      >
        instagram.com/macabretimbre/
      </a>
      <div className="home-container19"></div>
      <a href="mailto:macabretimbre@gmail.com?subject=" className="home-link2">
        macabretimbre@gmail.com
      </a>
      <div className="home-container20"></div>
      <a
        href="https://reverb.com/shop/nates-boutique-36"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link3"
      >
        reverb.com
      </a>
    </div>
  )
}

export default Home
