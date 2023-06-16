import React from "react";

import { configureStore } from "@reduxjs/toolkit";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

import { combineReducers } from "redux";
import thunk from "redux-thunk";

import i18n from "@/localization";
import { RootNavigator } from "@/navigation";

import { errorReducer } from "@/store/reducers/ErrorReducer";
import { userReducer } from "@/store/reducers/UserReducer";

export const rootReducer = combineReducers({
  errorReducer,
  userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const Wrapper = (): React.ReactElement => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  </I18nextProvider>
);
