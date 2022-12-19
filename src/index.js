//  https://github.com/sondnpt00343/nodejs_blog

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes'); // Không cần gõ file index.js vì nó tự nạp

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'))

// template engine
app.engine('hbs', engine({ extname: '.hbs' }));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/resources/views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
