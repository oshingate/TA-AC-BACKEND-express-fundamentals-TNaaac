let express = require('express');
let morgan = require('morgan');
let cookiesParser = require('cookie-parser');

let app = express();

app.use(morgan('dev'));

app.use(cookiesParser());

app.use((req, res, next) => {
  let count = req.cookies.count;
  //   console.log(req.cookies);
  if (count) {
    res.cookie('count', Number(count) + 1);
  } else {
    res.cookie('count', 1);
  }
  console.log(count);
  next();
});

app.get('/about', (req, res) => {
  res.send('this is index page');
});

app.listen(3000, () => {
  console.log('server is live on 3000');
});
