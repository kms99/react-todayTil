import React from "react";
import { Link, useParams } from "react-router-dom";
import * as S from "./Detail.styled";
import { useSelector } from "react-redux";
import { radios } from "../../common";

const DetailContainer = () => {
  const { id } = useParams();
  const findTilData = useSelector((state) => state.TilList.tilList).find(
    (til) => til.id === id
  );

  return (
    <S.StDetailWrapper>
      <Link to="/">홈으로</Link>
      <S.StFirstLine>
        <span>{String(findTilData.date)}</span>
        <span>{radios[findTilData.tilCondition].text}</span>
      </S.StFirstLine>
      <S.StTitleH1>{findTilData.title}</S.StTitleH1>
      <S.StContextP>{findTilData.context}</S.StContextP>
    </S.StDetailWrapper>
  );
};

export default DetailContainer;
