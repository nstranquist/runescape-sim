import React from 'react'
import { StyledLink } from '../../styles/link.style'
import { StyledPageHeader } from './styles/pageheader.style'


export const PageHeader = ({
  playerName
}) => {
  return (
    <StyledPageHeader className="page-header">
      {/* Left Side */}
      <div className="header-left">
        <StyledLink to="/">
          <h1 className="header-brand">Runescape Sim</h1>
        </StyledLink>
      </div>
      {/* Right Side */}
      <div className="header-right">
        <StyledLink to="/profile">
          <h3 className="header-player-name">{playerName}</h3>
        </StyledLink>
      </div>
    </StyledPageHeader>
  )
}
