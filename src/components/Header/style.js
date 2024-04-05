import styled from "styled-components";
export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  font-size: 1.6rem;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  nav {
    ul {
      display: flex;
      gap: 4rem;
      font-weight: bold;
      
      li {
        a {
          color: ${({theme}) => theme.COLORS.DARK_BLUE};
        }
      }
    }
  }
  .menubar {
    display: none;
  }
  .input-wrapper {
    width: 100%;
    max-width: 50rem;
    position: relative;

    svg {
      position: absolute;
      inset: 1.2rem 0 0 1.6rem;
    }

    input {
      width: 100%;
      padding: 1.4rem 2rem;
      padding-left: 5rem;
      outline: none;
      border-radius: 2.7rem;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 1.6rem;
    }
  }
  @media (max-width: 768px) {
    .menubar {
      display: block;
      position: absolute;
      left: 3rem;
      top: 3rem;
    }
    nav, .input-wrapper, button {
      display: none;
    }
    display: flex;
    justify-content: center;
  }

  
  
`