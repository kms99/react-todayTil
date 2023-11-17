import styled from "styled-components";

export const StDetailWrapper = styled.div`
  width: 80%;
  padding: 2rem;
  color: white;
  margin: auto;

  & a {
    font-size: 2rem;
  }
`;

export const StTitleH1 = styled.h1`
  font-size: 4rem;
  border-bottom: 3px double white;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
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
  margin-bottom: 3rem;
  & span + span {
    margin-left: 3rem;
  }
`;
