import React from 'react'
import { connect } from 'react-redux'
import { StyledSubBar } from './styles/subbar.style'
import { SkillText } from '../core/typography'
import { selectFishingLevel, selectWoodcuttingLevel, selectMiningLevel } from '../../store/selectors'


export const SubBar = ({
  fishingLevel,
  woodcuttingLevel,
  miningLevel
}) => {
  return (
    <StyledSubBar>
      {/* Fishing, Woodcutting, Mining SkillText (Icon & Level) */}
      <div className="skills-container">
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
    </StyledSubBar>
  )
}

const mapStateToProps = (state) => ({
  fishingLevel: selectFishingLevel(state),
  woodcuttingLevel: selectWoodcuttingLevel(state),
  miningLevel: selectMiningLevel(state),
})

export const ConnectedSubBar = connect(
  mapStateToProps,
  {  }
)(SubBar)