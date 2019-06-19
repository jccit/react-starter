import 'react-hot-loader';
import React from 'react';
import { hydrate } from 'react-dom';
import { HeadProvider } from 'react-head';
import App from '../shared/App';

hydrate(
    <HeadProvider>
        <App />
    </HeadProvider>
, document.querySelector('#app'));