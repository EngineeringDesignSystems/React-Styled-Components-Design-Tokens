import { css, styled } from "../../theme/styled-components";

export const Surface = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.surface};
      padding: ${theme.spacing[11]}px;
    `;
  }}
`;
