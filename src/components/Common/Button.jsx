import React from "react";
import styled from "styled-components";

const Button = ({ handler, buttonText, style }) => {
  return (
    <StButton onClick={handler} style={style}>
      {buttonText}
    </StButton>
  );
};

const StButton = styled.button`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  color: ${(props) => props.theme.color};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s, border 0.5s;
  &:active,
  &:hover {
    background-color: ${(props) => props.theme.listHoverBackGround};
  }
`;

export default Button;
