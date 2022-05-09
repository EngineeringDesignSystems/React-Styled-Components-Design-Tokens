import React from "react";
import { useTheme } from "../../theme/styled-components";
import { TThemeColorKey } from "../../theme/theme";
import { Text } from "../Text/Text";
import { ColorBar, OuterWrapper } from "./PreviewColorTokenStyles";
import { getPrimitiveName } from "./utils";

export type TPreviewColorTokenProps = {
  /**
   * Theme color token to display
   */
  colorVariant: TThemeColorKey;
  /**
   * Is the color token a core theme color? This shows the primitive color key instead of HEX value
   */
  isCoreColor?: boolean;
};

export const PreviewColorToken: React.FC<TPreviewColorTokenProps> = ({
  colorVariant,
  isCoreColor = false,
}) => {
  const themeContext = useTheme();

  const primitiveColorName = getPrimitiveName(colorVariant, themeContext);

  return (
    <OuterWrapper>
      <Text styleVariant="heading5">{colorVariant}</Text>
      <Text styleVariant="paragraph" tagElement="p">
        {/* Core theme colors dispaly primitive key, primitives display hex value */}
        {isCoreColor ? primitiveColorName : themeContext.colors[colorVariant]}
      </Text>
      <ColorBar colorVariant={colorVariant} />
    </OuterWrapper>
  );
};
