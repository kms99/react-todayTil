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
