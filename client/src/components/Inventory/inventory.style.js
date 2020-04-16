import styled from 'styled-components'


export const StyledEmptyItem = styled.div`
  position: relative;
  font-size: 14px;
  width: 100px;
  height: 100px;
  background: rgb(92, 64, 51);
  border-width: 3px;
  border-radius: 5px;
  border-style: dashed;
  border-color: #330019;
`

export const StyledInventory = styled.div`
  position: absolute;
  left: 15vw;
  right: 15vw;
  top: 15vh;
  bottom: 15vh;
  height: 70vh;
  width: 70vw;
  background: rgba(16,16,16,.96);
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
        font-size: 26px;
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
    // style={{display:'inline-block', padding: 4, lineHeight:1,fontSize:16,color:"gold"}}
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
    overflow-x: auto;
  }

  @media (max-width: 1100px) {
    .inventory-items-inner {
      grid-template-columns: repeat(4, 100px);
      max-width: 453px;
    }
  }
  @media (max-width: 700px) {
    left: 10px;
    right: 10px;
    width: calc(100% - 20px);
  }
  @media (max-width: 550px) {
    .inventory-items-inner {
      grid-template-columns: repeat(2, 100px);
      max-width: 240px;
    }
  }
`

export const StyledInventoryItem = styled.div`
  position: relative;
  font-size: 14px;
  width: 100px;
  height: 100px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(255,255,255,.8);
  background-color: rgba(22,22,22,1);

  &.logs {
    border-color: brown;
  }
  &.fish {
    border-color: blue;
  }
  &.ore {
    border-color: gray;
  }

  .item-name {
    padding: 4px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
  }

  .inventory-button {
    position: absolute;
    bottom: 0;
    height: 24px;
    width: 24px;
    line-height: 24px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    border: 1px solid rgba(255,255,255,.75);
    text-align: center;
    font-weight: 500;

    &.sell-item-btn {
      left: 0;
      background: gold;
      color: #000;
    }
    &.trash-item-btn {
      right: 0;
      background: rgba(255,0,0,.75);
      color: #000;
    }
  }

  .item-quantity-text {
    color: #fff;
    position: absolute;
    display: inline-block;
    padding: 6px;
    bottom: 0;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }
`