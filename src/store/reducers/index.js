import { combineReducers } from "redux";
import wordpress from "./wordpressReducer";
import swiper from "./swiperReducer";
import theme from "./themeReducer";
import petition from "apps/pet/reducers";

// Redux: Root Reducer
export const rootReducer = combineReducers({
  wordpress,
  swiper,
  theme,
  petition
});
