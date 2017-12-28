const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: 'simple',
  resave: false, // save session even if never modified
  saveUninitialized: true // save session even if new but not modified
}));

app.get('/', (req, res) => {
  if(!req.session.userName && !req.session.visitCount) {
    req.session.userName = 'lisa';
    req.session.visitCount = 1;
    res.status(201).send(req.session);
  } else {
    req.session.visitCount++;
    res.status(200).send(req.session);
  }
});

app.listen(8088, () => {
  console.log('session-example listening on port 8088');
});