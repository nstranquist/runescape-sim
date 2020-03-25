import React from 'react'
import { SendButton } from '../core/buttons/SendButton'

export const DialogueInput = ({
  dialogueText,
  handleDialogueChange,
  handleDialogueSubmit
}) => {
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
        <SendButton />
      </form>
    </div>
  )
}
