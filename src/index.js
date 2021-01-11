import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import './index.css';
import './fontawesome';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  // <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Greenpeace 綠色和平 | 香港</title>
      </Helmet>
      <Provider store={configureStore}>
        <App />
      </Provider>
    </HelmetProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
