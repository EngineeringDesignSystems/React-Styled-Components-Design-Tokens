import * as baseStyled from "styled-components";
import { TTheme } from "./theme";

// STYLED-COMPONENTS THEME INJECTION
export const {
  css,
  createGlobalStyle,
  keyframes,
  default: styled,
  ServerStyleSheet,
  ThemeProvider,
  ThemeContext,
  useTheme,
} = baseStyled as unknown as baseStyled.ThemedStyledComponentsModule<TTheme>;
