import React from "react";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Surface } from "./PreviewUIStyles";

export type TPreviewUIProps = {};

export const PreviewUI: React.FC<TPreviewUIProps> = () => {
  return (
    <>
      <Text styleVariant="heading2">Preview UI</Text>
      <Text colorVariant="onbackground" styleVariant="paragraph">
        onbackground text
      </Text>
      <Surface>
        <Text styleVariant="paragraph" tagElement="p">
          onsurface text
        </Text>
        <Button label="Primary Button" styleVariant="primary" />
        <Button label="Secondary Button" styleVariant="secondary" />
      </Surface>
    </>
  );
};
