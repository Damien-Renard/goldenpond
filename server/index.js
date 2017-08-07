const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const db = require('../db/db');

const PORT = process.env.PORT || 3000;

const app = express();

db.sync();

/* ---- LOGGING MIDDLEWARE ---- */
app.use(volleyball);

/* ---- BODY-PARSING MIDDLEWARE ---- */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ---- SERVER LISTENS ---- */
app.listen(PORT, () => {
  console.log('SERVER LISTENING ON PORT: ', PORT); // eslint-disable-line
});

/* ---- STATIC PATHS ---- */
app.use(express.static(path.join(__dirname, '..', 'client/src')));
app.use(express.static(path.join(__dirname, '..', 'public')));

/* ---- REQUIRE API INDEX ---- */
app.use('/api', require('./api'));

/* ---- SERVE HTML FILE ---- */
app.get('*', (req, res, next) => { // eslint-disable-line
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

/* ---- ERROR HANDLING MIDDLEWARE ---- */
app.use('/', (err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).send(err.message || 'INTERNAL SERVER ERROR');
});
