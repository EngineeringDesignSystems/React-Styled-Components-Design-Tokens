import React, { useState } from "react";
import "./App.css";
import { AppStyled } from "./AppStyles";
import {
  Button,
  Divider,
  PreviewColorToken,
  PreviewUI,
  Text,
} from "./components";
import { ThemeProvider } from "./theme/styled-components";
import {
  darkTheme,
  lightTheme,
  primitiveColors,
  themeSpecificColorsKeys,
  themeTypographyKeys,
  TThemeColorKey,
  TThemeTypographyKey,
} from "./theme/theme";

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const typographyPrintout = themeTypographyKeys.map((key: string) => {
    return (
      <Text key={`${key}-listItem`} styleVariant={key as TThemeTypographyKey}>
        {key}
      </Text>
    );
  });

  const primitiveColorsPrintout = Object.keys(primitiveColors).map(
    (colorKey) => (
      <PreviewColorToken
        key={`${colorKey}-listItem`}
        colorVariant={colorKey as TThemeColorKey}
      />
    )
  );

  const themeColorsPrintout = themeSpecificColorsKeys.map((colorKey) => {
    return (
      <PreviewColorToken
        key={`${colorKey}-listItem`}
        isCoreColor={true}
        colorVariant={colorKey as TThemeColorKey}
      />
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <header className="App-header">
          <Text styleVariant="heading1">
            Design System Starter: React + styled-components
          </Text>
          <Button
            label="Toggle Theme"
            styleVariant="secondary"
            sizeVariant="small"
            onClick={() => {
              setTheme(theme === darkTheme ? lightTheme : darkTheme);
            }}
          />
        </header>
        <Text styleVariant="heading2">Typography</Text>
        <Divider />
        {typographyPrintout}
        <Text styleVariant="heading2">Colors</Text>
        <Divider />
        <PreviewUI />
        <Text styleVariant="heading3">Core Colors</Text>
        {themeColorsPrintout}
        <Text styleVariant="heading3">Primitives Colors</Text>
        {primitiveColorsPrintout}
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
