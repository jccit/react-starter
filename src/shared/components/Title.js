/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

// Example component with style
const Title = ({text}) => {
    const headingStyle = css`
        font-family: sans-serif;
        font-size: 24px;
    `;
    return <h1 css={headingStyle}>{ text }</h1>
};

Title.propTypes = {
    text: PropTypes.string
};

export default Title;