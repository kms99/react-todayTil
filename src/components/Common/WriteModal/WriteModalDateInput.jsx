import React from "react";
import * as S from "./WriteModal.styled";
import { useDispatch, useSelector } from "react-redux";
import { setTilDate } from "../../../redux/modules/TilList";
import DateInput from "../DateInput";

const WriteModalDateInput = () => {
  const dispatch = useDispatch();
  const setDateHandler = (e) => {
    dispatch(setTilDate(e.target.value));
  };
  const dateValue = useSelector((state) => state.TilList.currentWriteTil.date);
  return (
    <S.StWriteModalFormDate>
      <div>
        <label>날짜 선택</label>
        <DateInput value={dateValue} handler={setDateHandler} />
      </div>
      <span>{dateValue || "날짜를 선택하세요"}</span>
    </S.StWriteModalFormDate>
  );
};

export default WriteModalDateInput;
