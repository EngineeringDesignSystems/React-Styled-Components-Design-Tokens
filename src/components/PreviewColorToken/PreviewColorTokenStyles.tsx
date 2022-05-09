import { css, styled } from "../../theme/styled-components";
import { TThemeColorKey } from "../../theme/theme";

type TColorBarProps = {
  colorVariant: TThemeColorKey;
};

export const ColorBar = styled.div<TColorBarProps>`
  ${({ colorVariant, theme }) => {
    return css`
      background-color: ${theme.colors[colorVariant]};
      height: 42px;
      width: 100%;
    `;
  }}
`;

export const OuterWrapper = styled.div`
  ${({ theme }) => {
    return css`
      align-items: center;
      display: grid;
      gap: ${theme.spacing[4]}px;
      grid-template-columns: 2fr 2fr 8fr;
    `;
  }}
`;
