let express = require('express');
let logger = require('morgan');

let app = express();

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('index file');
});

app.get('/about', (req, res) => {
  res.send('about page');
});

app.get('/admin', (req, res, next) => {
  next('admin page is not available');
});

app.use((req, res) => {
  res.send('404 page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('port is live on 3000');
});
