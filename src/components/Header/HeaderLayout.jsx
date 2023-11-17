import React from "react";
import * as S from "./HeaderLayout.styled";
import { setTilDate, writeModalToggle } from "../../redux/modules/TilList";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/modules/Theme";

const HeaderLayout = ({ children }) => {
  const dispatch = useDispatch();
  const toggleBtnClickHandler = () => {
    dispatch(writeModalToggle());
  };
  const themeChangeHandler = () => {
    dispatch(toggleTheme);
  };
  const setDateHandler = (e) => {
    dispatch(setTilDate(e.target.value));
  };
  const dateValue = useSelector((state) => state.TilList.currentWriteTil.date);
  return (
    <S.Wrapper>
      <S.StHeader>
        <button onClick={themeChangeHandler}>modeChange</button>
        <h1>Today's TIL</h1>
        <input type="date" value={dateValue} onChange={setDateHandler} />
        <button onClick={toggleBtnClickHandler}>작성하기</button>
      </S.StHeader>
      {children}
    </S.Wrapper>
  );
};

export default HeaderLayout;
