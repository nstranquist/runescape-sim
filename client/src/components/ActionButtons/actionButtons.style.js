import styled from 'styled-components'

export const StyledActionButtons = styled.div`
  width: 92%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 4%;
  margin-right: 4%;

  .action-btn {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4%;
    margin-right: 4%;
    padding: 3%;
    max-height: 20vh;
    max-width: 30vh;
    border: none;
    outline: none;
    border: 1px solid rgba(0,0,0,.2);
    cursor: pointer;
    background-color: rgb(232,232,231);
    font-size: 36px;

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    &:focus,
    &:active {
      outline: none !important;
      -mox-outline-style: none;
    }

    .action-btn-img {
      width: 12vh;
      height: 12vh;
    }
  }

  @media (min-width: 1200px) {
    width: initial;
    padding-left: 5%;
    padding-right: 5%;
  }
`