'use strict';

const express = require('express');
const assert = require('assert');


// Constants
const PORT = 3000;
const HOST = '0.0.0.0';


console.log("starting...");

const app = express();
app.set('views', "./src/views");
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  let id = req.params['id'];

  res.render('index');
});

app.get('/:id', (req, res) => {
  let id = req.params['id'];

  res.render('index', { imageUrl:  id });
});
app.get('/foo', (req, res) => {

  console.log("foo");

});






app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
