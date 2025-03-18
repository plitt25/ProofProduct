import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <App />
  </React.StrictMode>
);


reportWebVitals();
