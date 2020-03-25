import React from 'react'
import styled from 'styled-components'
import { formatMessageTimestamp } from '../../utils/timestamp.utils'


const StyledDialogueItem = styled.p`
  &.dialogue-item {
    margin-top: 5px;
    margin-bottom: 5px;

    .message-timestamp {
      float: left;
      display: inline-block;
      margin-right: 8px;
      opacity: .8;
    }
  }
`

export const DialogueMessage = ({
  message
}) => {
  return (
    <StyledDialogueItem className="dialogue-item">
      {message.timestamp && (
        <span className="message-timestamp">{formatMessageTimestamp(message.timestamp)}</span>
      )}
      <span className="message-title">{message.title}</span>
    </StyledDialogueItem>
  )
}
