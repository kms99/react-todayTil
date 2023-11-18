import dark from "./image/themeMode/dark.svg";
import light from "./image/themeMode/light.svg";

const darkTheme = {
  background: "#17171d",
  headerBackgroundColor: "#05151f",
  mainBackgroundColor: "#05151f",
  color: "#fffbd9",
  borderColor: "#49736b",
  modalBackgroundColor: "#051429",
  modalActiveBackgroundColor: "#6c6c62",
  listBackGround: "transparent",
  listHoverBackGround: "#474952",
  radioButtonColor: "#ece2cf",
  modeBtn: dark,
};

const lightTheme = {
  background: "#887674",
  headerBackgroundColor: "#b98d8a",
  mainBackgroundColor: "#ded0c9",
  color: "#281900",
  borderColor: "#091b2b",
  modalBackgroundColor: "#f8eced",
  modalActiveBackgroundColor: "#FFF",
  listBackGround: "#e5bfb4",
  listHoverBackGround: "#dfe6eb",
  radioButtonColor: "#cf4d10",
  modeBtn: light,
};

export default { dark: darkTheme, light: lightTheme };
