# Actionable Design Systems: React + styled-components + Design Tokens Figma Plugin

[![Netlify Status](https://api.netlify.com/api/v1/badges/3c7cc006-2bf6-4bf0-90c4-1664d60efb3b/deploy-status)](https://app.netlify.com/sites/actionable-design-systems-react-styled-components/deploys)

- [Live Site](https://eds-react-styled-components-dt.netlify.app/)
- [Figma Mockup](https://www.figma.com/file/zwUGIhow83YT0bCceds8Ow/Design-System-Starter?node-id=0%3A1)

## Overview

There are many ways to set up a design system that serves design and engineering equally. In this project we implement a general design system starter project with color tokens, typography tokens, and general spacing content to show an example of how to do this process across design ([See Figma Mockup](https://www.figma.com/file/zwUGIhow83YT0bCceds8Ow/Design-System-Starter?node-id=0%3A1)) and engineering (this project's code).

This Project features:

1. Both light and dark theme color tokens named the same accross Figma and the app:

| light Theme                                                                                                                                    | dark Theme                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="1512" alt="lightTheme" src="https://user-images.githubusercontent.com/5474124/181925917-68da7d07-1fca-40fe-8db4-1582dd05f0d4.png"> | <img width="1512" alt="darkTheme" src="https://user-images.githubusercontent.com/5474124/181929524-b6bd9a9e-5fa3-4a22-9052-b18e25bfa0c5.png"> |

> Note: the [Design Tokens](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) Figma plugin exports camelCase tokens as all lowercase, so that is why the color tokens are all lowercase. You may want to make your tokens as camelCase instead.

2. A general Button component that consumes theme context and has an API that matches the Button component in Figma. The Properties + Variants in Figma directly correspond to the component's API structure and interraction styles.

3. A button that toggles the theme in the header of the page.

<img width="814" alt="Screen Shot 2022-05-13 at 11 48 35 AM" src="https://user-images.githubusercontent.com/5474124/168349815-4a641507-9a36-4346-9e8f-5e32b3ba6ed1.png">

**Button JSON Structure**:
<img width="2782" alt="json" src="https://user-images.githubusercontent.com/5474124/167494527-39bdac91-23bd-47dc-a750-cb11d9996df9.png">

## Stack

This project:

1. Was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
2. Use [styled-components](https://styled-components.com/) for style utilities.
3. Exported Design tokens from Figma via the [Design Tokens](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) Figma Plugin (see design-tokens.tokens.json output).

### Note:

In order to have the theme inside styled-components have the shape of our theme, we inject our theme's type (TTheme) in styled-components.ts and use this file's output instead of importing directly from "styled-components" -->

```
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
```

## Quick start

In order to run this on your local:

1. clone this repo
2. in the project folder, run:

```
yarn install
yarn start
```

## Generating a new theme.ts file

In this project we grab our color and typography token values directly from Figma via the [Design Tokens](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) Figma plugin. All of the data from this is stored in the **design-tokens.tokens.json** file. In order to parse it and create theme.ts, run the following script:

```
yarn generate-token-json
```

\*If you want to update the script it's in **scripts/generateTokenJson.tsx**

## Testing

run

```
yarn test
```
