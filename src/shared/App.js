import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Global } from '@emotion/core';
import GlobalStyles from './globalStyles';
import Home from 'containers/Home';

function App() {
    return [
        <Global styles={GlobalStyles} key="0" />,
        <Home key="1" />
    ];
}

export default hot(App);