const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Hello World!</h1>
            </body>
        </html>
    `);
});

module.exports = routes; 