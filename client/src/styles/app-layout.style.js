import styled from 'styled-components'


export const StyledApp = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow-y: hidden;
  line-height: 1.25;

  header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    line-height: 1.25;
    height: 55px;
    background: rgba(0,0,0,.75);

    .header-left {
      .header-brand {
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 500;
        font-size: 28px;
        color: #fff;
        cursor: pointer;
      }
    }
    .header-right {
      color: #fff;
      cursor: pointer;

      &:hover {
        text-decoration:underline;
      }
    }
  }

  main {
    position: absolute;
    top: 55px;
    bottom: 40px;
    left: 0;
    right: 0;
    // background-color: rgba(255,0,0,.7);
    background-repeat: no-repeat;
    background-position: right top;
    background-size: cover;

    .game-container {
      padding: 16px 32px;

      .top-stats-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .action-buttons {
        margin-top: 8%;
      }
    }
  }

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 1.25;
    padding: 10px 0;
    background: rgba(0,0,0,.75);
    color: #fff;

    .footer-text {
      line-height: 1.25;
      font-size: 16px;
      opacity: .75;
      margin-bottom: 0;
      margin-top: 0;
    }
  }
`