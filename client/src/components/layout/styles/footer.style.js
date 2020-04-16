import styled from 'styled-components'

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 1.25;
  padding: 10px 0;
  // background: rgba(0,0,0,.75);
  // background: transparent;
  background: rgba(0,0,0,.24);
  color: #fff;
  z-index: 999;

  .footer-text {
    line-height: 1.25;
    font-size: 16px;
    // opacity: .75;

    margin-bottom: 0;
    margin-top: 0;
  }
`