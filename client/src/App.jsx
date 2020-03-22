import React from 'react';
// import components
import { InventoryButton } from './components/core/buttons'
import { PageHeader } from './components/core/layout'
import { GoldText } from './components/core/typography'
import { ActionButtons } from './components/ActionButtons'
// import styles
import { StyledApp } from './styles/app-layout.style';
import './App.css';

function App() {

  const handleInventoryClick = () => {
    console.log('inventory button clicked')
    // toggle inventory (modal?)
  }

  const onHandleFish = () => {
    console.log('clicked fish')
  }

  const onHandleChop = () => {
    console.log('clicked chop')
  }

  const onHandleMine = () => {
    console.log('clicked mine')
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

          {/* Action Buttons */}
          <section className="action-buttons">
            <ActionButtons
              handleFish={onHandleFish}
              handleChop={onHandleChop}
              handleMine={onHandleMine}
            />
          </section>

          {/* Dialogue Box */}
          <section className="dialogue-box">
            dialogue box
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
