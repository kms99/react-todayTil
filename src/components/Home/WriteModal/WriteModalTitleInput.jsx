import React from "react";
import * as S from "./WriteModal.styled";
import { setTilTitle } from "../../../redux/modules/TilList";
import { useDispatch, useSelector } from "react-redux";

const WriteModalTitleInput = () => {
  const dispatch = useDispatch();
  const setTitleHandler = (e) => {
    dispatch(setTilTitle(e.target.value));
  };
  const titleValue = useSelector(
    (state) => state.TilList.currentWriteTil.title
  );
  return (
    <S.StTitleInputContainer>
      <label>제목</label>
      <input value={titleValue} onChange={setTitleHandler} />
    </S.StTitleInputContainer>
  );
};

export default WriteModalTitleInput;
