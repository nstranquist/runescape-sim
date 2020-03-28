import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    outline: none;
  }
`

const StyledHeader = styled.header`
  .header-player-name {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .header-brand {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
`

export const PageHeader = ({
  playerName
}) => {
  return (
    <StyledHeader className="page-header">
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
    </StyledHeader>
  )
}
