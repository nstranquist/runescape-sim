import styled from 'styled-components'


export const StyledDialogueItem = styled.p`
  &.dialogue-item {
    margin-top: 5px;
    margin-bottom: 5px;

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
  padding: 20px;
  background: rgba(0,0,0,.75);
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  margin-right: 4%;
  line-height: 1.25;
  // font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 20px;

  .dialogue-header {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255,255,255,.6);

    .dialogue-left-header,
    .dialogue-right-header {
      display: flex;
      align-items: center;
    }

    .dialogue-tab {
      padding: 10px;
      background: #fff;
      opacity: .66;
      color: #000;
      margin-right: 4px;
      margin-left: 4px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      min-width: 33px;
      text-align: center;
      cursor: pointer;

      &.active-tab {
        opacity: 1;
      }
    }
  }

  .dialogue-box-body {
    border: 1px solid rgba(255,255,255,.6);
    padding: 12px;
    flex: 1;
    min-height: calc(33vh - 70px - 46px);
    max-height: calc(33vh - 70px - 46px);
    overflow-y: auto;
  }

  @media (min-width: 1200px) {
    width: initial;
    margin-left: 8%;
    margin-right: 8%;
  }
`