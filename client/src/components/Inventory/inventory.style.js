import styled from 'styled-components'

export const StyledInventory = styled.div`
  position: absolute;
  left: 15vw;
  right: 15vw;
  top: 15vh;
  bottom: 15vh;
  height: 70vh;
  width: 70vw;
  background: rgba(0,0,0,.75);
  color: #fff;
  z-index: 1001;

  .inventory-header {
    text-align: center;

    .top-header {
      // height: 10vh;

      h1.top-header-h1 {
        margin-top: 0;
        margin-bottom: 12px;
        padding-top: 12px;
        line-height: 1.25;
        cursor: pointer;
      }
      .close-inventory {
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
    style={{display:'inline-block', padding: 4, lineHeight:1,fontSize:16,color:"gold"}}
  }
  .inventory-items-inner {
    margin: 0 auto;
    max-width: 710px;
    max-height: calc(70vh - 8vh - 26px - 64px);
    display: grid;
    grid-column-gap: 15px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(6, 100px);
    overflow-y: auto;
  }
`