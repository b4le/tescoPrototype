import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/app';

const port = 3000;
const app = express();

/**
 * Render React app on index
 */
app.get('/', (req, res) => {
    const body = renderToString(<App/>);
    const title = "Tesco Prototype - SSR";

    res.send(
        html({ body, title })
    )
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

app.listen(port, () => console.log(`Listening on port ${port}`));
