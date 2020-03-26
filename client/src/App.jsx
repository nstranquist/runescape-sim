import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
// import components
import { ActionButtons } from './components/ActionButtons'
import { Dialogue } from './components/Dialogue'
import { Inventory } from './components/Inventory'
import { InventoryButton } from './components/core/buttons'
import { PageHeader } from './components/core/layout'
import { GoldText } from './components/core/typography'
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

const startingPlayerData = {
  playerName: "darthbitcoin",
  gold: 0,
  fishing: {
    level: 0,
    xp: 0,
  },
  woodcutting: {
    level: 0,
    xp: 0
  },
  mining: {
    level: 0,
    xp: 0
  },
  inventory: {
    size: 24,
    items: [
      {
        id: uuidv4(),
        name: 'Tuna',
        sellValue: 12,
        stackable: true,
        quantity: 11,
      },
      {
        id: uuidv4(),
        name: 'Bronze Sword',
        sellValue: 40,
        stackable: false,
        // no quantity provided if stackable=false
      }
    ]
  }
}


// TODO: color-code the timestamp (green or maroon), name (blue?), message text (white)

function App() {
  const [playerData, setPlayerData] = useState(startingPlayerData)
  const [messages, setMessages] = useState(starterMessages)
  const [dialogueVisible, setDialogueVisible] = useState(true)
  const [activeScreen, setActiveScreen] = useState('Home') // 'Inventory', 'Exchange', etc. (react-router / lazy load??)

  const handleInventoryClick = () => {
    console.log('inventory button clicked')
    // toggle inventory (modal?)
    setActiveScreen('Inventory')
  }

  const onHandleFish = () => {
    let fish = getRandomFish()
    console.log('fish:', fish)
    let message = `You caught a ${fish.name}`
    addInventoryItem({
      ...fish
    })
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

  const createNewMessage = (message, type="Game", sender=null) => {
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
        type,
        sender
      }
    ])
  }

  const handleSendUserMessage = (messageText) => {
    createNewMessage(messageText, "Social", "darthbitcoin")
  }

  const hideDialogueBox = () => setDialogueVisible(false)

  const handleSellItem = (sellItem) => {
    console.log('selling item with id:', sellItem.id)

    if(sellItem.sellValue) {
      // remove item from player inventory
      setPlayerData({
        ...playerData,
        gold: playerData.gold + sellItem.sellValue,
        inventory: {
          ...playerData.inventory,
          items: playerData.inventory.items.filter(item => item.id !== sellItem.id)
        }
      })
      
      createNewMessage(`Sold the ${sellItem.name} for ${sellItem.sellValue} gold.`)
    }
    else {
      console.log('item cannot be sold')
    }
    
    // add appropriate coin amount to player gold
  }

  const handleDeleteItem = (id) => {
    console.log('deleting item with id:', id)

    // remove item from inventory (if it exists)
    setPlayerData({
      ...playerData,
      inventory: {
        ...playerData.inventory,
        items: playerData.inventory.items.filter(item => item.id !== id)
      }
    })
  }

  const handleCloseInventory = () => {
    setActiveScreen('Home') // or to a variable 'lastActiveScreen' to implement stack navigation-type functionality
  }

  const addInventoryItem = (item) => {
    const {id, name, sellValue, stackable} = item
    setPlayerData({
      ...playerData,
      inventory: {
        ...playerData.inventory,
        items: [
          ...playerData.inventory.items,
          // NOTE: not working for 'stacking' items yet
          {
            id,
            name,
            sellValue,
            stackable
          }
        ]
      }
    })
  }

  return (
    <StyledApp className="app-container">
      <PageHeader playerName={playerData.playerName} />

      {activeScreen === 'Inventory' && (
        <section className="inventory-section">
          <Inventory
            inventory={playerData.inventory}
            handleSellItem={handleSellItem}
            handleDeleteItem={handleDeleteItem}
            handleCloseInventory={handleCloseInventory}
          />
        </section>
      )}

      <main style={{backgroundImage:"url('/res/game-background.jpeg')"}}>
        {/* Top Stats Bar */}
        <section className="top-stats-bar">
          {/* Left Side */}
          <InventoryButton handleClick={handleInventoryClick} />
          {/* Right Side */}
          <GoldText goldNumber={playerData.gold} />
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
      </main>
      <footer>
        <p className="footer-text">Made by Nico and Eric during the Great Coronavirus Lockdown of 2020</p>
      </footer>
    </StyledApp>
  );
}

export default App;
