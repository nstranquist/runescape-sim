import React from 'react'
import { StyledActionButtons } from './actionButtons.style'


export const ActionButtons = ({
  handleFish,
  handleChop,
  handleMine
}) => {


  return (
    <StyledActionButtons className="action-buttons-container">
      <button className="action-btn fish-action-btn" onClick={handleFish}>
        <img src="/res/fish/fishing.svg" alt="fishing action" className="action-btn-img" />
      </button>
      <button className="action-btn chop-action-btn" onClick={handleChop}>
        <img src="/res/trees/axe-in-log.svg" alt="woodcutting action" className="action-btn-img" />
      </button>
      <button className="action-btn mine-action-btn" onClick={handleMine}>
        <img src="/res/rocks/miner.svg" alt="mining action" className="action-btn-img" />
      </button>
    </StyledActionButtons>
  )
}
