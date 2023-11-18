import styled from "styled-components";

export const StDetailWrapper = styled.div`
  width: 80%;
  padding: 2rem;
  color: white;
  margin: auto;
  color: ${(props) => props.theme.color};
  transition: 0.5s;

  & a {
    font-size: 2rem;
    text-decoration: none;
    color: ${(props) => props.theme.color};
  }

  & a:hover,
  & a:active {
    text-decoration: underline;
  }

  @media (max-width: 1100px) {
    width: 90%;
  }
`;

export const StTitleH1 = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  border-bottom: 3px double ${(props) => props.theme.color};
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  transition: border 0.5s;
  word-wrap: break-word;
  @media (max-width: 1100px) {
    font-size: 3rem;
  }
`;
export const StTitleInput = styled.input`
  font-size: 4rem;
  width: 100%;
  background: inherit;
  color: inherit;
  border: none;
  outline: none;
  font-weight: bold;
  border-bottom: 3px double ${(props) => props.theme.color};
  padding-bottom: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 1100px) {
    font-size: 3rem;
  }
`;

export const StContextP = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  visibility: ${(props) => (!props.$visible ? "initial" : "hidden")};
  white-space: pre-line;
  line-height: 5rem;
  font-size: 3rem;
  width: 100%;
  word-wrap: break-word;
  @media (max-width: 1100px) {
    font-size: 2.5rem;
  }
`;

export const StContextTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  visibility: ${(props) => (props.$visible ? "initial" : "hidden")};
  line-height: 5rem;
  font-size: 3rem;
  color: inherit;
  background: transparent;
  border: none;
  resize: none;
  outline: none;
  white-space: pre-line;
  font-family: "Malgun Gothic";
  @media (max-width: 1100px) {
    font-size: 2.5rem;
  }
`;

export const StFirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  margin: 3rem 0 2rem 0;
  & > div {
    display: flex;
    align-items: center;
  }

  & > div > div {
    margin-left: 2rem;
    display: flex;
    align-items: center;
  }
  & > div > div svg {
    margin-right: 1rem;
  }

  & button {
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.5s;
    border-radius: 10px;
    padding: 0.3rem;
  }
  & button:hover {
    background-color: ${(props) => props.theme.listHoverBackGround};
  }
  & button + button {
    margin-left: 1rem;
  }
  @media (max-width: 1100px) {
    font-size: 1.5rem;
    & > div:first-child {
      display: flex;
      flex-direction: column;
      align-items: start;
    }
    & > div > div {
      display: flex;
      margin: 1rem 0;
      flex-direction: row;
    }
    & > div > div svg {
      margin-right: 1rem;
      zoom: 0.7;
    }

    & button {
      cursor: pointer;
      transition: background-color 0.5s;
      border-radius: 10px;
      padding: 0.3rem;
    }
  }
`;

export const ContextWrapper = styled.div`
  position: relative;
  margin: auto;
  width: 90%;
`;
