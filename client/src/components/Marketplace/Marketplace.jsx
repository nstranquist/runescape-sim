import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyledMarketplace } from './marketplace.style'
import { MarketplaceButtonBar } from './ButtonBar'

const initialItemFilters = [
  "Weapons",
  "Resources",
  "Food"
]

export const Marketplace = ({
  handleCloseMarketplace,
  handleNavigateScreen,
}) => {
  const [searchText, setSearchText] = useState("")
  const [itemFilters, setItemFilters] = useState(initialItemFilters)

  const handleSearch = (e) => {
    setSearchText(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // search our inventory
    console.log('you wanted to search:', searchText)
    resetForm()
  }

  const resetForm = () => setSearchText("")

  const handleClearAll = () => {
    resetForm()
    setItemFilters([])
  }

  return (
    <StyledMarketplace>
      <header className="marketplace-header">
        <h1 className="marketplace-heading">Marketplace</h1>
        <div className="close-marketplace" onClick={handleCloseMarketplace}>Close X</div>
      </header>
      <div className="marketplace-inner">
        marketplace inner
      </div>
      <MarketplaceButtonBar
        handleNavigateScreen={handleNavigateScreen}
        handleClearAll={handleClearAll}
      />
    </StyledMarketplace>
  )
}

const mapStateToProps = (state) => ({
  
})

export const ConnectedMarketplace = connect(
  mapStateToProps,
  {  }
)(Marketplace)