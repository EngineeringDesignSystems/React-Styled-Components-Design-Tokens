import { useTheme } from "../../theme/styled-components";
import { TButtons } from "./TButton";

export const useGenerateButtonData = () => {
  const themeContext = useTheme();

  const spacing = themeContext.spacing;

  const buttonData: TButtons = {
    sizeVariants: {
      large: {
        fontVariant: "paragraph",
        padding: `${spacing[4]}px ${spacing[8]}px`,
      },
      small: {
        fontVariant: "paragraph",
        padding: `${spacing[2]}px ${spacing[4]}px`,
      },
    },
    styleVariants: {
      primary: {
        disabled: {
          // active
          activeBackgroundColor: themeContext.colors.primarydisabled,
          activeFontColor: themeContext.colors.onprimary,

          // hover
          hoverBackgroundColor: themeContext.colors.primarydisabled,
          hoverFontColor: themeContext.colors.onprimary,

          // none
          noneBackgroundColor: themeContext.colors.primarydisabled,
          noneFontColor: themeContext.colors.onprimary,
        },
        enabled: {
          // active
          activeBackgroundColor: themeContext.colors.primaryactive,
          activeFontColor: themeContext.colors.onprimary,

          // hover
          hoverBackgroundColor: themeContext.colors.primaryhover,
          hoverFontColor: themeContext.colors.onprimary,

          // none
          noneBackgroundColor: themeContext.colors.primary,
          noneFontColor: themeContext.colors.onprimary,
        },
      },
      secondary: {
        enabled: {
          // active
          activeBackgroundColor: themeContext.colors.surfaceactive,
          activeFontColor: themeContext.colors.onsurface,

          // hover
          hoverBackgroundColor: themeContext.colors.surfacehover,
          hoverFontColor: themeContext.colors.onsurface,

          // none
          noneBackgroundColor: themeContext.colors.surface,
          noneFontColor: themeContext.colors.onsurface,
        },
        disabled: {
          // active
          activeBackgroundColor: themeContext.colors.surfacedisabled,
          activeFontColor: themeContext.colors.onsurface,

          // hover
          hoverBackgroundColor: themeContext.colors.surfacedisabled,
          hoverFontColor: themeContext.colors.onsurface,

          // none
          noneBackgroundColor: themeContext.colors.surfacedisabled,
          noneFontColor: themeContext.colors.onsurface,
        },
      },
    },
  };
  return { buttonData };
};
