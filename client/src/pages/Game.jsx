import React, { useState } from 'react';
import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
// import components
import { ActionButtons } from '../components/ActionButtons'
import { Dialogue } from '../components/Dialogue'
import { Inventory } from '../components/Inventory'
import { InventoryButton } from '../components/core/buttons'
import { StatsBox } from '../components/StatsBox';
import { Marketplace } from '../components/Marketplace'
import { SubBar } from '../components/layout';
import { StyledGame } from './styles/game.style'
// import utils
import { getRandomFish } from '../data/fish.data'
import { getRandomWood } from '../data/wood.data'
import { getRandomOre } from '../data/ores.data'
import { newFormattedTimestamp } from '../utils/timestamp.utils'
// import redux
import {
  addInventoryItem, removeInventoryItem, decrementInventoryItem, incrementInventoryItem, increaseInventorySize,
} from '../store/inventory'
import { addXp } from '../store/skills'
import { addGold, removeGold } from '../store/player'
import { addMessage, removeMessage } from '../store/messages'


// TODO: color-code the timestamp (green or maroon), name (blue?), message text (white)
export const Game = ({
  player,
  inventory,
  messages,
  // functions
  addGold, removeGold,
  addXp,
  addInventoryItem, removeInventoryItem,
  incrementInventoryItem,
  decrementInventoryItem,
  increaseInventorySize,
  addMessage, removeMessage
}) => {
  const [dialogueVisible, setDialogueVisible] = useState(true)
  const [activeScreen, setActiveScreen] = useState('Home') // 'Inventory', 'Exchange', etc. (react-router / lazy load??)


  const handleNavigateScreen = (screenName) => {
    setActiveScreen(screenName)
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
    // let message = `You swing your pick at the rock and find ${ore.name} ore!`
    let message = `You found ${ore.name} ore!`
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
    addMessage(newMessage)
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
    inventory.items.forEach(item => {
      if(item.sellValue) {
        let count = item.quantity;
        while(item.quantity > 0) {
          decrementInventoryItem(item.name)
          addGold(item.sellValue)
          count--;
        }
      }
    })
  }
  
  const handleAddXp = (skillType, xp) => {
    addXp(xp, skillType)
  }

  const handleCloseModal = () => {
    setActiveScreen('Home') // or to a variable 'lastActiveScreen' to implement stack navigation-type functionality
  }
  
  const hideDialogueBox = () => setDialogueVisible(false)

  const handleIncreaseInventorySize = (cost) => {
    // if player can afford it, subtract cost (or check that in component)
    if((player.gold - cost) > 0) {
      removeGold(cost)    
      // after success, increase the size
      increaseInventorySize()
    }
  }
        

  return (
    <>
      {/* Inventory "Modal" type functionality */}
      {activeScreen === 'Inventory' && (
        <Inventory
          handleSellItem={handleSellItem}
          handleSellAll={handleSellAll}
          handleDeleteItem={handleDeleteItem}
          handleCloseInventory={handleCloseModal}
          handleIncreaseInventorySize={handleIncreaseInventorySize}
          handleNavigateScreen={handleNavigateScreen}
        />
      )}

      {activeScreen === 'Marketplace' && (
        <Marketplace
          handleCloseMarketplace={handleCloseModal}
          handleNavigateScreen={handleNavigateScreen}
        />
      )}

      <StyledGame>

        {/* SubBar to hold stats, other useful info */}
        <SubBar />
        
        <div className="game-inner">
          {/* Top Stats Bar */}
          <section className="top-stats-bar">
            {/* Left Side */}
            <InventoryButton
              numberOfItems={inventory.items.length}
              maxItems={inventory.size}
              handleNavigateScreen={handleNavigateScreen}
            />
            {/* Right Side */}
            <StatsBox goldNumber={player.gold} />
          </section>

          {/* Action Buttons */}
          <section className="action-buttons">
            <ActionButtons
              handleFish={onHandleFish}
              handleChop={onHandleChop}
              handleMine={onHandleMine}
              createNewMessage={createNewMessage}
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
              <button className="show-dialogue-btn" onClick={() => setDialogueVisible(true)}
                style={{textAlign:'center', margin:"0 auto", display:'block'}}>
                Show Dialogue</button>
            )}
          </section>
        </div>
      </StyledGame>
    </>
  );
}

const mapStateToProps = (state) => ({
  player: state.player,
  inventory: state.inventory,
  messages: state.messages.messages
})

const mapDispatchToProps = {
  addGold, removeGold,
  addXp,
  addInventoryItem, removeInventoryItem,
  incrementInventoryItem, decrementInventoryItem,
  increaseInventorySize,
  addMessage, removeMessage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
