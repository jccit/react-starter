import React, { Component } from 'react';
import Title from 'components/Title';
import Counter from 'components/Counter';

class Home extends Component {
    render() {
        return (
            <article>
                <Title text="Hello world" />
                <Counter />
            </article>
        );
    }
}

export default Home;