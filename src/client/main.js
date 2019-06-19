import 'react-hot-loader';
import React from 'react';
import { hydrate } from 'react-dom';
import { HeadProvider } from 'react-head';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../shared/App';

hydrate(
    <HeadProvider>
        <Router>
            <App />
        </Router>
    </HeadProvider>
, document.querySelector('#app'));