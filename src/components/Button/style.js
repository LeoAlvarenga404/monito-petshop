import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 1.6rem;
  padding-block: 1.2rem;
  width: 100%;
  max-width: 20rem;
  border-radius: 3.4rem;
  border: none;
  color: ${({theme}) => theme.COLORS.NEUTRAL};
  background-color: ${({theme}) => theme.COLORS.DARK_BLUE};
  cursor: pointer;
`