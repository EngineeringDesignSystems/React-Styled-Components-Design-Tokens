import { css, styled } from "./theme/styled-components";

export const AppStyled = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.colors.background};
      padding: ${theme.spacing[11]}px;
    `;
  }}
`;

export const Header = styled.header`
  ${({ theme }) => {
    return css`
      padding-bottom: ${theme.spacing[11]}px;
    `;
  }}
`;

export const TypographyWrapper = styled.div`
  ${({ theme }) => {
    return css`
      padding-bottom: ${theme.spacing[11]}px;
    `;
  }}
`;
