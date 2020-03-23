import React, { useState } from 'react'
import styled from 'styled-components'

const StyledDialogueBox = styled.div`
  padding: 20px;
  background: rgba(0,0,0,.75);
  color: #fff;
  min-height: 33vh;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  margin-right: 4%;

  .dialogue-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255,255,255,.6);

    .dialogue-left-header,
    .dialogue-right-header {
      display: flex;
      align-items: center;
    }

    .dialogue-tab {
      padding: 10px;
      background: #fff;
      opacity: .8;
      color: #000;
      margin-right: 4px;
      margin-left: 4px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      min-width: 33px;
      text-align: center;
      cursor: pointer;
    }
  }

  .dialogue-box-body {
    border: 1px solid rgba(255,255,255,.6);
    padding: 12px;
    flex: 1;

    .dialogue-item {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }

  @media (min-width: 1200px) {
    width: initial;
    margin-left: 8%;
    margin-right: 8%;
  }
`

export const DialogueBox = () => {
  const [dialogueText, setDialogueText] = useState("")

  const handleDialogueChange = (e) => {
    setDialogueText(e.target.value)
  }

  const handleDialogueSubmit = (e) => {
    e.preventDefault()

    // error-checking

    // submit form
    console.log('dialogue submitted with text:', dialogueText)
    
    resetDialogue()
  }
  
  const resetDialogue = () => setDialogueText("")

  return (
    <StyledDialogueBox className="dialogue-box-container">
      {/* Top Section */}
      <header className="dialogue-header">
        <div className="dialogue-left-header">
          <div className="dialogue-tab">Game</div>
          <div className="dialogue-tab">Social</div>
          <div className="dialogue-tab">All</div>
        </div>
        <div className="dialogue-right-header">
          <div className="dialogue-tab bold-text">?</div>
          <div className="dialogue-tab">Exit</div>
        </div>
      </header>
      <div className="dialogue-box-body">
        <p className="dialogue-item">You found a Tuna!</p>
        <p className="dialogue-item">You found a Mackeral!</p>
      </div>
      <div className="dialogue-compose-message">
        <form className="dialogue-form" onSubmit={handleDialogueSubmit}>
          <input
            type="text"
            name="dialogueText"
            onChange={handleDialogueChange}
          />
          <button type="submit" className="dialogue-send-btn">Send</button>
        </form>
      </div>
    </StyledDialogueBox>
  )
}
