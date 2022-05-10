# Actionable Design Systems: React + styled-components + Design Tokens Figma Plugin

[![Netlify Status](https://api.netlify.com/api/v1/badges/3c7cc006-2bf6-4bf0-90c4-1664d60efb3b/deploy-status)](https://app.netlify.com/sites/actionable-design-systems-react-styled-components/deploys)

- [Live Site](https://actionable-design-systems-react-styled-components.netlify.app/)
- [Figma Mockup](https://www.figma.com/file/zwUGIhow83YT0bCceds8Ow/Design-System-Starter?node-id=0%3A1)


## Overview

There are many ways to set up a design system that serves design and engineering equally. In this project we implement a general design system starter project with color tokens, typography tokens, and general spacing content to show an example of how to do this process across design ([See Figma Mockup](https://www.figma.com/file/zwUGIhow83YT0bCceds8Ow/Design-System-Starter?node-id=0%3A1)) and engineering (this project's code).




This Project features:

1. Both light and dark theme color tokens named the same accross Figma and the app:
  
| light Theme   | dark Theme  |
|---|---|
| <img width="1512" alt="lightTheme" src="https://user-images.githubusercontent.com/5474124/167498565-100f61c4-ca4a-4208-aa66-dc5a2882461c.png">  |    <img width="1512" alt="darkTheme" src="https://user-images.githubusercontent.com/5474124/167498576-367ac915-fb00-4d00-8630-7b97f80cd025.png"> |

> Note: the [Design Tokens](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) Figma plugin exports camelCase tokens as all lowercase, so that is why the color tokens are all lowercase. You may want to make your tokens as camelCase instead.
  
2. A general Button component that consumes theme context and has an API that matches the Button component in Figma. The Properties + Variants in Figma directly correspond to the component's API structure and interraction styles.

4. A button that toggles the theme in the header of the page.
  

  
| Figma Properties  | Figma Diagram  |
|---|---|
| <img width="693" alt="Screen Shot 2022-05-09 at 1 42 13 PM" src="https://user-images.githubusercontent.com/5474124/167494370-54368ff7-a1fa-4568-bdb9-ec5d18af428a.png">  |  <img width="1313" alt="Button Diagram" src="https://user-images.githubusercontent.com/5474124/167493988-0a75b866-903c-489d-a62d-81687d3476c6.png">  |

**Button JSON Structure**:
<img width="2782" alt="json" src="https://user-images.githubusercontent.com/5474124/167494527-39bdac91-23bd-47dc-a750-cb11d9996df9.png">


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
