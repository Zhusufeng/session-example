const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.use(session({
  secret: 'simple',
  resave: false, // save session even if never modified
  saveUninitialized: true // save session even if new but not modified
}));

// app.get('/', (req, res) => {
//   res.render(index);
// });

app.post('/login', (req, res) => {
  if(!req.session.userName && !req.session.visitCount) {
    req.session.userName = 'lisa';
    req.session.visitCount = 1;
    res.status(201).send(req.session);
  } else {
    req.session.visitCount++;
    res.status(200).send(req.session);
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) console.error('You received this err: ', err);
    console.log('User logged out');
    res.status(200).send('You logged out');
  });
});

module.exports = app;