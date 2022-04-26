import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-caminhao.mp4" autoPlay loop muted />
      <h1>ENTREGA EXPRESSA</h1>
      <p>Sua encomenda mais rápida e segura.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          RASTREIE SUA ENCOMENDA
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log('hey')}
        >
          CADASTRE-SE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
