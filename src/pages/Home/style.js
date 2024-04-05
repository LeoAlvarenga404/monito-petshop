import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 1rem auto 0;
  padding: 1rem;
  border-radius: 3.2rem 3.2rem 0 0;
  
  @media (max-width: 768px) {
    padding-inline: 1rem;
    ;
  }
`

export const BackgroundHeaderAndHero = styled.div`
  background-color: ${({theme}) => theme.COLORS.MON_YELLOW};
  padding: 2rem 8rem 0 8rem;
  border-radius: 1.4rem;
  @media (max-width: 768px) {
    padding: 1rem 4rem 0 4rem;
  }
`

export const ContentHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  > div {
    margin-bottom: 10rem;
  }
  img {
    width: 100%;
    min-width: 36rem;
    max-width: 100rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    > div {
      margin-bottom: 2rem;
    }
  }

`