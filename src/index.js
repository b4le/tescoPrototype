import express from 'express';

//  React
import React from 'react';
import { renderToString } from 'react-dom/server';

// React Router
import StaticRouter from 'react-router-dom/StaticRouter';
import { renderRoutes } from 'react-router-config';

// Styled Components
import { ServerStyleSheet } from 'styled-components';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ListApp from './reducers/index.js';

import routes from './routes';

const port = 3000;
const app = express();
const router = express.Router();

/**
 * Render React app on index
 */
router.get('*', (req, res) => {
    let context = {};

    // Init style sheet
    const sheet = new ServerStyleSheet();

    const lists = [
        {
            "id": "1",
            "title": "First List"
        },
        {
            "id": "2",
            "title": "Second List"
        },
        {
            "id": "3",
            "title": "Third List"
        }
    ]

    let preloadedState = { lists };

    // Init redux store
    const store = createStore(ListApp, preloadedState);

    const body = renderToString(
        sheet.collectStyles(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    {renderRoutes(routes)}
                </StaticRouter>
            </Provider>
        )
    );
    const finalState = store.getState();
    const styles = sheet.getStyleTags();
    const title = "Tesco Prototype - SSR";

    if (context.url) {
        redirect(301, context.url)
    } else {
        res.send(
            html({ body, styles, title, finalState })
        )
    }
});

/**
 * Prepare HTML for injection
 * @param {body, styles, title, finalState} param0 
 */
const html = ({ body, styles, title, finalState}) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${styles}
    </head>
    <body>
        <section id="root">${body}</section>
        <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(/</g, '\\u003c')}
        </script>
        <script src="bundle.js"></script>
    </body>
    </html>
    `
}
app.use(express.static('build'))
app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));
