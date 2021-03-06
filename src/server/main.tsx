import express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { HeadProvider } from 'react-head';
import { StaticRouter, StaticRouterContext } from 'react-router';
import App from '../shared/App';

const server = express();

const template = (head: string, body: string) => `
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

server.use('/assets', express.static('dist/client'));

server.get('*', (req, res) => {
    // should be React.ReactElement[] but the React DOM types
    // are messed up, renderToString will not accept an array
    const headTags: any = [];
    const routerContext: StaticRouterContext = {};

    const body = renderToString(
        <HeadProvider headTags={headTags}>
            <StaticRouter
                location={req.url}
                context={routerContext}
            >
                <App />
            </StaticRouter>
        </HeadProvider>
    );

    if (routerContext.url) {
        // if <Redirect> used, return a redirect
        return res.redirect(routerContext.url);
    }

    const head = renderToString(headTags);

    res.send(template(head, body));
});

server.listen(3000, () => console.log('React server listening on port 3000'));