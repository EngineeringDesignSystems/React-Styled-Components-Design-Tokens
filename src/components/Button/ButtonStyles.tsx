import { css, styled } from "../../theme/styled-components";
import { TThemeTypographyVariant } from "../../theme/theme";
import {
  TButtonSizeVariants,
  TButtonStates,
  TButtonStyleVariants,
} from "./TButton";
import { useGenerateButtonData } from "./useGenerateButtonData";

type TButtonProps = {
  /**
   * Current Button state value. For example: enabled, disabled
   */
  buttonState: keyof TButtonStates;
  /**
   * Button style variant
   */
  styleVariant: keyof TButtonStyleVariants;
  /**
   * Button size variant
   */
  sizeVariant: keyof TButtonSizeVariants;
};

export const ButtonStyled = styled.button<TButtonProps>`
  ${({ theme, sizeVariant, buttonState, styleVariant }) => {
    const { buttonData } = useGenerateButtonData();

    // size variant related styles
    const { padding, fontVariant } = buttonData.sizeVariants[sizeVariant];

    //style variant related styles
    const {
      activeBackgroundColor,
      activeFontColor,
      hoverBackgroundColor,
      hoverFontColor,
      noneBackgroundColor,
      noneFontColor,
    } = buttonData.styleVariants[styleVariant][buttonState];
    const font: TThemeTypographyVariant = theme.typography[fontVariant];

    return css`
      background-color: ${noneBackgroundColor};
      border: 0;
      color: ${noneFontColor};
      cursor: pointer;
      font-family: ${font.fontFamily};
      font-size: ${font.fontSize}px;
      font-weight: ${font.fontWeight};
      padding: ${padding};
      &:active {
        background-color: ${activeBackgroundColor};
        color: ${activeFontColor};
      }
      &:focus {
        background-color: ${activeBackgroundColor};
        color: ${activeFontColor};
      }
      &:hover {
        background-color: ${hoverBackgroundColor};
        color: ${hoverFontColor};
      }
    `;
  }}
`;
