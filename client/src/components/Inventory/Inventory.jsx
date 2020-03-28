import React from 'react'
import { connect } from 'react-redux'
// components
import { InventoryButtonBar, InventoryItem, EmptyInventoryItem } from './index'
import { StyledInventory } from './inventory.style'
// redux
import { selectSizeCost } from '../../store/selectors'



const Inventory = ({
  inventory,
  sizeCost,
  handleSellItem,
  handleSellAll,
  handleDeleteItem,
  handleCloseInventory,
  handleIncreaseInventorySize,
  handleNavigateScreen,
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
    console.log('calling increase size')
    // increase inventory size
    handleIncreaseInventorySize(sizeCost)

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
          <span className="add-size-icon" onClick={handleAddSize}>
            +</span>
          <span className="add-size-cost">
            {sizeCost}
          </span>
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
        handleNavigateScreen={handleNavigateScreen}
      />
    </StyledInventory>
  )
}

const mapStateToProps = (state) => ({
  inventory: state.inventory,
  sizeCost: selectSizeCost(state)
})

export const ConnectedInventory = connect(
  mapStateToProps,
  {  }
)(Inventory)