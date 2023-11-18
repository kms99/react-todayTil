import React from "react";

const DetailButton = ({ children, handler }) => {
  return <button onClick={handler}>{children}</button>;
};

export default DetailButton;
