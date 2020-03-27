import React from 'react'
import styled from 'styled-components'

const StyledGoldText = styled.div`
  

  .gold-text {
    align-items: center;
    font-size: 24px;
    line-height: 1.25;
    margin-top: 0;
    margin-bottom: 0;

    .gold-icon {
      float: left;
      width: 33px;
      height: 33px;
      line-height: 1.25;
      margin-right: 2px;
      margin-top: 1px;
    }

    .gold-text-number {
      font-size: 28px;
      line-height: 1.25;
      display: inline-block;
      padding-top: 12px;
      font-size: 18px;
    }
  }
`

export const GoldText = ({
  goldNumber=0
}) => {
  return (
    <StyledGoldText className="gold-text-container">
      <p className="gold-text">
        {/* TODO: replace with icon */}
        <img src="/res/coins.svg" alt="Gold" className="gold-icon" />
        <span className="gold-text-number"> {goldNumber}</span>
      </p>
    </StyledGoldText>
  )
}
