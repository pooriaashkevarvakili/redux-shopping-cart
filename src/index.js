import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import "../src/assets/main.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store"
import "./assets/iransans.css"
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { productsApi } from "./redux/apiSlice";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={productsApi}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
