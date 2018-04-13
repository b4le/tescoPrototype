import express from 'express';
const MongoClient = require('mongodb').MongoClient;

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
import App from './reducers/index.js';

import routes from './routes';

const port = 3000;
const app = express();
const router = express.Router();

/**
 * Setup the database connection from the provided URL
 * @param {String} url 
 */
const getMongoConnection = (url) => {
    return MongoClient.connect(url).then((client) => {
            return client.db('shoppingList');
        })
        .catch((err) => {
            throw err
        });
}

/**
 * Use the provided DB to get all the data in the provided collection
 * @param {Object} db 
 * @param {String} type 
 */
const getCollection = (db, type) => {
    return db.collection(type).find().toArray().then((err, result) => {
        if (err) return err;
        return result;
    });
}

/**
 * Create the server and setup the router including grabbing data
 * @param {Object} db 
 */
const setupServer = (db) => {
    /**
     * Render React app on index
     */
    router.get('*', (req, res) => {
        let context = {};

        // Init style sheet
        const sheet = new ServerStyleSheet();

        Promise.all([getCollection(db, 'lists'), getCollection(db, 'internalLists')])
            .then(([lists, internalLists]) => {
                let preloadedState = { lists, internalLists };

                // Init redux store
                const store = createStore(App, preloadedState);

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
            })
            .catch((err) => {
                throw err;  
            });        
    });

    
    app.use(express.static('build'))
    app.use('/', router);

    app.listen(port, () => console.log(`Listening on port ${port}`));
}

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
        <script src="/bundle.js"></script>
    </body>
    </html>
    `
}

getMongoConnection('mongodb://localhost:27017').then((db) => setupServer(db));