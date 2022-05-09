import { css, styled } from "../../theme/styled-components";

export const Divider = styled.hr`
  ${({ theme }) => {
    return css`
      border: 3px solid ${theme.colors.primary};
      width: 100%;
    `;
  }}
`;
