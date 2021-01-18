import * as Actions from "../actions";
import banner from "../../data/pets.json"

const initState = {
  data: banner.data,
  slideIndex: 0,
  lastAction: null
};

const swiperReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.UPDATE_SWIPER_SLIDE:
      return {
        ...state,
        slideIndex: action.data,
        lastAction: action.type
      };

    default:
      return state;
  }
};

export default swiperReducer;
