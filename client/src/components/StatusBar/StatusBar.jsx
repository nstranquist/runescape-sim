import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
// import components
import { GoldText, SkillText } from '../core/typography'
// redux
import { selectFishingLevel, selectWoodcuttingLevel, selectMiningLevel } from '../../store/selectors'

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
  fishingLevel,
  woodcuttingLevel,
  miningLevel
}) => {
  return (
    <StyledStatusBar>
      <div className="top-row">
        <GoldText goldNumber={goldNumber} />
      </div>
      <div className="bottom-row">
        <SkillText
          type="fishing"
          text={fishingLevel}
        />
        <SkillText
          type="woodcutting"
          text={woodcuttingLevel}
        />
        <SkillText
          type="mining"
          text={miningLevel}
        />
      </div>
    </StyledStatusBar>
  )
}

const mapStateToProps = (state) => ({
  fishingLevel: selectFishingLevel(state),
  woodcuttingLevel: selectWoodcuttingLevel(state),
  miningLevel: selectMiningLevel(state),
})

export const ConnectedStatusBar = connect(
  mapStateToProps,
  {  }
)(StatusBar)