import React from 'react'
// import components
import { StyledStatsBox } from './statsbox.style'
import { GoldText } from '../core/typography'


export const StatsBox = ({
  goldNumber
}) => {
  return (
    <StyledStatsBox>
      <GoldText goldNumber={goldNumber} />
    </StyledStatsBox>
  )
}
