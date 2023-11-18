import React from "react";
import * as S from "./WriteModal.styled";
import WriteModalTitleInput from "./WriteModalTitleInput";
import WriteModalCommentTextarea from "./WriteModalCommentTextarea";
import WriteModalRadioContainer from "./WriteModalRadioContainer";
import { useDispatch } from "react-redux";
import { setNewTil } from "../../../redux/modules/TilList";
import WriteModalDateInput from "./WriteModalDateInput";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const WriteModalForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const writeTilSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(setNewTil());
    navigate("/");
  };

  return (
    <S.StWriteModalForm onSubmit={writeTilSubmitHandler}>
      <WriteModalDateInput />
      <WriteModalTitleInput />
      <WriteModalCommentTextarea />
      <WriteModalRadioContainer />
      <Button
        buttonText="작성완료"
        style={{ padding: "0.5rem 2rem", fontSize: "2rem" }}
      />
    </S.StWriteModalForm>
  );
};

export default WriteModalForm;
