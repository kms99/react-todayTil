export const validationCheck = (inputTil) => {
  for (let key in inputTil) {
    if (!String(inputTil[key]).trim()) {
      window.alert(`${key}값을 입력하세요`);
      return false;
    }
  }
  return true;
};
