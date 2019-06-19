import React, { Component } from 'react';
import { Title } from 'react-head';
import Header from 'components/Title';

class About extends Component {
    render() {
        return (
            <article>
                <Title>About</Title>
                <Header text="About page" />
                <p>Hello, this is the about page</p>
            </article>
        );
    }
}

export default About;