import React from 'react';
import './App.css';
import { StyledApp } from './styles/app-layout.style';
import { InventoryButton } from './components/buttons'
import { PageHeader } from './components/layout'
import { GoldText } from './components/typography'

function App() {

  const handleInventoryClick = () => {
    console.log('inventory button clicked')
    // toggle inventory (modal?)
  }

  return (
    <StyledApp className="app-container">
      <PageHeader />
      <main  style={{backgroundImage:"url('/res/game-background.jpeg')"}}>
        <div className="game-container">
          {/* Top Stats Bar */}
          <section className="top-stats-bar">
            {/* Left Side */}
            <InventoryButton handleClick={handleInventoryClick} />
            {/* Right Side */}
            <GoldText />
          </section>

          {/* Dialogue Box */}
        </div>
      </main>
      <footer>
        <p className="footer-text">Made by Nico and Eric during the Great Coronavirus Lockdown of 2020</p>
      </footer>
    </StyledApp>
  );
}

export default App;
