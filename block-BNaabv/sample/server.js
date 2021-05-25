let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

//logger middleware
app.use(logger('dev'));

app.use(cookieParser());
//middlewares
app.use(express.json());

app.use(express.urlencoded());

app.use((req, res, next) => {
  let cookie = req.cookies.count;
  if (cookie) {
    res.cookie('count', Number(cookie) + 1);
  } else {
    res.cookie('count', (cookie = 1));
  }
  console.log(cookie);
  next();
});
//router middlewares

app.get('/', (req, res) => {
  res.send('<h2>Welcome to express</h2>');
});

app.get('/about', (req, res) => {
  res.send('this is querty');
});

app.get('/users/:username', (req, res) => {
  res.send(req.params.username);
});

app.post('/form', (req, res) => {
  res.send(req.body);
});

app.post('/json', (req, res) => {
  res.send(req.body);
});

app.get('/admin', (req, res, next) => {
  next('Unauthorized Access');
});
//404 handler

app.use((req, res, next) => {
  res.status(404).send('Error 404 -route not found');
});

//custome error handler
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

// server listener

app.listen(3000, () => {
  console.log('server is live on 3000');
});
