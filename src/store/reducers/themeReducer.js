import * as Actions from "../actions";

const initState = {
  data: [],
  form: {},
  displayForm: false,
  displayPanel: false,
  lastAction: null,
};

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.TOGGLE_FORM:
      return {
        ...state,
        displayForm: action.bol,
        lastAction: action.type,
      };
    case Actions.TOGGLE_PANEL:
      return {
        ...state,
        displayPanel: action.bol,
        lastAction: action.type,
      };

    case Actions.SET_FORM_VALUE:
      return {
        ...state,
        form: action.value,
        lastAction: action.type,
      };

    case Actions.SUBMIT_FORM:
      return {
        ...state,
        lastAction: action.type,
      };

    case Actions.SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        lastAction: action.type,
      };

    case Actions.SUBMIT_FORM_FAIL:
      return {
        ...state,
        lastAction: action.type,
      };

    default:
      return state;
  }
};

export default themeReducer;
