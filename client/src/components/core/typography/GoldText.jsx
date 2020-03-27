import React from 'react'
import styled from 'styled-components'

const StyledGoldText = styled.div`
  font-size: 18px;
  line-height: 1.25;

  .gold-icon {
    width: 28px;
    height: 28px;
    float: left;
  }

  .gold-text {
    // font-size: 18px;
    // line-height: 1.25;
    // padding-top: 12px;
    // font-size: 18px;
    margin-top: 0; margin-bottom: 0px;
    padding-top: 6px; padding-bottom: 6px;
  }
`

export const GoldText = ({
  goldNumber=0
}) => {
  return (
    <StyledGoldText className="gold-text-container">
      <p className="gold-text">
        <img src="/res/coins.svg" alt="Gold" className="gold-icon" />
        {goldNumber}
      </p>
    </StyledGoldText>
  )
}
