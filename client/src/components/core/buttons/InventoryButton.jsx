import React from 'react'
import styled from 'styled-components'

const StyledInventoryButton = styled.div`
  background: rgba(255,0,0,.75);
  padding: 16px 26px;
  color: white;
  outline: 1px solid rgba(0,0,0,.3);
  cursor: pointer;
  margin-top: 2px;

  .inventory-btn-inner {
    font-size: 20px;
  }
`

export const InventoryButton = ({
  numberOfItems,
  maxItems,
  handleNavigateScreen
}) => {
  return (
    <StyledInventoryButton className="inventory-btn-container"
      onClick={() => handleNavigateScreen("Inventory")}>
      <div className="inventory-btn-inner">
        Inventory
        <span> ({numberOfItems < maxItems ? numberOfItems : "MAX"}) </span>
      </div>
    </StyledInventoryButton>
  )
}
