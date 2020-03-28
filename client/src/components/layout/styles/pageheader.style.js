import styled from 'styled-components'

export const StyledPageHeader = styled.header`
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

  .header-left .header-brand {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 28px;
    color: #fff;
    cursor: pointer;
  }

  .header-right .header-player-name {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
