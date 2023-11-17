import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCondition } from "../../../redux/modules/TilList";

const WriteModalRadio = ({ radio }) => {
  const tilCondition = useSelector(
    (state) => state.TilList.currentWriteTil.tilCondition
  );
  const dispatch = useDispatch();
  const radioButtonChangeHandler = (e) => {
    dispatch(selectCondition(Number(e.target.value)));
  };

  return (
    <div>
      <label htmlFor={radio.value}>{radio.text}</label>
      <input
        id={radio.value}
        type="radio"
        value={radio.value}
        checked={radio.value === tilCondition}
        onChange={radioButtonChangeHandler}
      />
    </div>
  );
};

export default WriteModalRadio;
