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

  const [dialogueText, setDialogueText] = useState("")
  const [activeTab, setActiveTab] = useState("All")

  // scroll to bottom
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    bottomBoxRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const handleDialogueTabChange = (tabName) => {
    console.log('tab changed to:', tabName)
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
        return messages.filter(message => message.type === 'Game')
      case 'Social':
        return messages.filter(message => message.type === 'Social')
      case 'Help':
        return helpTextData
      default:
        return messages;
    }
  }

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
      handleSendUserMessage(dialogueText)
      resetDialogue()
    }
  }
  
  const resetDialogue = () => setDialogueText("")

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
        dialogueText={dialogueText}
        handleDialogueChange={handleDialogueChange}
        handleDialogueSubmit={handleDialogueSubmit}
      />
    </StyledDialogueBox>
  )
}
