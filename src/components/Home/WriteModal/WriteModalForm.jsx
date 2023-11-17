import React from "react";
import * as S from "./WriteModal.styled";
import WriteModalTitleInput from "./WriteModalTitleInput";
import WriteModalCommentTextarea from "./WriteModalCommentTextarea";
import WriteModalRadioContainer from "./WriteModalRadioContainer";
import { useDispatch } from "react-redux";
import { setNewTil } from "../../../redux/modules/TilList";
import WriteModalDateInput from "./WriteModalDateInput";

const WriteModalForm = () => {
  const dispatch = useDispatch();
  const writeTilSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(setNewTil());
  };

  return (
    <S.StWriteModalForm onSubmit={writeTilSubmitHandler}>
      <WriteModalDateInput />
      <WriteModalTitleInput />
      <WriteModalCommentTextarea />
      <WriteModalRadioContainer />
      <button>작성하기</button>
    </S.StWriteModalForm>
  );
};

export default WriteModalForm;
