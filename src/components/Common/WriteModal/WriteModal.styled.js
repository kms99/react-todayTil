import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: ${(props) => (props.$toggleModal ? "1" : "0")};
  z-index: ${(props) => (props.$toggleModal ? "1" : "-1")};
  transition: opacity 0.5s, z-index 0.5s, background-color 0.5s, color 0.5s;
`;

export const StWriteModal = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 70%;
  height: auto;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: ${(props) => props.theme.modalBackgroundColor};
  border-radius: 20px;
  padding: 4rem 0 2rem 0;
  color: ${(props) => props.theme.color};

  @media (max-width: 1100px) {
    width: 90vw;
  }
`;

export const StWriteModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;

  @media (max-width: 1100px) {
    width: 90%;
  }
`;

export const StWriteModalFormDate = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
  }

  & > span {
    font-size: 4rem;
    font-weight: bold;
  }

  @media (max-width: 1100px) {
    margin-top: 8rem;
    & > div {
      top: -150%;
      font-size: 1.2rem;
    }
    & > span {
      font-size: 3rem;
    }
  }
`;

export const StCloseBtn = styled.button`
  position: absolute;
  width: 3rem;
  height: 3rem;
  padding: 0;
  right: 5rem;
  top: 5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  & div {
    position: absolute;
    background-color: ${(props) => props.theme.color};
    width: 100%;
    height: 3px;
    transition: 0.5s;
  }
  & div:first-child {
    transform: rotate(45deg);
  }
  & div:last-child {
    transform: rotate(-45deg);
  }
  &:hover,
  &:active {
    & div:first-child {
      transform: rotate(-45deg);
    }
    & div:last-child {
      transform: rotate(45deg);
    }
  }
`;

export const StTitleInputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 4rem;
  & input {
    height: 5rem;
    width: 100%;
    padding-left: 7rem;
    font-size: 2rem;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.borderColor};
    border-radius: 10px;
    outline: none;
    color: inherit;
    font-weight: bold;
    transition: background-color 0.5s;
  }
  & input:focus,
  & input:active {
    background-color: ${(props) => props.theme.modalActiveBackgroundColor};
  }

  & label {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 1rem;
    padding-right: 1rem;
    transform: translate(0, -50%);
    border-right: 1px solid ${(props) => props.theme.borderColor};
  }
`;

export const StTitleCommentAreaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  margin-bottom: 2rem;
  & textarea {
    height: 4rem;
    width: 100%;
    height: 90%;
    margin-top: 0.5rem;
    font-size: 2rem;
    resize: none;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.borderColor};
    border-radius: 10px;
    outline: none;
    padding: 1rem;
    color: inherit;
    font-weight: bold;
    transition: background-color 0.5s;
  }
  & textarea:active,
  & textarea:focus {
    background-color: ${(props) => props.theme.modalActiveBackgroundColor};
  }

  & label {
    font-size: 2rem;
    position: absolute;
    top: -2rem;
  }
`;

export const StConditionRadioContainer = styled.div`
  width: 100%;
  font-size: 2rem;
  margin-bottom: 3rem;
  background-color: ${(props) => props.theme.modalActiveBackgroundColor};
  padding: 1rem;
  border-radius: 10px;

  transition: background-color 0.5s;
  text-align: center;

  & > div {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    font-size: 1.5rem;
  }

  & label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  & label span {
    margin-top: 0.5rem;
  }
`;

export const ConditionDiv = styled.div`
  position: relative;
  min-width: 8rem;

  &:hover,
  &:hover {
    color: ${(props) => props.$svgColor};
  }

  & label {
    font-weight: bold;
    color: ${(props) => (props.$checked ? props.$svgColor : "inherit")};
  }

  & input {
    appearance: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin: 0;
    border-radius: 10px;
    transition: background-color 0.5s;
    background-color: ${(props) =>
      props.$checked ? props.theme.radioButtonColor : "transparent"};
    opacity: ${(props) => (props.$checked ? "0.3" : "1")};
    cursor: pointer;
  }

  & input:hover,
  & input:active {
    border: 2px solid ${(props) => props.theme.radioButtonColor};
  }

  @media (max-width: 1100px) {
    zoom: 0.8;
  }
`;
