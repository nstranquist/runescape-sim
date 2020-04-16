import styled from 'styled-components'

export const StyledGame = styled.main`
  position: absolute;
  top: 55px;
  left: 0;
  right: 0;
  bottom: 0; // footer is 40px;
  z-index: 1;

  // padding: 16px 32px;

  background-image: url('/res/game-background.jpeg');
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
  background-color: rgba(0,0,0,.2);
  // opacity: .95;
  filter: alpha(opacity=20);

  overflow-y: auto;
  overflow-x: hidden;

  .game-inner {
    padding-left: 5%;
    padding-right: 5%;
  }

  .top-stats-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3vh;
    // margin-left: 16%;
    // margin-right: 16%;
  }

  .action-buttons {
    margin-top: 6vh;
  }

  .dialogue-box {
    margin-top: 8vh;
    margin-left: 5%;
    margin-right: 5%;
  }

  @media(min-width: 1200px) {
    .top-stats-bar {
      margin-left: 8%;
      margin-right: 8%;
    }
  }
`