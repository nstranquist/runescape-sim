import React from 'react'
import styled from 'styled-components'

const StyledButtonBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 8vh;

  // padding-left: 15%;
  // padding-right: 15%;

  .button-bar-btn {
    padding: 12px 16px;
    outline: 0;
    border: 0;
    background: silver;
    color: #000;
    font-size: 18px;
    line-height: 1.25;
    cursor: pointer;
    opacity: .75;

    &:hover {
      opacity: 1;
    }
  }
`

export const InventoryButtonBar = ({
  handleSellAll,
  handleNavigateScreen,
}) => {
  return (
    <StyledButtonBar className="inventory-button-bar">
      <div className="button-bar-btn" onClick={() => handleNavigateScreen("Marketplace")}>
        Marketplace
      </div>
      <div className="button-bar-btn" onClick={handleSellAll}>
        Sell All
      </div>
      {/* <div className="button-bar-btn">
        Filter By:
      </div> */}
    </StyledButtonBar>
  )
}
