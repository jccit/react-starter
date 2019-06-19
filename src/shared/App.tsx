import React from 'react';
import { hot } from 'react-hot-loader/root';

import { Global } from '@emotion/core';
import GlobalStyles from './globalStyles';

import { Route, Link } from 'react-router-dom';

import Home from 'containers/Home';
import About from 'containers/About';

class App extends React.Component {
    render() {
        return (
            <div>
                <Global styles={GlobalStyles} />

                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about/">About</Link>
                </nav>
                
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
            </div>
        );
    }
}

export default hot(App);