import React from "react";
import { useTheme } from "../../theme/styled-components";
import { TThemeColorKey } from "../../theme/theme";
import { Text } from "../Text/Text";
import { ColorBar, OuterWrapper } from "./ColorTokenPreviewStyles";

export type TBannerProps = {
  /**
   * theme Color to display
   */
  colorVariant: TThemeColorKey;
};

export const ColorTokenPreview: React.FC<TBannerProps> = ({ colorVariant }) => {
  const themeContext = useTheme();
  return (
    <OuterWrapper>
      <Text as="p" variant="paragraph">
        {colorVariant}
      </Text>
      <Text as="p" variant="paragraph">
        {themeContext.colors[colorVariant]}
      </Text>
      <ColorBar colorVariant={colorVariant} />
    </OuterWrapper>
  );
};
