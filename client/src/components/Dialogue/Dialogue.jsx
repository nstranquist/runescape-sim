import React, { useState, useEffect, createRef } from 'react'
import { DialogueHeader, DialogueChatBox, DialogueInput } from './index'
import { StyledDialogueBox } from './dialogue.style'
import { helpTextData } from '../../data/helpText.data'


export const Dialogue = ({
  messages,
  handleSendUserMessage,
  hideDialogueBox,
}) => {
  const bottomBoxRef = createRef()

  const [activeTab, setActiveTab] = useState("All")

  // scroll to bottom
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    bottomBoxRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const dialogueSubmit = (dialogueText) => {
    handleSendUserMessage(dialogueText)
  }

  const handleDialogueTabChange = (tabName) => {
    if(tabName==='Exit')
      hideDialogueBox()
    else if(tabName !== activeTab) {
      setActiveTab(tabName)
    }
  }

  const renderDialogue = () => {
    switch(activeTab) {
      case 'All':
        return messages;
      case 'Game':
        return messages.filter(message => message.type === 'Game' || message.type==="Error")
      case 'Social':
        return messages.filter(message => message.type === 'Social')
      case 'Help':
        return helpTextData
      default:
        return messages;
    }
  }

  return (
    <StyledDialogueBox className="dialogue-box-container">

      <DialogueHeader
        activeTab={activeTab}
        handleDialogueTabChange={handleDialogueTabChange}
      />

      <DialogueChatBox
        messages={renderDialogue()}
        bottomBoxRef={bottomBoxRef}
      />

      <DialogueInput
        dialogueSubmit={dialogueSubmit}
      />
    </StyledDialogueBox>
  )
}
