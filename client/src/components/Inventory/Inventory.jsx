import React from 'react'
import { connect } from 'react-redux'
// components
import { InventoryButtonBar, InventoryItem, EmptyInventoryItem } from './index'
import { StyledInventory } from './inventory.style'
// redux
import { increaseInventorySize } from '../../store/inventory'


export const InventoryUI = ({
  inventory,
  handleSellItem,
  handleSellAll,
  handleDeleteItem,
  handleCloseInventory,
  handleIncreaseInventorySize,
}) => {

  const renderInventoryItems = () => {
    let resultItems = []
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

  const handleAddSize = () => {
    // increase inventory size
    handleIncreaseInventorySize()

  }

  return (
    <StyledInventory className="inventory-container">

      {/* Inventory Header */}
      <header className="inventory-header">
        <div className="top-header">
          <h1 className="top-header-h1">Your Inventory</h1>
          <div className="close-inventory" onClick={handleCloseInventory}>Close X</div>
        </div>
        <h5>
          size: {inventory.size}
          <span style={{display:'inline-block',padding:5,lineHeight:1,fontSize:"16px",marginLeft:4,background:"rgb(200,200,200)",color:"#000",cursor:'pointer',}}
            onClick={handleAddSize}>+</span>
        </h5>
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
  {  }
)(InventoryUI)