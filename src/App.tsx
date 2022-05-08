import React from "react";
import "./App.css";
import { AppStyled } from "./AppStyles";
import { ColorTokenPreview } from "./components/ColorTokenPreview/ColorTokenPreview";
import { Text } from "./components/Text/Text";
import { ThemeProvider } from "./theme/styled-components";
import {
  lightTheme,
  primitiveColors,
  themeSpecificColorsKeys,
  TThemeColorKey,
} from "./theme/theme";

function App() {
  const primitiveColorsPrintout = Object.keys(primitiveColors).map(
    (colorKey) => (
      <>
        <ColorTokenPreview colorVariant={colorKey as TThemeColorKey} />
      </>
    )
  );
  const themeColorsPrintout = themeSpecificColorsKeys.map((colorKey) => {
    return (
      <>
        <ColorTokenPreview colorVariant={colorKey as TThemeColorKey} />
      </>
    );
  });
  return (
    <ThemeProvider theme={lightTheme}>
      <AppStyled>
        <header className="App-header">
          Design System Starter: React + styled-components
        </header>
        <Text as="h1" variant="heading1">
          Colors
        </Text>
        <Text as="h2" variant="heading2">
          Core Colors
        </Text>
        {themeColorsPrintout}
        <Text as="h2" variant="heading2">
          Primitives Colors
        </Text>
        {primitiveColorsPrintout}
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
