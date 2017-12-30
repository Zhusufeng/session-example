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

const users = {
  lisa: {
    name: 'lisa',
    totalCount: 100
  }
};

app.post('/signup', (req, res) => {
  console.log(req.body.username);
  let name = req.body.username;

  // Check if name already has an account
  if (users[name]) {
    req.session.error = `${name}, you already have an account. Please use log in option.`;
    res.status(200).send(req.session);
  } 
  // If name does not have an account, create
  else {
    return req.session.regenerate(() => {
      users[name] = {
        name: name,
        totalCount: 1
      };
      req.session.user = users[name];
      req.session.visitCount = 1;
      req.session.error = null;
      res.status(201).send(req.session);
    });
  }
});

app.post('/login', (req, res) => {
  console.log(req.body.username);
  let name = req.body.username;

  // Check if name does NOT have an account
  if (!users[name]) {
    req.session.user = null;
    req.session.error = `${name}, you do not have an account. Please use sign up option.`;
    res.status(200).send(req.session);
  } 
  // If name EXISTS, log in
  else {
    return req.session.regenerate(() => {
      req.session.user = users[name]; // saves a shallow copy for the cookie? which does not change until I set it again
      req.session.error = null;
      users[name].totalCount++;
      req.session.visitCount = 1;

      console.log(users);
      res.status(200).send(req.session);
    });
  }
});

app.post('/visit', (req, res) => {
  if (!req.session.visitCount) {
    req.session.error = `You are not logged in. Please log in.`;
    res.status(200).send(req.session);
  } else {
    console.log(`${req.session.user.name} is logged in`)
    // req.session.user.visitCount++; // this does not seem to update the users object?
    users[req.session.user.name].totalCount++;
    req.session.visitCount++;
    console.log(users); // this shows the users object updates
    res.status(200).send(req.session);
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    let myResponse = {};
    if (err) {
      console.error('You received this err: ', err);
      myResponse.error = err;
    }
    console.log('User logged out');
    myResponse.message = 'User logged out';
    res.status(200).send(myResponse);
  });
});

module.exports = app;