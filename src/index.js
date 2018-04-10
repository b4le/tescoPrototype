import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';

import StaticRouter from 'react-router-dom/StaticRouter';
import { renderRoutes } from 'react-router-config';

import routes from './routes';

const port = 3000;
const app = express();
const router = express.Router();

/**
 * Render React app on index
 */
router.get('*', (req, res) => {
    let context = {};

    const body = renderToString(
        <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
        </StaticRouter>
    );
    const title = "Tesco Prototype - SSR";

    if (context.url) {
        redirect(301, context.url)
    } else {
        res.send(
            html({ body, title })
        )
    }
});

/**
 * Prepare HTML for injection
 * @param {body, title} param0 
 */
const html = ({ body, title}) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <h1>${title}</h1>
        <section id="root">${body}</section>
    </body>
    </html>
    `
}
app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));
