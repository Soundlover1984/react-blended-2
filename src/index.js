import React from "react";
import ReactDOM from "react-dom/client";
import { Global, ThemeProvider } from "@emotion/react";
import "modern-normalize";
import store from "./app/store";
import { Provider } from "react-redux";

import { App } from "components";
import { GlobalStyles, theme } from "styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
