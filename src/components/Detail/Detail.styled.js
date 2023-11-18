import styled from "styled-components";

export const StDetailWrapper = styled.div`
  width: 80%;
  padding: 2rem;
  color: white;
  margin: auto;
  color: ${props=>props.theme.color};
  transition: 0.5s;

  & a {
    font-size: 2rem;
    text-decoration: none;
    color: ${props=>props.theme.color};
  }
`;

export const StTitleH1 = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  border-bottom: 3px double ${props=>props.theme.color};
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  transition: border 0.5s;
`;
export const StContextP = styled.p`
  white-space: pre-line;
  margin: auto;
  width: 90%;
  line-height: 5rem;
  font-size: 3rem;
`;

export const StFirstLine = styled.div`
  display: flex;
  font-size: 1.8rem;
  margin: 3rem 0 2rem 0;
  & span + span {
    margin-left: 3rem;
  }
`;
