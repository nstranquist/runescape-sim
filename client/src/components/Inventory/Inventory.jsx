import React from 'react'
import styled from 'styled-components'

const StyledInventory = styled.div`
  position: relative;

  .inventory-header {
    .top-header {
      h1.top-header-h1 {
        margin-top: 0;
        margin-bottom: 12px;
        padding-top: 12px;
        line-height: 1.25;
        cursor: pointer;
      }
      .close-inventory {
        position: absolute;
        top: 0;
        right: 0;
        padding: 12px;
        font-size: 18px;
        line-height: 1.25;
        background: rgba(0,0,0,.4);
        border: 1px solid rgba(0,0,0,.18);
        cursor: pointer;
    
        &:hover {
          background: rgba(0,0,0,.66);
        }
      }
    }

    h5 {
      margin-top: 8px;
      margin-bottom: 16px;
      font-size: 14px;
      font-weight:500;
    }
  }

  .inventory-items-box {
    padding: 16px;
  }
`

export const Inventory = ({
  inventory, // size, items
  handleSellItem,
  handleDeleteItem,
  handleCloseInventory,
}) => {
  return (
    <StyledInventory className="inventory-container">
      <header className="inventory-header">
        <div className="top-header">
          <h1 className="top-header-h1">Your Inventory</h1>
          <div className="close-inventory" onClick={handleCloseInventory}>Close X</div>
        </div>
        <h5>size: {inventory.size}</h5>
      </header>
      <div className="inventory-items-box">
        {inventory.items.length > 0 && inventory.items.map((item, index) => (
          <div className="inventory-item" key={index}>
            <p className="item-name">{item.name}</p>
            <div className="item-actions">
              {/* TODO: use icons */}
              <button className="sell-item-btn"
                onClick={() => handleSellItem(item)}>Sell</button>
              <button className="trash-item-btn"
                onClick={() => handleDeleteItem(item.id)}>Trash</button>
            </div>
          </div>
        ))}
      </div>
    </StyledInventory>
  )
}
