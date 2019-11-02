import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import facade from "./countryFacade";

ReactDOM.render(
    <App factory={facade} />,document.getElementById('root')
 );


