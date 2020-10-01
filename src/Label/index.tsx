import React from "react";
import styled from "styled-components";

const FontSize = {
  small: "12px",
  middle: "14px",
  large: "18px",
} as const;

type FontSize = keyof typeof FontSize;

type Props = {
  color: "red" | "green" | "blue";
  children: React.ReactNode;
  fontSize: FontSize;
};
const Label: React.FC<Props> = ({ color, children, fontSize }) => {
  return (
    <Label_ color={color} fontSize={fontSize}>
      {children}
    </Label_>
  );
};

const Label_ = styled.label<Props>(({ color, fontSize }) => ({
  color: color,
  fontSize: FontSize[fontSize],
}));

export default Label;
