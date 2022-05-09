import React from "react";
import { ButtonStyled } from "./ButtonStyles";
import {
  TButtonSizeVariants,
  TButtonStates,
  TButtonStyleVariants,
} from "./TButton";

export type TButtonProps = {
  /**
   * Current Button state value. For example: enabled, disabled
   */
  buttonState?: keyof TButtonStates;
  /**
   * display text
   */
  label: string;
  /**
   * onclick handler
   */
  onClick?: () => void;
  /**
   * Button size variant
   */
  sizeVariant?: keyof TButtonSizeVariants;
  /**
   * Button style variant
   */
  styleVariant?: keyof TButtonStyleVariants;
};

export const Button: React.FC<TButtonProps> = ({
  buttonState = "enabled",
  label,
  onClick,
  sizeVariant = "large",
  styleVariant = "primary",
}) => {
  return (
    <ButtonStyled
      buttonState={buttonState}
      onClick={onClick}
      sizeVariant={sizeVariant}
      styleVariant={styleVariant}
    >
      {label}
    </ButtonStyled>
  );
};
