const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

const routes = [
    { path: '/', page: 'index' },
    { path: '/home', page: 'index' },
    { path: '/index.html', page: 'index' },
    { path: '/contacts', page: 'contacts' },
    { path: '/about-us', redirect: '/contacts' },
];

routes.forEach(({ path, page, redirect }) => {
    if (redirect) {
        app.get(path, (req, res) => {
            res.redirect(redirect);
        });
    } else {
        app.get(path, (req, res) => {
            res.sendFile(createPath(page));
        });
    }
});

app.use((req, res) => {
    res
        .status(404)
        .sendFile(createPath('error'));
});
