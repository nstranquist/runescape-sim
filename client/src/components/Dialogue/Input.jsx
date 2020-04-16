import React, { useState } from 'react'
// import { SendButton } from '../core/buttons/SendButton'
import styled from 'styled-components'

const StyledDialogueInput = styled.div`
  background: rgba(0,0,0,.75);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left: 1px solid rgba(255,255,255,.33);
  border-right: 1px solid rgba(255,255,255,.33);
  border-bottom: 1px solid rgba(255,255,255,.33);

  .dialogue-form {
    // line-height: 32px;
    height: 32px;
    display: flex;
    align-items: center;

    .enter-message-label {
      margin-right: 5px;
      margin-left: 5px;
      font-size: 14px;
    }

    .dialogue-input {
      flex: 1;
      display: inline-block;
      height: 14px;
      max-height: 32px;
      background-color: #ccc;
      outline: 0;
      border: 0;
      padding-left: 3px;
      padding-right: 3px;
      padding-top: 6px;
      padding-bottom: 6px;
      margin: 2px 1px;
      font-size: 13px;
      line-height: 14px;

      &:focus {
        outline: thin solid brown;
        background-color: #fff;
      }
    }
    .dialogue-send-btn {
      display: inline-block;
      border: 0;
      outline: 0;
      cursor: pointer;
      max-height: 28px;
      font-size: 14px;
      line-height: 14px;
      margin: 2px 1px;
      padding: 6px 12px;
      border-radius: 3px;
      background: rgba(165, 42, 42, .85); // brown
      // background-color: #CCCCCC;
      color: #fff;
      // color: #000;

      &:hover {
        transition: .1s ease;
        // background-color: #fff;
        background: brown;
        // background-color: #fff;
      }
    }
  }
`

export const DialogueInput = ({
  dialogueSubmit
}) => {
  const [dialogueText, setDialogueText] = useState("")

  const handleDialogueChange = (e) => {
    setDialogueText(e.target.value)
  }

  const handleDialogueSubmit = (e) => {
    e.preventDefault()

    // error-checking
    if(dialogueText.length < 1)
      console.log('must have text')
    else {
      // submit form
      dialogueSubmit(dialogueText)
      resetDialogue()
    }
  }
  
  const resetDialogue = () => setDialogueText("")

  return (
    <StyledDialogueInput className="dialogue-compose-message">
      <form className="dialogue-form" onSubmit={handleDialogueSubmit}>
        <label className="enter-message-label">(chat):</label>
        <input
          autoFocus
          type="text"
          className="dialogue-input"
          name="dialogueText"
          value={dialogueText}
          onChange={handleDialogueChange}
        />
        <button className="dialogue-send-btn" type="submit">
          Send</button>
      </form>
    </StyledDialogueInput>
  )
}
