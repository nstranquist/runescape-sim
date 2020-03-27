import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
// import components
import { ActionButtons } from './components/ActionButtons'
import { Dialogue } from './components/Dialogue'
import { Inventory, InventoryButtonBar } from './components/Inventory'
import { InventoryButton } from './components/core/buttons'
import { PageHeader } from './components/layout'
import { StatusBar } from './components/StatusBar';
// import utils
import { getRandomFish } from './data/fish.data'
import { getRandomWood } from './data/wood.data'
import { getRandomOre } from './data/ores.data'
import { newFormattedTimestamp } from './utils/timestamp.utils'
// import redux
import {
  addInventoryItem, removeInventoryItem, decrementInventoryItem, incrementInventoryItem
} from './store/inventory'
import { addXp } from './store/skills'
import { addGold, removeGold } from './store/player'
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
function App({
  player,
  inventory,
  skills,
  addGold, removeGold,
  addXp,
  addInventoryItem, removeInventoryItem,
  incrementInventoryItem,
  decrementInventoryItem,

}) {
  // const [playerData, setPlayerData] = useState(startingPlayerData)
  const [messages, setMessages] = useState(starterMessages)
  const [dialogueVisible, setDialogueVisible] = useState(true)
  const [activeScreen, setActiveScreen] = useState('Home') // 'Inventory', 'Exchange', etc. (react-router / lazy load??)

  useEffect(() => {
    console.log('-----------inventory items change:', inventory.items)
  }, [inventory.items])

  const handleInventoryClick = () => {
    setActiveScreen('Inventory')
  }

  const onHandleFish = () => {
    let fish = getRandomFish()
    let message = `You caught a ${fish.name}`
    handleAddXp('fishing', fish.xp)
    // check if fish is in inventory
    let match = inventory.items.find(item => item.name === fish.name)
    // if it is, and quantity < 99, add to quantity, not item, else add to inventory as new item
    if(match && match.quantity < 99) {
      incrementInventoryItem(fish.name)
      createNewMessage(message)
    }
    else
      addNewInventoryItem(fish, 'fish', message)
  }

  const onHandleChop = () => {
    let wood = getRandomWood()
    let message = `You chopped the tree and found ${wood.name} logs!`
    handleAddXp('woodcutting', wood.xp)
    let match = inventory.items.find(item => item.name === wood.name)
    if(match && match.quantity < 99) {
      incrementInventoryItem(wood.name)
      createNewMessage(message)
    }
    else
      addNewInventoryItem(wood, 'logs', message)
  }

  const onHandleMine = () => {
    let ore = getRandomOre()
    let message = `You swing your pick at the rock and find ${ore.name} ore!`
    handleAddXp('mining', ore.xp)
    let match = inventory.items.find(item => item.name === ore.name)
    if(match && match.quantity < 99) {
      incrementInventoryItem(ore.name)
      createNewMessage(message)
    }
    else
      addNewInventoryItem(ore, 'ore', message)
  }

  const addNewInventoryItem = (item, type, successMessage) => {
    if(inventory.items.length < inventory.size) {
      addInventoryItem({
        id: uuidv4(),
        name: item.name,
        sellValue: item.sellValue,
        stackable: item.stackable,
        quantity: item.quantity > 0 ? item.quantity : 1,
        type
      })
      createNewMessage(successMessage)
    }
    else
      createNewMessage("Your inventory is already full.", "Error")
  }

  const handleDeleteItem = (id, name) => {
    removeInventoryItem(name)
    createNewMessage(`You throw away the ${name}.`)
  }

  const createNewMessage = (message, type="Game", sender=null) => {
    let timestamp=null;
    if(type==='Game' || type==='Social' || type==="Error") {
      timestamp = newFormattedTimestamp()
    }
    let newMessage = {
      id: uuidv4(),
      title: message,
      timestamp,
      type,
      sender
    }
    // console.log('new message created:', newMessage)
    setMessages([
      ...messages,
      newMessage
    ])
  }

  const handleSendUserMessage = (messageText) => {
    createNewMessage(messageText, "Social", "darthbitcoin")
  }

  
  const handleSellItem = (sellItem) => {
    if(sellItem.sellValue) {
      let message = `Sold the ${sellItem.name} for ${sellItem.sellValue} gold.`
      decrementInventoryItem(sellItem.name)
      addGold(sellItem.sellValue)
      createNewMessage(message)
    }
  }

  const handleSellAll = () => {
    // loop through all items in inventory

      // if(item.quantity > 0)
      //  sellItem() {
      //   decrementInventoryItem(item.name)
      //   addGold(item.sellValue)
      //  }

    inventory.items.map(item => {
      if(item.sellValue) {
        console.log('selling item:', item.name)
        let count = item.quantity;
        while(item.quantity > 0) {
          decrementInventoryItem(item.name)
          addGold(item.sellValue)
          count--;
        }
        console.log('finished with item', item.name,'. Ending quantity is:',item.quantity)
      }
    })
  }
  
  // const handleSellAll = () => {
  //   // loop through inventory, sell for each item in quantity, remove item
  //   let inventorySnapshot = [...inventory.items]
  //   console.log('------------inventorySnapshot:', inventorySnapshot)
  //   inventorySnapshot.forEach(item => {
  //     // only sell if there is a quantity of item. otherwise, assuming it is not sellable.
  //     if(item.quantity) {
  //       console.log('while selling, item', item.name, 'has quantity:', item.quantity)
  //       // sell multiple
  //       let count = item.quantity
  //       while(count > 0) {
  //         if(count===1)
  //         console.log('this is the last count. its at 1')
  //         console.log('START****************selling item with quantity:', item.quantity, 'and name:', item.name)
  //         handleSellItem(item)
  //         count--;
  //       }
  //       console.log('END******************item', item.name, 'sold to 0. starting next. inventory items:', inventory.items)
  //     }
  //   })
  //   console.log('----END OF LOOP---- inventory items:', inventory.items)
  // }
  
  const handleAddXp = (skillType, xp) => {
    console.log('adding xp:', xp)
    addXp(xp, skillType)
  }

  const handleCloseInventory = () => {
    setActiveScreen('Home') // or to a variable 'lastActiveScreen' to implement stack navigation-type functionality
  }
        
  const hideDialogueBox = () => setDialogueVisible(false)

  return (
    <StyledApp className="app-container noselect">
      <PageHeader playerName={player.name} />

      {activeScreen === 'Inventory' && (
        <Inventory
          handleSellItem={handleSellItem}
          handleSellAll={handleSellAll}
          handleDeleteItem={handleDeleteItem}
          handleCloseInventory={handleCloseInventory}
        />
      )}

      <main style={{backgroundImage:"url('/res/game-background.jpeg')"}}>
        {/* Top Stats Bar */}
        <section className="top-stats-bar">
          {/* Left Side */}
          <InventoryButton
            numberOfItems={inventory.items.length}
            maxItems={inventory.size}
            handleClick={handleInventoryClick}
          />
          {/* Right Side */}
          <StatusBar
            goldNumber={player.gold}
            fishingSkill={skills.fishingXp}
            woodcuttingSkill={skills.woodcuttingXp}
            miningSkill={skills.miningXp}
          />
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

const mapStateToProps = (state) => ({
  player: state.player,
  inventory: state.inventory,
  skills: state.skills
})

const mapDispatchToProps = {
  addGold, removeGold,
  addXp,
  addInventoryItem, removeInventoryItem,
  incrementInventoryItem, decrementInventoryItem,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
