import styled, {css} from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  font-size: 1.6rem;
  padding-block: 1.2rem;
  width: 100%;
  max-width: 20rem;
  border-radius: 3.4rem;
  background-color: ${({theme}) => theme.COLORS.DARK_BLUE};
  color: ${({theme}) => theme.COLORS.NEUTRAL};
  cursor: pointer;
  border: none;
  font-weight: 500;
  
  svg {
    display: none;
  }

  ${({ isMore }) =>
    isMore &&
    css`
      color: ${({ theme }) => theme.COLORS.DARK_BLUE};
      background-color: ${({theme}) => theme.COLORS.TRANSPARENT};
      border: 1px solid ${({theme}) => theme.COLORS.DARK_BLUE};
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.02);
      }
      svg:nth-child(1) {
        display: block;
      }
  `}

  ${({ isView }) =>
    isView &&
    css`
      color: ${({ theme }) => theme.COLORS.DARK_BLUE};
      background-color: ${({theme}) => theme.COLORS.TRANSPARENT};
      border: 1px solid ${({theme}) => theme.COLORS.DARK_BLUE};
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.02);
      }
      svg {
        
        &:nth-child(2) {
          display: block;
          fill: ${({theme}) => theme.COLORS.DARK_BLUE};
          padding: 0.2rem;
          border: 1px solid black;
          border-radius: 50%;
        }
      }
  `}
`
