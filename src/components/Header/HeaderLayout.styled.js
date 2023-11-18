import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1500px;
  min-width: 350px;
  margin: auto;
  min-height: 100vh;
  background-color: ${(props) => props.theme.mainBackgroundColor};
  transition: 0.5s;
`;
export const StHeader = styled.header`
  position: relative;
  background-color: ${(props) => props.theme.headerBackgroundColor};
  color: ${(props) => props.theme.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  transition: all 0.5s;
  & h1 {
    margin-bottom: 2rem;
    font-size: 4rem;
    font-weight: bold;
  }
  & input {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const StChangeBtn = styled.button`
  position: absolute;
  left: 3rem;
  bottom: 2rem;
  width: 3.5rem;
  height: 3.5rem;
  background: url(${(props) => props.theme.modeBtn});
  background-position: center;
  background-size: cover;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  &::after {
    position: absolute;
    right: -11rem;
    top: 50%;
    transform: translate(0, -50%);
    color: ${(props) => props.theme.color};
    font-size: 2rem;
    content: "${(props) => props.$mode} mode";
  }

  @media (max-width: 1100px) {
    width: 2rem;
    height: 2rem;
    left: 2rem;
    &::after {
      position: absolute;
      right: -8rem;
      top: 50%;
      transform: translate(0, -50%);
      font-size: 1.5rem;
      content: "${(props) => props.$mode} mode";
    }
  }
`;
