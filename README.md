# Actionable Design Systems: React + styled-components

## Overview

There are many ways to set up a design system. Whatever system you create needs to serve design and engineering equally. In this project we implement the general [design system starter project](https://www.figma.com/file/zwUGIhow83YT0bCceds8Ow/Design-System-Starter?node-id=0%3A1) content to show an example of how to do this process. 

The goal of this project is to be an example of you how you can create a general design system across Design and Engineering.

This Project features:

1. Both light and dark theme color tokens named the same accross Figma and the app:
  
| lightTheme   | darkTheme  |
|---|---|
| <img width="1512" alt="lightTheme" src="https://user-images.githubusercontent.com/5474124/167493595-92169964-ab3d-46da-a5f2-39d1561dcafb.png">  |    <img width="1512" alt="darkTheme" src="https://user-images.githubusercontent.com/5474124/167493589-4bd38706-7a75-47e6-a02e-9a1035305b11.png"> |

  
2. A general Button component that consumes theme context and has an API that matches the Button component in Figma. The Properties + Variants in Figma directly correspond to the component's API structure and interraction styles.
  
| Figma Diagram  | Figma Properties  | JSON structure in the APP  |
|---|---|---|
|   <img width="1313" alt="Button Diagram" src="https://user-images.githubusercontent.com/5474124/167493988-0a75b866-903c-489d-a62d-81687d3476c6.png">  | <img width="693" alt="Screen Shot 2022-05-09 at 1 42 13 PM" src="https://user-images.githubusercontent.com/5474124/167494370-54368ff7-a1fa-4568-bdb9-ec5d18af428a.png">  | <img width="2782" alt="json" src="https://user-images.githubusercontent.com/5474124/167494527-39bdac91-23bd-47dc-a750-cb11d9996df9.png">  |
  

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
