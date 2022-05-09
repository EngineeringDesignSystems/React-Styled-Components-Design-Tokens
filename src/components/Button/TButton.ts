import { TThemeTypographyKey } from "../../theme/theme";

//  STYLE VARIANT TYPES
//
//  style variants:                primary                               secondary
//                               /        \                            /          \
//                              /          \                          /            \
//  states:               enabled          disabled             enabled            disabled
//                        /  |  \          /  |  \              /  |  \             /  |  \
//                       /   |   \        /   |   \            /   |   \           /   |   \
//  interractions:  active hover none  active hover none   active hover none  active hover none

type TButtonInterractionStyles = {
  // active
  activeBackgroundColor: string;
  activeFontColor: string;

  // hover
  hoverBackgroundColor: string;
  hoverFontColor: string;

  // none
  noneBackgroundColor: string;
  noneFontColor: string;
};

export type TButtonStates = {
  disabled: TButtonInterractionStyles;
  enabled: TButtonInterractionStyles;
};

export type TButtonStyleVariants = {
  primary: TButtonStates;
  secondary: TButtonStates;
};

//  SIZE VARIANT TYPES
//  size variants: large  small

type TButtonSizeVariantStyles = {
  fontVariant: TThemeTypographyKey;
  padding: string;
};

export type TButtonSizeVariants = {
  large: TButtonSizeVariantStyles;
  small: TButtonSizeVariantStyles;
};

// BUTTON STRUCTURE
export type TButtons = {
  styleVariants: TButtonStyleVariants;
  sizeVariants: TButtonSizeVariants;
};
