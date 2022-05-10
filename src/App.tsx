import React, { useState } from "react";
import "./App.css";
import { AppStyled, Header, TypographyWrapper } from "./AppStyles";
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
  // STATE
  const [theme, setTheme] = useState(darkTheme);

  // UI PRINTOUTS
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
        <Header className="App-header">
          <Text styleVariant="heading1">
            Design System Starter: React + styled-components
          </Text>
          <Button
            label="Toggle Theme"
            onClick={() => {
              setTheme(theme === darkTheme ? lightTheme : darkTheme);
            }}
            sizeVariant="small"
            styleVariant="primary"
          />
        </Header>
        <Divider />
        <TypographyWrapper>
          <Text styleVariant="heading2">Typography</Text>
          <Divider />
          {typographyPrintout}
        </TypographyWrapper>
        <Divider />
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
