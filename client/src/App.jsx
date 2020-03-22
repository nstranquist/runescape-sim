import React from 'react';
import './App.css';
import { StyledApp } from './styles/app-layout.style';

function App() {
  return (
    <StyledApp className="app-container">
      <header>
        {/* Left Side */}
        <div className="header-left">
          <h1 className="h1-header">Runescape Sim</h1>
        </div>
        {/* Right Side */}
        <div className="header-right">
          <h3>DarthBitcoin</h3>
        </div>
      </header>
      <main>
        <div className="game-container">
          {/* Top Stats Bar */}
          <section className="top-stats-bar">
            {/* Left Side */}
            <div className="inventory-btn-container">
              <button className="inventory-btn">Inventory</button>
            </div>
            {/* Right Side */}
            <div className="gold-container">
              <span className="gold-text">0</span>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <p className="footer-text">Made by Nico and Eric during the Great Coronavirus Lockdown of 2020</p>
      </footer>
    </StyledApp>
  );
}

export default App;
