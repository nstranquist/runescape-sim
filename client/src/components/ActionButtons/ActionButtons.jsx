import React from 'react'
import styled from 'styled-components'

const StyledActionButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .action-btn {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4%;
    margin-right: 4%;
    padding: 3%;
    border: none;
    outline: none;
    border: 1px solid rgba(0,0,0,.2);
    cursor: pointer;
    background-color: rgb(232,232,231);
    font-size: 36px;

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    &:focus,
    &:active {
      outline: none !important;
      -mox-outline-style: none;
    }

    .action-btn-img {
      width: 12vh;
      height: 12vh;
    }
  }
`

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
