import React from 'react';

//Components
import UniqueValue from './landing/UniqueValue';
import TrustUs from './landing/TrustUs';
import Presentation from './landing/Presentation';
import Products from './landing/Products';
import Team from './landing/Team';
import Contact from './landing/Contact';
import Header from './landing/Header';
import Separator from './landing/Separator';
import Footer from './landing/Footer';

//CSS
import "../styles/landing.css"

const Landing = () =>
  <div className="container main">
    <Header />
    <Presentation />
    <UniqueValue />
    <Products />
    <Team />
    <Contact />
    <TrustUs />
    <Footer />
  </div>

export default Landing;