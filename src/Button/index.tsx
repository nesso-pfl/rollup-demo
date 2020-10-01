import React from "react";
import styled from "styled-components";

type Props = {
  color: "red" | "green" | "blue";
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
};
const Button: React.FC<Props> = ({ color, children, onClick }) => {
  return (
    <Button_ color={color} onClick={onClick}>
      {children}
    </Button_>
  );
};

const Button_ = styled.button<Props>(({ color }) => ({
  color: color,
}));

export default Button;
