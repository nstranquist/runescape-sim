import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        {/* Left Side */}
        <h1>Runescape Sim</h1>
        {/* Right Side */}
        <h3>DarthBitcoin</h3>
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
    </div>
  );
}

export default App;
