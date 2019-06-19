/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { SFC } from 'react';

interface TitleProps {
    text: string
}

// Example component with style
const Title: SFC<TitleProps> = props => {
    const headingStyle = css`
        font-family: sans-serif;
        font-size: 24px;
    `;
    return <h1 css={headingStyle}>{ props.text }</h1>
};

export default Title;