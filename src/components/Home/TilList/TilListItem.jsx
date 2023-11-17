import React from "react";
import * as S from "./TilList.styled";
import { useNavigate } from "react-router-dom";
import { radios } from "../../../common";

const TilListItem = ({ info }) => {
  const navigate = useNavigate();
  const goToDetailPage = () => {
    navigate(`/detail/${info.id}`);
  };
  return (
    <S.StList onClick={goToDetailPage}>
      <S.StDate>{String(info.date)}</S.StDate>
      <S.StListTitle>{info.title}</S.StListTitle>
      <S.StCondition>{radios[info.tilCondition].text}</S.StCondition>
    </S.StList>
  );
};

export default TilListItem;
