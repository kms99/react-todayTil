import React from "react";
import * as S from "./WriteModal.styled";
import { setTilContext } from "../../../redux/modules/TilList";
import { useDispatch, useSelector } from "react-redux";

const WriteModalCommentTextarea = () => {
  const dispatch = useDispatch();
  const setContextHandler = (e) => {
    dispatch(setTilContext(e.target.value));
  };
  const contextValue = useSelector(
    (state) => state.TilList.currentWriteTil.context
  );
  return (
    <S.StTitleCommentAreaContainer>
      <label>내용</label>
      <textarea value={contextValue} onChange={setContextHandler} />
    </S.StTitleCommentAreaContainer>
  );
};

export default WriteModalCommentTextarea;
