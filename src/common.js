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
  { value: 0, text: "좋음" },
  { value: 1, text: "보통" },
  { value: 2, text: "나쁨" },
  { value: 3, text: "매우나쁨" },
];
