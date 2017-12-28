const express = require('express');
const session = require('express-session');

const app = express();

app.use(session{

});

app.listen(8088, () => {
  console.log('session-example listening on port 8088');
});