import { combineReducers } from "redux";

import { errorReducer } from "@/store/reducers/ErrorReducer";
import { userReducer } from "@/store/reducers/UserReducer";

export const rootReducer = combineReducers({
  errorReducer,
  userReducer,
});
