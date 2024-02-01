import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import FoodVal from './context/FoodData';
import AuthValue from './context/AuthContext';
import CartValue from './context/CartContentext';
import OderHisVal from './context/OdrHistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthValue>
    <FoodVal>
      <CartValue>
        <OderHisVal>
        <App />
        </OderHisVal>
      </CartValue>
    </FoodVal>
    </AuthValue>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
