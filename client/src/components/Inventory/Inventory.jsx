import React from 'react'
import { connect } from 'react-redux'
import { InventoryButtonBar, InventoryItem, EmptyInventoryItem } from './index'
import { StyledInventory } from './inventory.style'


export const InventoryUI = ({
  inventory,
  handleSellItem,
  handleSellAll,
  handleDeleteItem,
  handleCloseInventory,
}) => {

  const renderInventoryItems = () => {
    let resultItems = []
    console.log('inventory size is:', inventory.size)
    for(let count=0; count<inventory.size; count++) {
      // create the inventory slot
      if(inventory.items[count]) {
        // console.log('inventory at position', count, 'is:', inventory.items[count])
        resultItems.push(
          <InventoryItem
            key={count}
            item={inventory.items[count]}
            handleSellItem={handleSellItem}
            handleDeleteItem={handleDeleteItem}
          />
        )
      }
      else {
        resultItems.push(<EmptyInventoryItem key={count} />)
      }
    }

    return resultItems
  }

  return (
    <StyledInventory className="inventory-container">

      {/* Inventory Header */}
      <header className="inventory-header">
        <div className="top-header">
          <h1 className="top-header-h1">Your Inventory</h1>
          <div className="close-inventory" onClick={handleCloseInventory}>Close X</div>
        </div>
        <h5>size: {inventory.size}</h5>
      </header>

      {/* Inventory Items */}
      <div className="inventory-items-container">
        <div className="inventory-items-inner">
          {renderInventoryItems()}
        </div>
      </div>

      {/* Inventory Button Bar */}
      <InventoryButtonBar
        handleSellAll={handleSellAll}
      />
    </StyledInventory>
  )
}

const mapStateToProps = (state) => ({
  inventory: state.inventory
})

export const Inventory = connect(
  mapStateToProps,
)(InventoryUI)