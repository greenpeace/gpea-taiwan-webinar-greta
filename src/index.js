import React from "react";
// import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import { hydrate, render } from "react-dom";
import TagManager from "react-gtm-module";

import "./index.css";
import "./fontawesome";

/* TODO: init TagManager only in Production */
const tagManagerArgs = {
  gtmId: "GTM-M6LZL75",
};

TagManager.initialize(tagManagerArgs);

const rootElement = document.getElementById("root");

const renderApp = (
  <HelmetProvider>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </HelmetProvider>
);

if (rootElement.hasChildNodes()) {
  hydrate(renderApp, rootElement);
} else {
  render(renderApp, rootElement);
}

// ReactDOM.render(
//   <HelmetProvider>
//     <Provider store={configureStore}>
//     <App />
//     </Provider>
//   </HelmetProvider>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
