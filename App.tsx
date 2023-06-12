import React from "react";

import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

import i18n from "@/localization";
import { RootNavigator } from "@/navigation";
import { store } from "@/store";
import "@env";

const App = (): React.ReactElement => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </I18nextProvider>
  );
};

export default App;
