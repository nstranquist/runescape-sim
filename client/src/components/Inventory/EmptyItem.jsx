import React from 'react'
import styled from 'styled-components'

const StyledEmptyItem = styled.div`
  position: relative;
  font-size: 14px;
  width: 100px;
  height: 100px;
  background: rgb(92, 64, 51);
  border-width: 3px;
  border-style: dashed;
  border-color: #330019;
`

export const EmptyInventoryItem = () => {
  return (
    <StyledEmptyItem className="empty-inventory-item">
      
    </StyledEmptyItem>
  )
}
