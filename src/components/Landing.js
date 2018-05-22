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
  <div className="text-center main">
    <Header />
    <Presentation />
    <Separator />
    <UniqueValue />
    <Separator />
    <Products />
    <Separator />
    <Team />
    <Separator />
    <Contact />
    <Separator />
    <TrustUs />
    <Separator />
    <Footer />
  </div>

export default Landing;