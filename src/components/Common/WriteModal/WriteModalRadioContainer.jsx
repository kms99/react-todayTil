import React from "react";
import WriteModalRadio from "./WriteModalRadio";
import * as S from "./WriteModal.styled";
import { radios } from "../../../common";

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
