import React from 'react'
import styled from 'styled-components'

const StyledInventoryItem = styled.div`
  position: relative;
  font-size: 14px;
  width: 100px;
  height: 100px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(255,255,255,.8);
  background-color: rgba(22,22,22,1);

  &.logs {
    border-color: brown;
  }
  &.fish {
    border-color: blue;
  }
  &.ore {
    border-color: gray;
  }

  .item-name {
    padding: 4px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
  }

  .inventory-button {
    position: absolute;
    bottom: 0;
    height: 24px;
    width: 24px;
    line-height: 24px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    border: 1px solid rgba(255,255,255,.75);
    text-align: center;
    font-weight: 500;

    &.sell-item-btn {
      left: 0;
      background: gold;
      color: #000;
    }
    &.trash-item-btn {
      right: 0;
      background: rgba(255,0,0,.75);
      color: #000;
    }
  }

  .item-quantity-text {
    color: #fff;
    position: absolute;
    display: inline-block;
    padding: 6px;
    bottom: 0;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }
`

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
