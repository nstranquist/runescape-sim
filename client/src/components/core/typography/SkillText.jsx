import React from 'react'
import styled from 'styled-components'

const StyledSkillText = styled.div`
  font-size: 18px;
  line-height: 1.25;
  display: flex;
  align-items: center;
  margin-left: 6px;
  margin-right: 6px;

  // background: rgba(0,0,0,.45);
  // border: 1px dashed black;

  .skill-text-img {
    height: 28px;
    width: 28px;
    padding-left: 4px;
  }
  .skill-text {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 5px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-right: 4px;
  }
`

export const SkillText = ({
  type,
  text=0
}) => {

  const getSourceFromType = () => {
    switch(type) {
      case 'fishing':
        return "/res/fish/salmon.svg"
      case 'woodcutting':
        return "/res/trees/holy-oak.svg"
      case 'mining':
        return "/res/rocks/stone-pile.svg"
      default:
        break;
    }
  }

  return (
    <StyledSkillText>
      <img src={getSourceFromType()} alt="a skill type" className="skill-text-img" />
      <p className="skill-text">{text}</p>
    </StyledSkillText>
  )
}
