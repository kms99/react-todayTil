import React from "react";
import * as S from "./HeaderLayout.styled";
import { setTilDate, writeModalToggle } from "../../redux/modules/TilList";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/modules/Theme";
import Button from "../Common/Button";
import DateInput from "../Common/DateInput";
import { useNavigate } from "react-router-dom";

const HeaderLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mode = useSelector((state) => state.Theme.theme);
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
  const goToHomePageHandler = () => {
    navigate("/");
  };
  return (
    <S.Wrapper>
      <S.StHeader>
        <S.StChangeBtn onClick={themeChangeHandler} $mode={mode} />
        <h1 onClick={goToHomePageHandler}>Today's TIL</h1>
        <DateInput value={dateValue} handler={setDateHandler} />
        <Button
          handler={toggleBtnClickHandler}
          buttonText="작성하기"
          style={{ padding: "0.5rem 2rem", fontSize: "2rem" }}
        />
      </S.StHeader>
      {children}
    </S.Wrapper>
  );
};

export default HeaderLayout;
