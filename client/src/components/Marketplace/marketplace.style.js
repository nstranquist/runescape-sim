import styled from 'styled-components'

export const StyledMarketplace = styled.div`
  position: absolute;
  left: 25vw;
  right: 25vw;
  top: 25vh;
  bottom: 25vh;
  height: 50vh;
  width: 50vw;
  background: rgba(22,22,22,.99);
  color: #fff;
  z-index: 1002;

  .marketplace-header {
    text-align: center;

      h1.marketplace-heading {
        margin-top: 0;
        margin-bottom: 12px;
        padding-top: 12px;
        line-height: 1.25;
        cursor: pointer;
        font-size: 24px;
      }
      .close-marketplace {
        position: absolute;
        top: 0;
        right: 0;
        padding: 12px;
        font-size: 18px;
        line-height: 1.25;
        background: rgba(0,0,0,.4);
        border: 1px solid rgba(0,0,0,.18);
        cursor: pointer;
    
        &:hover {
          background: rgba(0,0,0,.66);
        }
      }
    }

    h5 {
      margin-top: 8px;
      margin-bottom: 16px;
      font-size: 14px;
      font-weight:500;
    }
    .add-size-icon,
    .add-size-cost {
      display: inline-block;
      font-size: 16px;
      padding: 5px;
    }
    .add-size-icon {
      margin-left: 8px;
      background: rgb(200,200,200);
      color: #000;
      cursor: pointer;
      line-height: .75;
    }
    .add-size-cost {
      color: gold;
      line-height: 1;
    }
  }
  .marketplace-inner {
    margin: 0 auto;
    margin-top: 5vh;
    padding: 10px 12px;
    max-height: calc(50vh - 8vh - 26px - 64px);
    display: grid;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    grid-template-columns: repeat(3, 120px);
    max-width: calc(360px + 50px + 6px);
    overflow-y: auto;

    .marketplace-slot {
      display: inline-block;
      border: 1px solid brown;
      height: 70px;
      width: 120px;
      text-align: center;

      h6 {
        font-size: 15px;
        height: 30px; // 25% of container
        max-height: 30px;
        line-height: 30px;
        margin: 0;
        padding: 0;
      }
      .slot-buttons-container {
        width: 100%;
        height: 50px;
        max-height: 50px;
        display: flex;
        align-items: baseline;
        justify-content: center;

        .slot-button {
          flex: 1;
          border: 1px solid white;
          height: 30px;
          width: 40px;
          margin: 5px;
          line-height: 30px;
          cursor: pointer;

          &:hover {
            background: rgba(66,66,66,.73);
            opacity: 1;
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    left: 12vw;
    right: 12vw;
    width: 76vw;
  }

  @media (max-width: 700px) {
    left: 8px;
    right: 8px;
    width: calc(100% - 16px);
  }
`