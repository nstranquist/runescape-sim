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
  handleClick
}) => {
  return (
    <StyledInventoryButton className="inventory-btn-container"
      onClick={handleClick}>
      <div className="inventory-btn-inner">
        Inventory
      </div>
    </StyledInventoryButton>
  )
}
