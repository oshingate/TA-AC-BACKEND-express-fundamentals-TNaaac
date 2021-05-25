let express = require('express');

let app = express();
let store = '';

app.use((req, res, next) => {
  let current = new Date();
  console.log(req.method, req.url, current);
  next();
});

// app.use((req, res, next) => {
//   next();
// });

app.get('/stylesheets/style.css', (req, res) => {
  res.sendFile(__dirname + '/public/stylesheets/style.css');
});

app.get('/media/cat.jpg', (req, res) => {
  res.sendFile(__dirname + '/public/media/cat.jpg');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/json', (req, res) => {
  console.log('initiated');

  setTimeout(() => {
    console.log(req.body, 'post/json');
    res.send(req.body);
  }, 0);
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    req.body = JSON.parse(store);
    console.log(req.body, 'start');
  });
});

app.listen(3000, () => {
  console.log('server is live on port 3000');
});
