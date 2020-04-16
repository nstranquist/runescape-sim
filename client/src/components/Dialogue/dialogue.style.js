import styled from 'styled-components'


export const StyledDialogueItem = styled.p`
  &.dialogue-item {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
    opacity: 1;

    .message-timestamp {
      float: left;
      display: inline-block;
      margin-right: 8px;
      opacity: .8;
    }

    .message-sender {
      color: rgb(255,85,0);
      font-weight: 400;
      margin-right: 4px;
    }
  }
`

export const StyledDialogueBox = styled.div`
  // padding: 20px;
  padding-top: 4px;
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 4px;
  border-radius: 3px;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  margin-right: 4%;
  line-height: 1.25;
  // font-size: 16px;
  margin-bottom: 20px;

  .dialogue-header {
    display: flex;
    justify-content: space-between;
    // border-bottom: 1px solid rgba(255,255,255,.6);

    .dialogue-left-header,
    .dialogue-right-header {
      display: flex;
      align-items: center;
    }

    .dialogue-tab {
      border-top: 1px solid rgba(0,0,0,.5);
      border-left: 1px solid rgba(0,0,0,.5);
      border-right: 1px solid rgba(0,0,0,.5);
      padding: 10px;
      // opacity: .66;
      background: #ccc;
      color: #000;
      margin-right: 2px;
      margin-left: 2px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      min-width: 33px;
      text-align: center;
      cursor: pointer;
      transition: .1s ease;

      &.active-tab {
        opacity: 1;
        background: #fff;
        transition: .1s ease;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .dialogue-box-body {
    letter-spacing: 1px;
    background: rgba(0,0,0,.75);
    border: 1px solid rgba(255,255,255,.33);
    border-bottom: 1px solid rgba(255,255,255,.15);
    padding: 12px;
    flex: 1;
    min-height: calc(33vh - 70px - 46px);
    max-height: calc(33vh - 70px - 46px);
    overflow-y: auto;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  @media (min-width: 1200px) {
    width: initial;
    margin-left: 8%;
    margin-right: 8%;
  }
`