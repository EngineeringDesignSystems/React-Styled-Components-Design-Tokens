import { primitiveColors, TTheme, TThemeColorKey } from "../../theme/theme";

export const getPrimitiveName = (
  colorVariant: TThemeColorKey,
  themeContext: TTheme
) => {
  const primitiveColorName = Object.keys(primitiveColors).find(
    (key: string) =>
      primitiveColors[key as keyof typeof primitiveColors] ===
      themeContext.colors[colorVariant]
  );
  return primitiveColorName;
};
