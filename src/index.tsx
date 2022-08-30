import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./assets/styles/index.css";

import 'antd/dist/antd.css'

import { Provider } from "react-redux";

import { store } from "./features/store";
import { ConfigProvider } from 'antd';
import frFR from 'antd/es/locale/fr_FR';

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ConfigProvider locale={frFR}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
