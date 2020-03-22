import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`

`

export const PageHeader = () => {
  return (
    <StyledHeader>
      {/* Left Side */}
      <div className="header-left">
        <h1 className="header-brand">Runescape Sim</h1>
      </div>
      {/* Right Side */}
      <div className="header-right">
        <h3 className="header-player-name">DarthBitcoin</h3>
      </div>
    </StyledHeader>
  )
}
