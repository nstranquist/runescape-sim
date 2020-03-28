import React from 'react'
import styled from 'styled-components'

const StyledGoldText = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 2px;
  padding-right: 2px;

  .gold-text {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
    min-width: 100px;
    overflow-x: auto;
    text-align: right;

    .gold-icon {
      width: 28px;
      height: 28px;
      line-height: 28px;
      float: left;
    }
    .gold-text-inner {
      display: inline-block;
      margin-right: 8px;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0;
    }
  }
`

export const GoldText = ({
  goldNumber=0
}) => {
  return (
    <StyledGoldText className="gold-text-container">
      <p className="gold-text">
        <img src="/res/coins.svg" alt="Gold" className="gold-icon" />
        <span className="gold-text-inner">{goldNumber}</span>
      </p>
    </StyledGoldText>
  )
}
