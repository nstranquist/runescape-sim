import React from 'react'
import styled from 'styled-components'

const StyledSkillText = styled.div`
  font-size: 18px;
  line-height: 1.25;

  .skill-text-img {
    height: 28px;
    width: 28px;
  }
`

export const SkillText = ({
  type,
  level=0
}) => {

  const getSourceFromType = () => {
    switch(type) {
      case 'fishing':
        return "/res/fish/salmon.svg"
      case 'woodcutting':
        return "/res/trees/holy-oak.svg"
      case 'mining':
        return "/res/rocks/stone-pile.svg"
    }
  }

  return (
    <StyledSkillText>
      <img src={getSourceFromType()} alt="a skill type" className="skill-text-img" />
      <p>{level}</p>
    </StyledSkillText>
  )
}
