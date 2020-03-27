import React from 'react'
import { StyledDialogueItem } from './dialogue.style'
import { formatMessageTimestamp } from '../../utils/timestamp.utils'

export const DialogueMessage = ({
  message
}) => {
  return (
    <StyledDialogueItem className={message.type === 'Error' ? "dialogue-item red-text" : "dialogue-item"}>
      {message.timestamp && (
        <span className="message-timestamp">{formatMessageTimestamp(message.timestamp)}</span>
      )}
      {message.sender && (
        <span className="message-sender">({message.sender})</span>
      )}
      <span className="message-title">{message.title}</span>
    </StyledDialogueItem>
  )
}
