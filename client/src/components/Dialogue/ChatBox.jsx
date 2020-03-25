import React from 'react'
import { DialogueMessage } from './Message'

export const DialogueChatBox = ({
  messages,
  bottomBoxRef,
}) => {
  return (
    <div className="dialogue-box-body">
      {messages.length > 0 && messages.map((message, index) => (
        <DialogueMessage
          key={index}
          message={message}
        />
      ))}
      <div id="dialogue-bottom" ref={bottomBoxRef}></div>
    </div>
  )
}
