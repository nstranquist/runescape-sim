import styled from 'styled-components'

export const StyledMarketplace = styled.div`
  position: absolute;
  left: 10vw;
  right: 10vw;
  top: 25vh;
  bottom: 25vh;
  height: 50vh;
  width: 80vw;
  background: rgba(80,72,90,1);
  // background: rgba(101,67,33,.88);
  // background: rgba(84,61,55,.88);
  // background: rgba(106,84,62,.88);
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
    max-width: 710px;
    // max-height: calc(50vh - 8vh - 26px - 64px);
    // display: grid;
    // grid-column-gap: 15px;
    // grid-row-gap: 20px;
    // grid-template-columns: repeat(6, 100px);
    // overflow-y: auto;
  }
`