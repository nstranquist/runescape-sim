import React from 'react'
import styled from 'styled-components'
import { GoldText, SkillText } from '../core/typography'

const StyledStatusBar = styled.div`
  // padding: 4px;
  text-align: center;
  // background: rgb(51,8,0);
  color: rgba(255,255,255,.8);

  .top-row {
    display: block;
    width: 100%;
    padding: 3px;
    background: rgb(51,8,0);
    margin-bottom: 6px;
    border-radius: 2px;
  }
  
  .bottom-row {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 3px;
    background: rgb(51,8,0);
    border-radius: 2px;
  }

  * {
    flex: 1;
    padding-right: 3px;
    padding-left: 3px;
  }
`

export const StatusBar = ({
  goldNumber,
  fishingXp, // { level: 0, xp: 0 }
  woodcuttingXp,
  miningXp
}) => {
  return (
    <StyledStatusBar>
      <div className="top-row">
        <GoldText goldNumber={goldNumber} />
      </div>
      <div className="bottom-row">
        <SkillText
          type="fishing"
          level={fishingXp}
        />
        <SkillText
          type="woodcutting"
          level={woodcuttingXp}
        />
        <SkillText
          type="mining"
          level={miningXp}
        />
      </div>
    </StyledStatusBar>
  )
}
