import { css, styled } from "../../theme/styled-components";
import { TThemeColorKey, TThemeTypographyKey } from "../../theme/theme";

type TTextProps = {
  /**
   * Theme Color token to display
   */
  colorVariant?: TThemeColorKey;
  /**
   * Theme Typography variant
   */
  styleVariant: TThemeTypographyKey;
  /**
   * Tag to render as
   */
  tagElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p";
};

export const Text = styled("p").attrs<TTextProps>(
  ({ styleVariant, tagElement }) => {
    const tagsLibrary = {
      heading1: "h1",
      heading2: "h2",
      heading3: "h3",
      heading4: "h4",
      heading5: "h5",
      heading6: "h6",
      label: "label",
      paragraph: "p",
    };

    const as = tagElement ? tagElement : tagsLibrary[styleVariant];

    return {
      as: as,
    };
  }
)<TTextProps>`
  ${({ colorVariant, styleVariant, theme }) => {
    const {
      fontFamily,
      fontSize,
      fontStretch,
      fontWeight,
      letterSpacing,
      lineHeight,
      textCase,
    } = theme.typography[styleVariant];
    return css`
      color ${
        colorVariant ? theme.colors[colorVariant] : theme.colors.onbackground
      };
      font-family: ${fontFamily};
      font-size: ${fontSize}px;
      font-stretch: ${fontStretch};
      font-weight: ${fontWeight};
      letter-spacing: ${letterSpacing}px;
      line-height: ${lineHeight}px;
      text-transform: ${textCase};
    `;
  }}
`;
