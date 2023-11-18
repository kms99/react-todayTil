import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCondition } from "../../../redux/modules/TilList";
import * as S from "./WriteModal.styled";

const WriteModalRadio = ({ radio }) => {
  const tilCondition = useSelector(
    (state) => state.TilList.currentWriteTil.tilCondition
  );
  const dispatch = useDispatch();
  const radioButtonChangeHandler = (e) => {
    dispatch(selectCondition(Number(e.target.value)));
  };
  const ConditionImg = radio.imgTag;
  return (
    <S.ConditionDiv
      $checked={radio.value === tilCondition}
      $svgColor={radio.mainColor}
    >
      <label htmlFor={radio.value}>
        <ConditionImg />
        <span>{radio.text}</span>
      </label>
      <input
        id={radio.value}
        type="radio"
        checked={radio.value === tilCondition}
        value={radio.value}
        onChange={radioButtonChangeHandler}
      />
    </S.ConditionDiv>
  );
};

export default WriteModalRadio;
