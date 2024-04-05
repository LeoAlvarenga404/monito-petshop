import styled from "styled-components";

export const MainTextContainer = styled.div`
  color: ${({theme}) => theme.COLORS.DARK_BLUE};
  display: flex;
  flex-direction: column;
  gap: 5rem;
  
  h1 {
    font-size: 6rem;
    font-style: italic;
    white-space: nowrap;
  }
  h2 {
    font-size: 4.6rem;
    white-space: nowrap;
  }

  p {
    color: ${({theme}) => theme.COLORS.NEUTRAL_800};
    font-size: 1.6rem;
    width: 100%;
    max-width: 60rem;
    min-width: 30rem;
    font-weight: bold;
  }

  .button-wrapper {
    display: flex;
    gap: 3rem;
  }

  @media (max-width: 568px) {
    gap: 2rem;
    h1 {
      font-size: 3.2rem;
      white-space: normal;
      
    }
    h2 {
      font-size: 2.4rem;
      white-space: normal;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (min-width: 568px) and (max-width: 900px) {
    gap: 3rem; */

    h1 {
      font-size: 4.8rem;
    }
    h2 {
      font-size: 3.2rem;
    }
    p {
      font-size: 1.2rem;
    }
  } 
`