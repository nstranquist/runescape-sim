import React from 'react'
import { connect } from 'react-redux'
import { StyledProfile } from './styles/profile.style'


export const Profile = ({
  playerName,
  playerGold,
  skills: {
    fishingXp,
    woodcuttingXp,
    miningXp
  },
  inventory: {
    size,
    items
  }
}) => {
  return (
    <main className="profile-page">
      <StyledProfile className="profile-container">
        <header className="profile-header">
          <h1 className="profile-header-text">{playerName}'s Profile</h1>
        </header>
        <div className="profile-inner">
          <div className="profile-item player">
            <div className="profile-player">
              Name: {playerName}
            </div>
            <div className="profile-player">
              Gold: {playerGold}
            </div>
          </div>
          <div className="profile-item skills">
            <div className="profile-skill">
              Fishing Xp: {fishingXp}
            </div>
            <div className="profile-skill">
              Woodcutting Xp: {woodcuttingXp}
            </div>
            <div className="profile-skill">
              Mining Xp: {miningXp}
            </div>
          </div>
          <div className="profile-item inventory">
            <div className="profile-inventory">
              Inventory size: {size}
            </div>
            <div className="profile-inventory">
              Inventory items: {items.length}
            </div>
          </div>
        </div>
      </StyledProfile>
    </main>
  )
}

const mapStateToProps = (state) => ({
  playerName: state.player.name,
  playerGold: state.player.gold,
  skills: state.skills,
  inventory: state.inventory,
})

export default connect(
  mapStateToProps,
  {  }
)(Profile)