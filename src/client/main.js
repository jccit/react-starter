import 'react-hot-loader';
import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/App';

hydrate(
    <App />
, document.querySelector('#app'));