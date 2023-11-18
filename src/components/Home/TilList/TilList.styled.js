import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color};
  & > h2 {
    margin: 3rem 0;
    font-size: 3rem;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    & > h2 {
      font-size: 1.7rem;
    }
  }
`;
export const StUl = styled.ul`
  width: 90%;
`;

export const StList = styled.li`
  width: 100%;
  background-color: ${(props) => props.theme.listBackGround};
  border: 3px solid ${(props) => props.theme.borderColor};
  margin: 1rem 0;
  padding: 0 1.5rem;
  height: 7rem;
  border-radius: 10px;
  display: flex;
  font-size: 2rem;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;

  &:active,
  &:hover {
    background-color: ${(props) => props.theme.listHoverBackGround};
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    height: 15rem;
    justify-content: flex-start;
    align-items: start;
    padding: 1rem;
  }
`;

export const StDate = styled.span`
  border-right: 3px solid ${(props) => props.theme.borderColor};
  padding-right: 2rem;
  height: 80%;
  display: flex;
  align-items: center;
  @media (max-width: 1100px) {
    height: auto;
    font-size: 1.3rem;
    border: none;
    padding: 0;
    padding-bottom: 0.2rem;
    border-bottom: 3px solid ${(props) => props.theme.borderColor};
  }
`;
export const StListTitle = styled.h2`
  max-width: 50%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 1100px) {
    font-size: 2.3rem;
    max-width: 100%;
    margin-top: 2rem;
  }
`;
export const StCondition = styled.span`
  min-width: 14rem;
  border-left: 3px solid ${(props) => props.theme.borderColor};
  padding-left: 2rem;
  height: 80%;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 1rem;
  }
  @media (max-width: 1100px) {
    height: auto;
    font-size: 1.5rem;
    border: none;
    padding: 0;
    margin-top: 2rem;
  }
`;
