import { useCallback } from "react";

import { DispatchFunction } from "@/store/actions/interfaces";
import { errorTypes as TYPES } from "@/store/types/ErrorTypes";

export default class Error {
  dispatch: DispatchFunction = () => {};
  constructor(dispatch: DispatchFunction) {
    this.dispatch = dispatch;
  }

  addError = useCallback(
    (error: string) =>
      this.dispatch({
        type: TYPES.SET_ERROR,
        error,
      }),
    [this],
  );
}
