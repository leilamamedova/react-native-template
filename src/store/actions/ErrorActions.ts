/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */

import { useCallback } from "react";

import { errorTypes as TYPES } from "@/store/types/ErrorTypes";

export default class Error {
  dispatch: Function = () => {};
  constructor(dispatch: Function) {
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
