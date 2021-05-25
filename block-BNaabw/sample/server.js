let express = require('express');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

let app = express();

//logger

app.use(logger('dev'));

//middleware

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());

app.use((req, res, next) => {
  let count = req.cookies.count;
  if (count) {
    res.cookie('count', Number(count) + 1);
  } else {
    res.cookie('count', (count = 1));
  }
  next();
});

//routes

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/projects', (req, res) => {
  res.sendFile(__dirname + '/projects.html');
});

//404 error

app.use((req, res, next) => {
  res.status(404).send(`error 404 :- route "${req.url}" not found`);
});

//custome error

app.use((err, req, res, next) => {
  res.status(500).send(`error 5000 :- Unauthorized Access.`);
});

//listning server

app.listen(4000, () => {
  console.log('server is live on 4000');
});
