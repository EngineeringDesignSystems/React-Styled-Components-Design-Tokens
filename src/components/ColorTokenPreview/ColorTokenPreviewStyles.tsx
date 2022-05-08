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
  ${() => {
    return css`
      display: grid;
      grid-template-columns: 2fr 2fr 8fr;
      gap: 16px;
      > p {
        min-width: 100px;
      }
    `;
  }}
`;
