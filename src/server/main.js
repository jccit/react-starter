import express from 'express';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import App from '../shared/App';

const server = express();

const htmlTop = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Hello</title>
            <script defer src="/assets/app.js"></script>
        </head>
        <body>
            <main id="app">`;

const htmlBottom = `</main>
        </body>
    </html>
`;

server.get('/', (req, res) => {
    res.write(htmlTop);

    const stream = renderToNodeStream(<App />);
    stream.pipe(res, { end: false });
    stream.on('end', () => {
        res.write(htmlBottom);
        res.end();
    })
});

server.use('/assets', express.static('dist/client'));

server.listen(3000, () => console.log('React server listening on port 3000'));