# Actionable Design Systems: React + styled-components

## Overview

There are many ways to set up a design system. Whatever system you create needs to serve design and engineering equally. In this project we implement the [design system starter project](https://www.figma.com/file/zwUGIhow83YT0bCceds8Ow/Design-System-Starter?node-id=0%3A1) to show an example of how to do this process. The goal of this project is to be an example of you how you can create a general design system across Design and Engineering.

The general UI consists of:

1. Both light and dark theme color tokens named the same accross Figma and the app:
   [insert table here]
2. A general Button component that consumes theme context and has an API that matches the Button component in Figma.
   [instert table here]
3. Basic theme token values taken directly from Figma via Design Tokens Plugin. In order to keep the project as simple as possible, these theme values are left untouched. However, In production you would want to convert PX to REM for font sizes etc.

The Properties + Variants in Figma directly correspond to the component's API structure and interraction styles.

## Stack

This project:

1. Was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
2. Use [styled-components](https://styled-components.com/) for style utilities.
3. Exported Design tokens from Figma via the [Design Tokens](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) Figma Plugin (see design-tokens.tokens.json output).

## Quick start

In order to run this on your local:

1. clone this repo
2. in the project folder, run:

```
yarn install
yarn start
```

## Generating new theme.ts file

run:
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
