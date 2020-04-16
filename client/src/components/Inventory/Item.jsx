import React from 'react'
import { StyledInventoryItem } from './inventory.style'


export const InventoryItem = ({
  item,
  handleSellItem,
  handleDeleteItem
}) => {
  return (
    <StyledInventoryItem className={`inventory-item ${item.type}`}>
      <p className="item-name">{item.name}</p>
      <div className="item-actions">
        {/* TODO: use icons */}
        {item.sellValue && (
          <div className="inventory-button sell-item-btn"
            onClick={() => handleSellItem(item)}>S</div>
        )}
        {item.stackable && (
          <div className="item-quantity-text">
            {item.quantity}
          </div>
        )}
        <div className="inventory-button trash-item-btn"
          onClick={() => handleDeleteItem(item.id, item.name)}>D</div>
      </div>
    </StyledInventoryItem>
  )
}
