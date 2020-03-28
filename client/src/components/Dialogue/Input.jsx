import React, { useState } from 'react'
// import { SendButton } from '../core/buttons/SendButton'

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
    <div className="dialogue-compose-message">
      <form className="dialogue-form" onSubmit={handleDialogueSubmit}>
        <input
          autoFocus
          type="text"
          name="dialogueText"
          value={dialogueText}
          onChange={handleDialogueChange}
        />
        <button className="dialogue-send-btn" type="submit">
          Send</button>
      </form>
    </div>
  )
}
