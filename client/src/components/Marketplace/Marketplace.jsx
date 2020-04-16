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

  const handleSell = (id) => {
    console.log('selling item with id:', id)
  }
  
  const handleBuy = (id="null") => {
    console.log('buying item with id:', id)
  }

  return (
    <StyledMarketplace>
      <header className="marketplace-header">
        <h1 className="marketplace-heading">Marketplace</h1>
        <div className="close-marketplace" onClick={handleCloseMarketplace}>Close X</div>
      </header>
      <div className="marketplace-inner">
        {/* Top Row (3 items) */}
        <div className="marketplace-slot">
          <h6>empty</h6> {/* status text */}
          <div className="slot-buttons-container">
            {/* 2 squares with options */}
            <div className="slot-button" onClick={() => handleSell()}>S</div>
            <div className="slot-button" onClick={() => handleBuy()}>B</div>
          </div>
        </div>
        <div className="marketplace-slot">
          <h6>empty</h6> {/* status text */}
          <div className="slot-buttons-container">
            {/* 2 squares with options */}
            <div className="slot-button" onClick={() => handleSell()}>S</div>
            <div className="slot-button" onClick={() => handleBuy()}>B</div>
          </div>
        </div>
        <div className="marketplace-slot">
          <h6>empty</h6> {/* status text */}
          <div className="slot-buttons-container">
            {/* 2 squares with options */}
            <div className="slot-button" onClick={() => handleSell()}>S</div>
            <div className="slot-button" onClick={() => handleBuy()}>B</div>
          </div>
        </div>


        {/* Bottom Row (3 items) */}
        <div className="marketplace-slot">
          <h6>empty</h6> {/* status text */}
          <div className="slot-buttons-container">
            {/* 2 squares with options */}
            <div className="slot-button" onClick={() => handleSell()}>S</div>
            <div className="slot-button" onClick={() => handleBuy()}>B</div>
          </div>
        </div>
        <div className="marketplace-slot">
          <h6>empty</h6> {/* status text */}
          <div className="slot-buttons-container">
            {/* 2 squares with options */}
            <div className="slot-button" onClick={() => handleSell()}>S</div>
            <div className="slot-button" onClick={() => handleBuy()}>B</div>
          </div>
        </div>
        <div className="marketplace-slot">
          <h6>empty</h6> {/* status text */}
          <div className="slot-buttons-container">
            {/* 2 squares with options */}
            <div className="slot-button" onClick={() => handleSell()}>S</div>
            <div className="slot-button" onClick={() => handleBuy()}>B</div>
          </div>
        </div>
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