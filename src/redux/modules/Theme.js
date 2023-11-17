const TOGGLE_THEME = "TOGGLE_THEME";

export const toggleTheme = {
  type: TOGGLE_THEME,
};

const initState = {
  theme: "light",
};

const Theme = (state = initState, { type }) => {
  switch (type) {
    case TOGGLE_THEME:
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return { ...state };
  }
};

export default Theme;
