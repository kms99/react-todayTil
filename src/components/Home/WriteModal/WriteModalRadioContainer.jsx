import React from "react";
import WriteModalRadio from "./WriteModalRadio";
import * as S from "./WriteModal.styled";

const radios = [
  { value: 0, text: "좋음" },
  { value: 1, text: "보통" },
  { value: 2, text: "나쁨" },
  { value: 3, text: "매우나쁨" },
];
const WriteModalRadioContainer = () => {
  return (
    <S.StConditionRadioContainer>
      <label>컨디션</label>
      <div>
        {radios.map((radio) => (
          <WriteModalRadio key={radio.value} radio={radio} />
        ))}
      </div>
    </S.StConditionRadioContainer>
  );
};

export default WriteModalRadioContainer;
