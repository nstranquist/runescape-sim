import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
// import components
import { InventoryButton } from './components/core/buttons'
import { PageHeader } from './components/core/layout'
import { GoldText } from './components/core/typography'
import { ActionButtons } from './components/ActionButtons'
import { Dialogue } from './components/Dialogue'
// import utils
import { getRandomFish } from './data/fish.data'
import { getRandomWood } from './data/wood.data'
import { getRandomOre } from './data/ores.data'
import { newFormattedTimestamp } from './utils/timestamp.utils'
// import styles
import { StyledApp } from './styles/app-layout.style';
import './App.css';

const starterMessages = [
  {
    id: uuidv4(),
    title: "You caught a Tuna!",
    timestamp: "12:40",
    type: "Game"
  },
  {
    id: uuidv4(),
    title: "You caught a Mackeral!",
    timestamp: "16:23",
    type: "Game"
  }
]

// TODO: color-code the timestamp (green or maroon), name (blue?), message text (white)

function App() {
  const [messages, setMessages] = useState(starterMessages)
  const [dialogueVisible, setDialogueVisible] = useState(true)

  const handleInventoryClick = () => {
    console.log('inventory button clicked')
    // toggle inventory (modal?)
  }

  const onHandleFish = () => {
    let message = `You caught a ${getRandomFish()}`
    createNewMessage(message)
  }

  const onHandleChop = () => {
    let message = `You chopped the tree and found ${getRandomWood()} logs!`
    createNewMessage(message)
  }

  const onHandleMine = () => {
    let message = `You swing your pick at the rock and find ${getRandomOre()} ore!`
    createNewMessage(message)
  }

  const createNewMessage = (message, type="Game") => {
    console.log('new message:', message)
    let timestamp=null;
    if(type==='Game' || type==='Social') {
      timestamp = newFormattedTimestamp()
    }
    setMessages([
      ...messages,
      {
        id: uuidv4(),
        title: message,
        timestamp,
        type
      }
    ])
  }

  const handleSendUserMessage = (messageInput) => {
    let message = `(darthbitcoin): ${messageInput}`
    createNewMessage(message, "Social")
  }

  const hideDialogueBox = () => setDialogueVisible(false)

  return (
    <StyledApp className="app-container">
      <PageHeader />
      <main  style={{backgroundImage:"url('/res/game-background.jpeg')"}}>
        {/* <div className="game-container"> */}
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
            {dialogueVisible ? (
              <Dialogue
                messages={messages}
                handleSendUserMessage={handleSendUserMessage}
                hideDialogueBox={hideDialogueBox}
              />
            ) : (
              <button onClick={() => setDialogueVisible(true)} style={{textAlign:'center', margin:"0 auto", display:'block'}}>
                Enter Dialogue</button>
            )}
          </section>
        {/* </div> */}
      </main>
      <footer>
        <p className="footer-text">Made by Nico and Eric during the Great Coronavirus Lockdown of 2020</p>
      </footer>
    </StyledApp>
  );
}

export default App;
