let express = require('express');

let app = express();

app.use('/', (req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/about', (req, res) => {
  res.send('this is about page');
});

app.listen(4000, () => {
  console.log('server is live on port 4000');
});
