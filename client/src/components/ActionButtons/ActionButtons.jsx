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
        <img src="/res/fish/salmon.svg" alt="a fish" className="action-btn-img" />
      </button>
      <button className="action-btn chop-action-btn" onClick={handleChop}>
        <img src="/res/trees/holy-oak.svg" alt="a tree" className="action-btn-img" />
      </button>
      <button className="action-btn mine-action-btn" onClick={handleMine}>
        <img src="/res/rocks/stone-pile.svg" alt="a rock" className="action-btn-img" />
      </button>
    </StyledActionButtons>
  )
}
