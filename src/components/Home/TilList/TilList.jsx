import React from "react";
import { useSelector } from "react-redux";
import * as S from "./TilList.styled";
import TilListItem from "./TilListItem";

const TilList = () => {
  let tilList = useSelector((state) => state.TilList.tilList);

  const selectedDate = useSelector(
    (state) => state.TilList.currentWriteTil.date
  );

  if (selectedDate)
    tilList = tilList.filter((til) => til.date === selectedDate) || [];
  return (
    <S.ListWrapper>
      <h2>
        {selectedDate ? `${selectedDate}` : "전체기간"} 작성된 TIL은 모두
        {tilList.length} 건 입니다.
      </h2>
      <S.StUl>
        {tilList.map((til) => (
          <TilListItem key={til.id} info={til} />
        ))}
      </S.StUl>
    </S.ListWrapper>
  );
};

export default TilList;
