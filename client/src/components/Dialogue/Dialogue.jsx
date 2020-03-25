import React, { useState, useEffect, createRef } from 'react'
import styled from 'styled-components'
import { DialogueChatBox, DialogueInput } from './index'
import { helpTextData } from '../../data/helpText.data'

const StyledDialogueBox = styled.div`
  padding: 20px;
  background: rgba(0,0,0,.75);
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  margin-right: 4%;
  line-height: 1.25;
  // font-size: 16px;
  letter-spacing: 1px;

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
      opacity: .66;
      color: #000;
      margin-right: 4px;
      margin-left: 4px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      min-width: 33px;
      text-align: center;
      cursor: pointer;

      &.active-tab {
        opacity: 1;
      }
    }
  }

  .dialogue-box-body {
    border: 1px solid rgba(255,255,255,.6);
    padding: 12px;
    flex: 1;
    min-height: calc(33vh - 70px - 46px);
    max-height: calc(33vh - 70px - 46px);
    overflow-y: auto;

    .dialogue-item {
      margin-top: 5px;
      margin-bottom: 5px;

      .message-timestamp {
        float: left;
        display: inline-block;
        margin-right: 8px;
        opacity: .8;
      }
    }
  }

  @media (min-width: 1200px) {
    width: initial;
    margin-left: 8%;
    margin-right: 8%;
  }
`

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
      {/* Dialogue Messages Header */}
      <header className="dialogue-header">
        <div className="dialogue-left-header">
          <div onClick={() => handleDialogueTabChange('All')} className={activeTab==='All' ? "dialogue-tab active-tab" : "dialogue-tab"}>
            All</div>
          <div onClick={() => handleDialogueTabChange('Game')} className={activeTab==='Game' ? "dialogue-tab active-tab" : "dialogue-tab"}>
            Game</div>
          <div onClick={() => handleDialogueTabChange('Social')} className={activeTab==='Social' ? "dialogue-tab active-tab" : "dialogue-tab"}>
            Social</div>
        </div>
        <div className="dialogue-right-header">
          <div onClick={() => handleDialogueTabChange('Help')} className={activeTab==='Help' ? "dialogue-tab active-tab" : "dialogue-tab"}>
            <span style={{fontWeight:500}}>?</span></div>
          <div onClick={() => handleDialogueTabChange('Exit')} className={activeTab==='Exit' ? "dialogue-tab active-tab" : "dialogue-tab"}>
            Exit</div>
        </div>
      </header>
      {/* Dialogue Messages List */}
      <DialogueChatBox
        messages={renderDialogue()}
        bottomBoxRef={bottomBoxRef}
      />
      {/* <div className="dialogue-box-body">
        {renderDialogue().map((message, index) => (
          <p className="dialogue-item" key={index}>{message.title}</p>
          ))}
        <div id="dialogue-bottom" ref={bottomBoxRef}></div>
      </div> */}
      {/* Dialogue Messages Compose */}
      <DialogueInput
        dialogueText={dialogueText}
        handleDialogueChange={handleDialogueChange}
        handleDialogueSubmit={handleDialogueSubmit}
      />
      {/* <div className="dialogue-compose-message">
        <form className="dialogue-form" onSubmit={handleDialogueSubmit}>
          <input
            autoFocus
            type="text"
            name="dialogueText"
            value={dialogueText}
            onChange={handleDialogueChange}
            />
          <button type="submit" className="dialogue-send-btn">Send</button>
        </form>
      </div> */}
    </StyledDialogueBox>
  )
}
