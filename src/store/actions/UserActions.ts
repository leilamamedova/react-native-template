/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */

import { useCallback } from "react";

import { userTypes as TYPES } from "@/store/types/UserTypes";

export default class User {
  dispatch: Function = () => {};
  constructor(dispatch: Function) {
    this.dispatch = dispatch;
  }

  addUserData = useCallback(
    (userData: string) =>
      this.dispatch({
        type: TYPES.SET_USER_DATA,
        userData,
      }),
    [this],
  );

  clearStore = useCallback(
    () =>
      this.dispatch({
        type: TYPES.CLEAR_STORE,
      }),
    [this],
  );
}
