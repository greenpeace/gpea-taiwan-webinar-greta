import * as Actions from "../actions";

const initState = {
  data: [],
  form: {},
  hiddenFormValue: {},
  displayForm: false,
  displayPanel: false,
  lastAction: null,
  submitted: false,
  abTesting: false,
  variant: 0
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

    case Actions.SET_HIDDEN_FORM_VALUE:
      return {
        ...state,
        hiddenFormValue: action.value,
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
        submitted: true,
      };

    case Actions.SUBMIT_FORM_FAIL:
      return {
        ...state,
        lastAction: action.type,
      };

    case Actions.INIT_FORM_STATE:
      return {
        ...initState,
        lastAction: action.type,
      };
    case Actions.INIT_STATE:
      return {
        ...initState,
        lastAction: action.type,
      };

    case Actions.ACTIVE_AB_TESTING:
      return {
        ...state,
        abTesting: action.bol
      };
    
    case Actions.SET_VARIANT:
      return {
        ...state,
        variant: action.value
      };


    default:
      return state;
  }
};

export default themeReducer;
