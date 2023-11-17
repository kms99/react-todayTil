import { validationCheck } from "../../common";
import { v4 as uuidv4 } from "uuid";

const WRITE_BTN_TOGGLE = "WRITE_BTN_TOGGLE";
const SET_NEW_TIL = "SET_NEW_TIL";

const TIL_SELECTED_CONDITION = "TIL_SELECTED_CONDITION";
const TIL_SET_DATE = "TIL_SET_DATE";
const TIL_SET_TITLE = "TIL_SET_TITLE";
const TIL_SET_CONTEXT = "TIL_SET_CONTEXT";

export const writeModalToggle = () => {
  return {
    type: WRITE_BTN_TOGGLE,
  };
};
export const setNewTil = () => {
  return {
    type: SET_NEW_TIL,
  };
};
export const selectCondition = (payload) => {
  return {
    type: TIL_SELECTED_CONDITION,
    payload,
  };
};
export const setTilDate = (payload) => {
  return {
    type: TIL_SET_DATE,
    payload,
  };
};
export const setTilTitle = (payload) => {
  return {
    type: TIL_SET_TITLE,
    payload,
  };
};
export const setTilContext = (payload) => {
  return {
    type: TIL_SET_CONTEXT,
    payload,
  };
};

const initCurrentTil = {
  date: "",
  title: "",
  context: "",
  tilCondition: 0,
};

const initState = {
  tilList: [],
  showWriteModal: false,
  currentWriteTil: initCurrentTil,
};

const TilList = (state = initState, { type, payload }) => {
  switch (type) {
    case WRITE_BTN_TOGGLE:
      return { ...state, showWriteModal: state.showWriteModal ? false : true };
    case TIL_SET_DATE:
      return {
        ...state,
        currentWriteTil: { ...state.currentWriteTil, date: payload },
      };
    case TIL_SET_TITLE:
      return {
        ...state,
        currentWriteTil: { ...state.currentWriteTil, title: payload },
      };
    case TIL_SET_CONTEXT:
      return {
        ...state,
        currentWriteTil: { ...state.currentWriteTil, context: payload },
      };
    case TIL_SELECTED_CONDITION:
      return {
        ...state,
        currentWriteTil: { ...state.currentWriteTil, tilCondition: payload },
      };

    case SET_NEW_TIL:
      const newTil = { ...state.currentWriteTil, id: uuidv4() };
      return validationCheck(newTil)
        ? {
            showWriteModal: false,
            currentWriteTil: initCurrentTil,
            tilList: [...state.tilList, newTil],
          }
        : state;
    default:
      return state;
  }
};

export default TilList;
