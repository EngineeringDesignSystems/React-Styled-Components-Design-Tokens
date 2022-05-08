import { css, styled } from "../../theme/styled-components";
import { TThemeColorKey, TThemeTypographyKey } from "../../theme/theme";

type TTextProps = {
  /**
   * tag to render as
   */
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p";
  /**
   * theme Typography variant
   */
  variant: TThemeTypographyKey;
  /**
   * theme Color to display
   */
  colorVariant?: TThemeColorKey;
};

export const Text = styled("p").attrs<TTextProps>(({ as }) => {
  return {
    as: as,
  };
})<TTextProps>`
  ${({ color, theme, variant }) => {
    const { fontFamily, fontWeight, letterSpacing } = theme.typography[variant];
    return css`
      color ${color ? color : theme.colors.onbackground};
      font-family: ${fontFamily};
      font-weight: ${fontWeight};
      letter-spacing: ${letterSpacing};
    `;
  }}
`;
