import React, { Component } from 'react';
import { Title } from 'react-head';
import Header from 'components/Title';
import Counter from 'components/Counter';

class Home extends Component {
    render() {
        return (
            <article>
                <Title>Home</Title>
                <Header text="Hello world" />
                <Counter />
            </article>
        );
    }
}

export default Home;