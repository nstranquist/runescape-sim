import React, { useState } from 'react'
import styled from 'styled-components'
import { ProgressBar } from './ProgressBar'
// import { StyledActionButtons } from './actionButtons.style'
export const StyledActionButtons = styled.div`
  width: 92%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 4%;
  margin-right: 4%;

  .action-btn {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4%;
    margin-right: 4%;
    padding: 3%;
    max-height: 20vh;
    max-width: 30vh;
    border: none;
    outline: none;
    border: 1px solid rgba(0,0,0,.2);
    cursor: pointer;
    background-color: rgb(232,232,231);
    font-size: 36px;
    position: relative;

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    &:focus,
    &:active {
      outline: none !important;
      -mox-outline-style: none;
    }

    .action-btn-img {
      width: 12vh;
      height: 12vh;
    }
  }

  .progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: #222;
    opacity: .9;
    color: #fff;
    text-align: center;

    &.fish {
      background: blue;
    }
    &.wood {
      background: brown;
    }
    &.mine {
      background: rgb(0,0,0);
    }
  }

  @media (min-width: 1200px) {
    width: initial;
    padding-left: 5%;
    padding-right: 5%;
  }
`

export const ActionButtons = ({
  handleFish,
  handleChop,
  handleMine,
  createNewMessage
}) => {
  const [skillActive, setSkillActive] = useState(null)
  const [percentage, setPercentage] = useState(0)
  
  let startTime = null;

  const handleEndAnimation = () => {
    startTime = null;
    setPercentage(0)
    setSkillActive(null)
  }

  const handleSkillClick = (skillType, callback, duration=1000) => {
    if(skillActive === null) {
      createNewMessage(`You begin ${skillType}...`)
      setSkillActive(skillType)
      requestAnimationFrame((timestamp) => {
        animateProgressBar(timestamp, duration, callback)
      })
    }
    else
      createNewMessage(`You are already ${skillActive}.`, "Error")
  }

  const animateProgressBar = (timestamp, duration, callback) => {
    console.log('time in animframe:', timestamp)

    if(timestamp === undefined)
      timestamp = Date.now()

    if(!startTime)
      startTime = timestamp;

    let progress = timestamp - startTime;
    console.log("progress:", progress)
    // progress = Math.min(progress, 1);
    // console.log('progress after formatting:', progress)

    // modify the style
    if(percentage < 100) {
      setPercentage(((progress / 10).toFixed(2)) / (duration/1000))
      console.log('new percentage:', percentage)
    }
    else {
      console.log('animation finished')
    }
    
    if(progress < duration)
      requestAnimationFrame((timestamp) => {
        animateProgressBar(timestamp, duration, callback)
      })
    else {
      handleEndAnimation()
      callback()
    }
  }

  return (
    <StyledActionButtons className="action-buttons-container">
      <button className="action-btn fish-action-btn" onClick={() => handleSkillClick('fishing', handleFish, 750)}>
        {skillActive && skillActive === 'fishing' && (
          <ProgressBar percentage={percentage} skillType="fish" />
        )}
        <img src="/res/fish/fishing.svg" alt="fishing action" className="action-btn-img" />
      </button>
      <button className="action-btn chop-action-btn" onClick={() => handleSkillClick('woodcutting', handleChop, 1000)}>
        {skillActive && skillActive === 'woodcutting' && (
          <ProgressBar percentage={percentage} skillType="wood" />
        )}
        <img src="/res/trees/axe-in-log.svg" alt="woodcutting action" className="action-btn-img" />
      </button>
      <button className="action-btn mine-action-btn" onClick={() => handleSkillClick('mining', handleMine, 1500)}>
        {skillActive && skillActive === 'mining' && (
          <ProgressBar percentage={percentage} skillType="mine" />
        )}
        <img src="/res/rocks/miner.svg" alt="mining action" className="action-btn-img" />
      </button>
    </StyledActionButtons>
  )
}
