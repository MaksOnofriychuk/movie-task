import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import "./index.css";
import {BrowserRouter} from "react-router-dom";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);
