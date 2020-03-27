import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
  .header-player-name {
    color: #fff;
    opacity: .82;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const PageHeader = ({
  playerName
}) => {
  return (
    <StyledHeader className="page-header">
      {/* Left Side */}
      <div className="header-left">
        <h1 className="header-brand">Runescape Sim</h1>
      </div>
      {/* Right Side */}
      <div className="header-right">
        <Link to="/profile">
          <h3 className="header-player-name">{playerName}</h3>
        </Link>
      </div>
    </StyledHeader>
  )
}
