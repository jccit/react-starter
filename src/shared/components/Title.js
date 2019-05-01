import React from 'react';
import PropTypes from 'prop-types';

// Example component
const Title = ({text}) => {
    return <h1>{ text }</h1>
};

Title.propTypes = {
    text: PropTypes.string
};

export default Title;