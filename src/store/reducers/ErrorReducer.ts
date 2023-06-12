import {
  IErrorReducer,
  IAction,
} from "@/store/reducers/interfaces/errorReducer";

import { errorTypes as TYPES } from "@/store/types/ErrorTypes";

const initialState: IErrorReducer = {
  error: "",
};

export const errorReducer = (
  state = initialState,
  action: IAction,
): IErrorReducer => {
  switch (action.type) {
    case TYPES.SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
