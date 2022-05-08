import { css, styled } from "./theme/styled-components";

export const AppStyled = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.background};
    `;
  }}
`;
