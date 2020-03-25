import React from 'react'

export const DialogueHeader = ({
  activeTab,
  handleDialogueTabChange
}) => {
  return (
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
  )
}
