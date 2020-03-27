import React from 'react'
import styled from 'styled-components'
import { GoldText, SkillText } from '../core/typography'

const StyledStatusBar = styled.div`
  display: flex;
  padding: 10px 12px;
  background: rgb(51,8,0);
  color: rgba(255,255,255,.8);

  * {
    flex: 1;
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
      <GoldText goldNumber={goldNumber} />
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
    </StyledStatusBar>
  )
}
