import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { HeadProvider } from 'react-head';
import App from '../shared/App';

const server = express();

const template = (head, body) => `
    <!DOCTYPE html>
    <html>
        <head>
            ${head}
            <script defer src="/assets/js/vendor.js"></script>
            <script defer src="/assets/js/main.js"></script>
        </head>
        <body>
            <main id="app">${body}</main>
        </body>
    </html>
`;

server.get('/', (req, res) => {
    const headTags = [];

    const body = renderToString(
        <HeadProvider headTags={headTags}>
            <App />
        </HeadProvider>
    );

    const head = renderToString(headTags);

    res.send(template(head, body));
});

server.use('/assets', express.static('dist/client'));

server.listen(3000, () => console.log('React server listening on port 3000'));