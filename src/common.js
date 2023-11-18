import good from './styles/image/conditionImg/good.svg';
import nomal from './styles/image/conditionImg/nomal.svg';
import sad from './styles/image/conditionImg/sad.svg';
import verySad from './styles/image/conditionImg/verySad.svg';

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
  { value: 0, text: "좋음", imgUrl:good,},
  { value: 1, text: "보통", imgUrl:nomal, },
  { value: 2, text: "나쁨", imgUrl:sad, },
  { value: 3, text: "매우나쁨", imgUrl:verySad, },
];
