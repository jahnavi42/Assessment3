import React from "react";

import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";
render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);