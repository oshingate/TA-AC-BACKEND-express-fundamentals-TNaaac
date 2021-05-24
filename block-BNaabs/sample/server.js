let express = require('express');

let app = express();

app.use(express.urlencoded());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/new.html');
});

app.post('/new', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.get('/users/:name', (req, res) => {
  res.send(req.params.name);
});

app.listen(3000, () => {
  console.log('server is live on port 3000');
});
