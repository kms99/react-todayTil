import React from "react";
import styled from "styled-components";

const DateInput = ({ value, handler }) => {
  return <StDateInput type="date" value={value} onChange={handler} />;
};

const StDateInput = styled.input`
  font-size: inherit;
  margin-top: 0.5rem;
  background-color: ${(props) => props.theme.modalActiveBackgroundColor};
  border: 2px solid ${(props) => props.theme.borderColor};
  outline: none;
  border-radius: 5px;
  padding: 0.3rem;
  color: inherit;
  transition: background-color 0.5s;
  cursor: pointer;
`;
export default DateInput;
