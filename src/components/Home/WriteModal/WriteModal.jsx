import React from "react";
import * as S from "./WriteModal.styled";
import { useDispatch, useSelector } from "react-redux";
import { writeModalToggle } from "../../../redux/modules/TilList";
import WriteModalForm from "./WriteModalForm";

const WriteModal = () => {
  const toggleModal = useSelector((state) => state.TilList.showWriteModal);
  const dispatch = useDispatch();
  const toggleBtnClickHandler = () => {
    dispatch(writeModalToggle());
  };

  return (
    <S.ModalWrapper $toggleModal={toggleModal}>
      <S.StWriteModal>
        <S.StCloseBtn onClick={toggleBtnClickHandler}>닫기</S.StCloseBtn>
        <WriteModalForm />
      </S.StWriteModal>
    </S.ModalWrapper>
  );
};

export default WriteModal;
