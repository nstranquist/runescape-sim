import styled from 'styled-components'

export const StyledProfile = styled.div`
  position: absolute;
  top: 55px;
  bottom: 40px;
  left: 0;
  right: 0;

  max-width: 75%;
  margin: 0 auto;
  text-align: center;
  overflow-y: auto;

  .profile-header {
    margin-bottom: 2%;

    h1 {
      text-decoration: underline;
    }
  }

  .profile-inner {
    display: flex;
    flex-direction: column;
    margin-top: 2%;

    * {
      margin-bottom: 1%;
    }

    .profile-item {
      border-bottom: 1px solid rgba(0,0,0,.2);
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
`