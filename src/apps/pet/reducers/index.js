import * as Actions from "../actions";

const initState = {
  data: [],
  selectedImage: "",
  lastAction: null,
};

const petitionReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.FETCH_WORDPRESS_CONTENT_START:
      return {
        ...state,
        lastAction: action.type,
      };

    case Actions.FETCH_WORDPRESS_CONTENT_SUCCESS:
      return {
        ...state,
        data: action.data,
        lastAction: action.type,
      };

    case Actions.FETCH_WORDPRESS_CONTENT_FAIL:
      return {
        ...state,
        lastAction: action.type,
      };

    case Actions.SWITCH_SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: action.src,
        lastAction: action.type,
      };

    default:
      return state;
  }
};

export default petitionReducer;
