import * as baseStyled from "styled-components";
import { TTheme } from "./theme";

// STYLED-COMPONENTS THEME INJECTION
export const {
  createGlobalStyle,
  css,
  default: styled,
  keyframes,
  ServerStyleSheet,
  ThemeContext,
  ThemeProvider,
  useTheme,
} = baseStyled as unknown as baseStyled.ThemedStyledComponentsModule<TTheme>;
