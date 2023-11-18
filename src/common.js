import { ReactComponent as Good } from "./styles/image/conditionImg/good.svg";
import { ReactComponent as Nomal } from "./styles/image/conditionImg/nomal.svg";
import { ReactComponent as Sad } from "./styles/image/conditionImg/sad.svg";
import { ReactComponent as VerySad } from "./styles/image/conditionImg/verySad.svg";

export const validationCheck = (inputTil) => {
  for (let key in inputTil) {
    if (!String(inputTil[key]).trim()) {
      window.alert(`${key}값을 입력하세요`);
      return false;
    }
  }
  return true;
};

export const radios = [
  { value: 0, text: "좋음", imgTag: Good, mainColor: "#04e57e" },
  { value: 1, text: "보통", imgTag: Nomal, mainColor: "#054ae9" },
  { value: 2, text: "나쁨", imgTag: Sad, mainColor: "#ff8c30" },
  { value: 3, text: "매우나쁨", imgTag: VerySad, mainColor: "#ff0f52" },
];
